import { type Task } from "./type.js";

export default function addTask(quantidadeTask: number, description: string): Task {
    
    const novaTask: Task = {
        id: quantidadeTask + 1,
        description: description,
        status: "todo",
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
    
    return novaTask;
}
