import axios from "axios"
import { apis } from "./api"
export async function asyncGet(api: string,credentials?:boolean) {
    try {
        const res: Response = credentials?await fetch(api,{credentials: 'include'}):await fetch(api)
        try {
            let data = res.json()
            return data
        } catch (error) {
            console.log(error)
            return error
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function asyncPost(api: string, body: {} | FormData) {
    const res: Response = await fetch(api, {
        method: 'POST',
        credentials: 'include',
        headers:new Headers({
            'Access-Control-Allow-Origin':"http://localhost:5173/",
            'content-Type':"application/json"
        }),
        body: body instanceof FormData?body:JSON.stringify(body),
        mode:"cors"
    })
    try {
        let data = res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function asyncPatch(api: string, body: {} | FormData) {
    const res: Response = await fetch(api, {
        method: 'PATCH',
        headers:new Headers({
            'Access-Control-Allow-Origin':"http://localhost:5173/",
        }),
        body: body instanceof FormData?body:JSON.stringify(body),
        mode:"cors"
    })
    try {
        let data = res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function login(name:string,password:string,callBack:Function) {
    const formData = new FormData()
    formData.append('username', name)
    formData.append('password', password)
    axios.post(apis.login, formData,{
        withCredentials:true
    }).then(res => {
        callBack(res.data)
    })
}

export async function register(body: {}) {
    const res: Response = await fetch(apis.register, {
        method: 'POST',
        credentials: 'include',
        headers:new Headers({
            'Access-Control-Allow-Origin':"http://localhost:5173/",
            'content-Type':"application/json",
            'Authorization':process.env.auth as string
        }),
        body: JSON.stringify(body),
        mode:"cors"
    })
    try {
        let data = res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}