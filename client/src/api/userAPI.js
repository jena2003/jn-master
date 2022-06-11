import {$api} from "./index"

export const addUser = async(name,surname,email,password) => {
    try {
        const response = await $api.post('/users',{name,surname,email,password})
        return response

    }catch (e){
        console.log(e)
    }

}
export const getUser = async(id) => {
    try {
        const response = await $api.get('/users' + id)
        return response
    }catch (e){
        console.log(e)
    }

}
export const getUsers = async() => {
    try {
        const response = await $api.get('/users')
        return response
    }catch (e){
        console.log(e)
    }

}
export const updateUser = async(id,data) => {
    try {
        const response = await $api.put('/users' + id,data)
        return response
    }catch (e){
        console.log(e)
    }

}

export const deleteUser = async(id) => {
    try {
        const response = await $api.delete('/users' + id)
        return response
    }catch (e){
        console.log(e)
    }

}