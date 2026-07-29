import {} from "./type.js";
export default function addTask(quantidadeTask, description) {
    const novaTask = {
        id: quantidadeTask + 1,
        description: description,
        status: "todo",
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
    return novaTask;
}
//# sourceMappingURL=functions.js.map