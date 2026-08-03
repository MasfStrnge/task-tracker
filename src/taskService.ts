import { type Task } from "./type.js";
import { readTasksFromFile, writeTaskFromFile } from "./storage.js";

export async function addTask( description: string): Promise<void> {

    const tasks: Task[] = await readTasksFromFile();

    const novaTask: Task = {
        id: tasks.length,
        description: description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    tasks.push(novaTask);
    writeTaskFromFile(tasks);

};


export async function updateTask(task_id: number, newDescription: string): Promise<void> {
    
    try {

    const tasks: Task[] = await readTasksFromFile();

    const task = tasks.find(t => t.id === task_id);

    if(task)   {

        task.description = newDescription;
        task.updatedAt = new Date().toISOString();
        
        await writeTaskFromFile(tasks)

    } 

    } catch(error) {

        console.error("Error in updating task's description!", error);

    }
   
}
