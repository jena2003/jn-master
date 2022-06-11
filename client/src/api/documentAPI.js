import {$api} from "./index"

export const addDocument= async(name,file,id) => {
    try {
         id = 1
        const response = await $api.post(`/documents/`,{name,file,id})
        return response

    }catch (e){
        console.log(e)
    }
}
