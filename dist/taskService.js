import {} from "./type.js";
import { readTasksFromFile, writeTaskFromFile } from "./storage.js";
export default async function addTask(description) {
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
//# sourceMappingURL=taskService.js.map