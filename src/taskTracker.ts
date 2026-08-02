#!/usr/bin/env node
import addTask from './taskService.js'

console.log("Welcome to Task Tracker 1.0!");
console.log("Usage: task-cli <command>");
console.log("List of commands:")
console.log("task-cli add [description] - to add a task");

startPrompt();

async function startPrompt() {

    try {

        const argumentos = process.argv.slice(2);

        const command = argumentos[0];

        switch (command) {

            case 'add': {

                try {

                const description = argumentos[1] ? argumentos[1].toString() : '';
                addTask(description);
                console.log("Task was added to the list!")

                } catch(error) {

                    console.error(error);

                }

                break;

            }

        }

        process.exit;

    } catch (error) {

        console.error("Type help to see all available commands!", error);
    }

}

