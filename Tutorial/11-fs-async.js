const { readFile, writeFile } = require('fs')

console.log("Starting the task")
// this called , callBack Hell 
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `here is the result : ${first} and ${second} text`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            console.log("Done with task")
        });
    })


})

console.log("ending of task");