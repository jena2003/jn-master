import {$api} from "./index"

export const addAuthor = async(
  name,
  surname,
  patronymic,
  city,
  adress,
  posteCode,
  education,
  specialtyCode,
  work,
  position,
  academicDegree
  ) => {
    try {
        const id = localStorage.getItem('SavedToken')
        const response = await $api.post(`/author/${id}`,{
          name,
          surname,
          patronymic,
          city,
          adress,
          posteCode,
          education,
          specialtyCode,
          work,
          position,
          academicDegree
        })
        return response
    }catch (e){
        console.log(e)
    }
  }
export const getAuthor = async(id = localStorage.getItem('userId')) => {
      try {
          const response = await $api.get(`/authors/${id}`)
          return response
      }catch (e){
          console.log(e)
      }
  
  }