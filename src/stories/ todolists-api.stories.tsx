import React, {useEffect, useState} from "react"
import axios from "axios";

export default {
    title: "API"
}

const settings = {
    // нужен для CORS
    // всегда отправляем: определяет, должны ли межсайтовые (кроссдоменные) запросы выполняться с использованием учетных данных (cookie)
    withCredentials: true,
    // Чтобы отправлять запросы на изменение данных на сервере (CRUD), нужно в объект settings добавить свой персональный ‘API-KEY
    headers: {
        'API-KEY': '84555aa7-1bce-45f1-a7cc-318612caede4'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // для создания чего-либо передаем объект: ключ = значение что создаем и в конце настройки CORS и свой auth ключ
        axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: 'newTodolist'},settings)
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}