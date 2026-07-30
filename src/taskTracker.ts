#!/usr/bin/env node //shebang

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { promises as fs } from 'node:fs';
import { type Task } from './type.js';
import addTask from './functions.js'

const rl = readline.createInterface({ input, output });

let quantidadeTask: number = 0;

console.log("====================================\n");
console.log("        TASK TRACKER 1.0            \n");
console.log("====================================\n");

console.log("Use the command bellow: ");
console.log("add [description]");
coletarDados();

async function coletarDados() {

    process.argv[3] = '';

    const [,, command, description] = process.argv;

    switch (command) {
        case 'add':
        
        const task: Task = addTask(quantidadeTask, description);
        salvarDados(task);

        break;
    }

    process.exit;
}

async function salvarDados(task: Task) {

    try {

        const json = JSON.stringify(task, null, 2);

        await fs.writeFile('tasks.json', json);
        console.log('Task created!\n');
        quantidadeTask++;


    } catch (err) {
        console.error('Error in creating task, try again');
    }
}













