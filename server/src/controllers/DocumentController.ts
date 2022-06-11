import {
    JsonController,
    Res,
    Req,
    Body,
    Param,
    Get,
    Post,
    Put,
    Delete,
    // UseBefore,
  } from 'routing-controllers';
 import { getRepository } from 'typeorm';
 import Document from '../models/Document';
 import { validate } from 'class-validator';
 import { v4 as uuidv4 } from 'uuid';
 import path from 'path';
  
  @JsonController()
  export default class DocumentController {
      
@Post('/documents/')
  async post(@Req() req:any,@Res() res: any) {
    const {file} = req.files
    const {id,name} = req.body
    const format = file.name.split('.')
 
    let fileName = uuidv4() + "." + format[format.length - 1]
    
    
    if(format[format.length - 1] !== 'pdf'){
        return res.json({message:"Некорректный формат файла"})
    }
    
    let document = new Document();
  
    let documentData = {
        user:Number(id),
        name:name,
        file:fileName
    }
    document = Object.assign(document, documentData);
    const errors = await validate(document);
    if (errors.length > 0) {
        return res.status(400).send(errors);
    }
    const documentRepo = getRepository(Document);
    try {
        document = await documentRepo.save(document);
        file.mv(path.resolve("./","files",fileName))
    } catch (error) {
        return res.status(404).send(error);
    }
    return document
  }
  /*Получение всех документов созданных конкретным пользователем */
  @Get('/documents/user/:id')
  async getAllByUserId(@Param('id') id:number,@Res() res: any) {
    return getRepository(Document).find({
       where:{
           user:id,
        },
      
       relations:['user']
      });
  }
  /*Получение всех документов созданных в БД */
  @Get('/documents')
  async getAll(@Res() res: any) {
    return getRepository(Document).find({
       relations:['user']
      });
  }
  /*Получение конкретного документа */
  @Get('/documents/:id')
  async getOne(@Param('id') id:number,@Res() res: any) {
    return getRepository(Document).find({
       where:{
           id:id,
        },
       relations:['user']
      });
  }
  /*Обновление документа*/
  @Put('/documents/:id')
  async put(@Param('id') id:number,@Body() documentData: any,@Res() res: any) {
    const documentRepo = getRepository(Document);
    let document;
    try {
      document = await documentRepo.findOneOrFail(id);
    } catch (error) {
      return res.status(404).send('Document not found');
    }
    document = { ...document, ...documentData };
    const errors = await validate(document);
    if (errors.length > 0) {
      return res.status(400).send(errors);
    }

    try {
      document = await documentRepo.save(document);
    } catch (error) {
      return res.status(409).send('Error');
    }
    return document;
  }
  /*Удаление конкретного документа*/
  @Delete('/documents/:id')
  async deleteOne(@Param('id') id: number, @Res() res: any) {
    const documentRepository = getRepository(Document);
    try {
      const document: Document = await documentRepository.findOneOrFail(id);
      documentRepository.delete(document.id);
      return res.status(200).json({message:"Документ удален"})
    } catch (error) {
      return res.status(404).send('Document not found');
    }
  }
  /*Удаление всех документов конкретного пользователя*/
  @Delete('/documents/user/:id')
  async deleteByUserId(@Param('id') id: number, @Res() res: any) {
    const documentRepository = getRepository(Document);
    try {
      const documents = await documentRepository.find({
          where:{
              user:id
          }

      });
      documents.map((item)=>{
        documentRepository.delete(item.id);
      })
      return res.status(200).json({message:"Документы удалены"})
    } catch (error) {
      return res.status(404).send('Document not found');
    }
  }
  }
  