import React, {useEffect, useState} from "react"
import axios from "axios";
import {todolistAPI} from "../api/ todolist-api";

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
        todolistAPI.getTodolists()
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
        todolistAPI.createTodolist(newTitle)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "bc5a6fa9-376f-4aa1-8cb7-c0a7f66c1a11"
        todolistAPI.deleteTodolist(todolistId)
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

        todolistAPI.updateTodolist(todolistId, newTitle)
            .then((res) => {

                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


//----------------------------------------------------------------------------
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "0843a9fd-c6a8-454e-a230-cfcf81e7940b"

        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "0843a9fd-c6a8-454e-a230-cfcf81e7940b"
        const newTitle = "qqqqqqqqqqqq"

        todolistAPI.createTasks(todolistId, newTitle)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "0843a9fd-c6a8-454e-a230-cfcf81e7940b"
        const taskId = "19cf4dec-9c8f-497e-b948-b0e383fc8752"

        todolistAPI.updateTasks(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState(' ')
    const [todolistId, setTodolistId] = useState(' ')


    const deleteTask = () => {
        const taskId = "3001e926-36a4-4515-a397-7942d4ad6670"
        const todolistId = "0843a9fd-c6a8-454e-a230-cfcf81e7940b"

        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <>
        <input value={taskId} onChange={ (e) => {setTaskId(e.currentTarget.value)} }/>
        <input value={todolistId} onChange={ (e) => {setTodolistId(e.currentTarget.value)} }/>

        <button onClick={deleteTask}>Delete task</button>
        <div>{JSON.stringify(state)}</div>
    </>

}














































