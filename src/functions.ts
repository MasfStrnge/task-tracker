import { type Task } from "./type.js";

export default function addTask(quantidadeTask: number, description: string): Task {
    
    const novaTask: Task = {
        id: quantidadeTask + 1,
        description: description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    return novaTask;
}
