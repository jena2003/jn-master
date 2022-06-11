import {$api} from "./index"

export const auth = async(email,password) => {
    try {
        const response = await $api.post('/auth',{email,password})
        return response
    }catch (e){
        console.log(e)
    }
}