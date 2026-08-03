import {} from "./type.js";
import { readTasksFromFile, writeTaskFromFile } from "./storage.js";
export async function addTask(description) {
    const tasks = await readTasksFromFile();
    const novaTask = {
        id: tasks.length,
        description: description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    tasks.push(novaTask);
    writeTaskFromFile(tasks);
}
;
export async function updateTask(task_id, newDescription) {
    try {
        const tasks = await readTasksFromFile();
        const task = tasks.find(t => t.id === task_id);
        if (task) {
            task.description = newDescription;
            task.updatedAt = new Date().toISOString();
            await writeTaskFromFile(tasks);
        }
    }
    catch (error) {
        console.error("Error in updating task's description!", error);
    }
}
//# sourceMappingURL=taskService.js.map