import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { promises as fs } from 'node:fs';
import {} from './type.js';
import addTask from './functions.js';
const rl = readline.createInterface({ input, output });
let quantidadeTask = 0;
console.log("====================================\n");
console.log("        TASK TRACKER 1.0            \n");
console.log("====================================\n");
console.log("1 - Create Task");
console.log('2 - Quit\n');
coletarDados();
async function coletarDados() {
    const opcao = await rl.question('Choose an option from 1 to 2\n');
    switch (opcao) {
        case '1':
            const descricao = await rl.question('Description: \n');
            const task = addTask(quantidadeTask, descricao);
            salvarDados(task);
            break;
    }
    rl.close();
}
async function salvarDados(task) {
    try {
        const json = JSON.stringify(task, null, 2);
        await fs.writeFile('tasks.json', json);
        console.log('Task created!\n');
    }
    catch (err) {
        console.error('Error in creating task, try again');
    }
}
//# sourceMappingURL=taskTracker.js.map