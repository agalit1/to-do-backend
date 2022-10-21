export type TodoModel = {
    id: string,
    description: string,
    status: {
        OPEN: string,
        IN_PROGRESS: string,
        DONE: string,
     }
}