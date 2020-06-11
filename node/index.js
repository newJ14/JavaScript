#!/usr/bin/env node

// Accessing Standard Library Module 

const fs = require('fs');

// can use process.cwd() without require statement 
fs.readdir(process.cwd(), (err, files) => {
    // Either 
    // err === an error object, which means something went wrong
    // err === null, which means everything is ok 

    if(err) {
        //error handling code here
        // throw new Error(err);
        console.log(err);
    }

    const allStats = Array(files.length).fill(null);

    for (let file of files){
        const index = files.indexOf(file)
        fs.lstat(file, (err, stats) => {
            if(err){
                console.log(err);
            }

            allStats[index] = stats; 

            const ready = allStats.every((stats) => {
                return stats     
            });

            if(ready) {
                allStats.forEach((stats, index) => {
                    console.log(files[index], stats.isFile());
                })
            }
        })
    };


});

// const counterObject = require('./myscript.js')

// console.log(counterObject.getCounter());
// counterObject.incrementCounter();
// console.log(counterObject.getCounter());


// const newCounterObject = require('./myscript.js')
// console.log(newCounterObject.getCounter());

// Debugging
// c - continue excution until program ends or next debugger statement
// n - RUn the next line of code
// s - Step in to a function
// o - Step out of the current function

// node inspect index.js -> Start up a debugger CLI and pause execution whenever a 'debugger' statement is hit 
// node --inspect-brk index.js -> Start up a debugger instance and wait to execute until a debugger is connected. Access the debugger at 'chrome://inspect'

//repl -> start up an execution environment so we can refer to different variables in the program




// chmod +x index.js on terminal (give permission to open this file)