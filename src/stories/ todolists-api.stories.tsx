import React, {useEffect, useState} from "react"
import axios from "axios";

export default {
    title: "API"
}

/* const settings = {
    // нужен для CORS
    // всегда отправляем: определяет, должны ли межсайтовые (кроссдоменные) запросы выполняться с использованием учетных данных (cookie)
    withCredentials: true,
    // Чтобы отправлять запросы на изменение данных на сервере (CRUD), нужно в объект settings добавить свой персональный ‘API-KEY
    headers: {
        "API-KEY": "84555aa7-1bce-45f1-a7cc-318612caede4"
    }
} */

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        // смотрим док-цию: базовый url + endpoint
        axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists")
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const newTitle = "HELLO!!!"
        // для создания чего-либо передаем объект: ключ = значение что создаем и в конце настройки CORS и свой auth ключ
        axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: newTitle})
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "5faca6df-4ede-4320-811e-9b35cb4082a8"

        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    // Давайте научимся обновлять title для существующего тудулиста!
    useEffect(() => {
        const todolistId = "af815ac5-abe2-4989-9d90-b00bb73607f1"
        const newTitle = "Rembo"

        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: newTitle})
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}