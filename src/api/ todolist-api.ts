import axios, {AxiosResponse} from "axios"

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
        return instance.get<TodolistType[]>("todo-lists")
    },
    updateTodolist(p: { todolistId: string, newTitle: string }) {
        return instance.put<" ", AxiosResponse<ResponseType>, { title: string }>(`todo-lists/${p.todolistId}`, {title: p.newTitle})
    },
    createTodolist(title: string) {
        return instance.post<" ", AxiosResponse<ResponseType<{ item: TodolistType }>, { title: string }>>("todo-lists", {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    getTasks(todolistId: string) {
        return instance.get<TasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTasks({todolistId, newTitle}: { todolistId: string, newTitle: string }) {
        return instance.post<" ", AxiosResponse<CreateTasksResponseType>, { title: string }>(`todo-lists/${todolistId}/tasks`, {title: newTitle})
    },
    updateTasks(todolistId: string, taskId: string) {
        let model: UpdateTaskType = {
            title: " ",
            description: " ",
            completed: true,
            status: 200,
            priority: 3,
            startDate: " ",
            deadline: " ",
        };
        return instance.put<" ", AxiosResponse<UpdateTaskType>, { model: UpdateTaskType }>(`todo-lists/${todolistId}/tasks/${taskId}`, {model}
        )
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
}
// types
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export type ResponseType<D = {}> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}
// types tasks
export type TasksResponseType = {
    items: TaskType[];
    totalCount: number;
    error?: any;
}
export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3,
}
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Urgently = 2,
    Later = 3,
}

export type TaskType = {
    id: string;
    title: string;
    description?: string
    todoListId: string;
    order: number;
    // status: number;
    status: TaskStatuses;
    priority: TaskPriorities;
    startDate?: string
    deadline?: any;
    addedDate: string;
}
type CreateTasksResponseType = {
    data: TaskType;
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









