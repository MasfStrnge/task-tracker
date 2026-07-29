import {} from "./type.js";
export default function addTask(quantidadeTask, description) {
    const novaTask = {
        id: quantidadeTask + 1,
        description: description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    return novaTask;
}
//# sourceMappingURL=functions.js.map