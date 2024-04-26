#! /usr/bin/env node
import inquier from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blueBright('\n \t \t Well come to word counter'));
console.log("=".repeat(70));
let answer = await inquier.prompt({
    name: "sentence",
    type: 'input',
    message: "Enter your sentence"
});
let word = answer.sentence.trim().split(" ");
console.log("=".repeat(70));
console.log(chalk.bold.green("\t \t Sentence word :"));
console.log(word);
console.log("=".repeat(70));
console.log(`${chalk.bold.redBright("\t \t Sentence count :")}${word.length}`);
