import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        "API-KEY": "84555aa7-1bce-45f1-a7cc-318612caede4",
    },
})

export const todolistAPI = {
    getTodolists() {
        return instance.get<TodolistResponseType[]>("todo-lists")
    },
    updateTodolist(todolistId: string, newTitle: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title: newTitle})
    },
    createTodolist(newTitle: string) {
        return instance.post<ResponseType<{ item: TodolistResponseType }>>("todo-lists", {title: newTitle})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    getTasks(todolistId: string) {
        return instance.get<TasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTasks(todolistId: string, newTitle: string) {
        return instance.post<CreateTasksResponseType>(`todo-lists/${todolistId}/tasks`, {title: newTitle})
    },
    updateTasks(todolistId: string, taskId: string) {
        let model = {
            title: ' ',
            description: ' ',
            completed: true,
            status: 200,
            priority: 3,
            startDate: ' ',
            deadline: ' ',
        };
        return instance.put<UpdateTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`, model
        )
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
}
// types
type TodolistResponseType = {
    id: string
    title: string
    addedDate: string
    order: number
}
type ResponseType<D = {} > = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}
// types tasks
export type TasksResponseType = {
    items: TaskResponseType[];
    totalCount: number;
    error?: any;
}
type TaskResponseType = {
    id: string;
    title: string;
    description?: string
    todoListId: string;
    order: number;
    status: number;
    priority: number;
    startDate?: string
    deadline?: any;
    addedDate: string;
}
type CreateTasksResponseType = {
    data: TaskResponseType;
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
}
type UpdateTaskType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}









