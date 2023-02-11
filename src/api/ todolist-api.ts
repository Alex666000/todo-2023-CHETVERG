import axios from "axios"
import {CreateTodolist} from "../stories/ todolists-api.stories";

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        "API-KEY": "84555aa7-1bce-45f1-a7cc-318612caede4"
    },
}

export const todolistAPI = {
    getTodolists() {
        const promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise
    },
    updateTodolist(todolistId: string, newTitle: string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: newTitle}, settings)
        return promise
    },
    createTodolist(newTitle: string) {
        const promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: newTitle})
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return promise
    },

}