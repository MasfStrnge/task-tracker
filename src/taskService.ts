import { type Task } from "./type.js";
import { readTasksFromFile, writeTaskFromFile } from "./storage.js";

export default async function addTask( description: string): Promise<void> {

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

}
