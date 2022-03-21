import {readFile} from 'fs';
const Queue = require('./queue');

const queue = new Queue();

function main() {
    console.log('This is our maze solver !');
    readFile('maps/rect_03.map', "UTF-8", (err, data) => {
        if (err) throw err;
        const lines = data.split('\n');
        let [width, height] = lines[0].split("x")
    
        const grid = lines.slice(1).map((line) => {
            return line.split('')
        })

        if(height === undefined) {
            width = lines.length
            height = grid[0].length
        }

        let x = 0;
        let y = 0;
        let startX = null;
        let startY = null;
        let finX = null;
        let finY = null;
        let currentX = null;
        let currentY = null;
        let isFound = false;
        const matrix = [];
        for (const line of lines) {
            for (const value of line.split('')) {
                if (value === '1') {
                    startX = x;
                    startY = y;
                    currentX = x;
                    currentY = y;
                }
                if (value === '2') {
                    finX = x;
                    finY = y;
                }
                y ++;
            }
            matrix.push(line.split(''));
            x ++;
        }
        while (!isFound) {

            if(currentX > 0 && matrix[currentX - 1][currentY] === '2' || matrix[currentX - 1][currentY] === ' '){ 
                currentX--; 
                queue.enqueue([currentX, currentY]); 
                console.log(queue) 
                isFound=true; 
                continue; 
            };

            if(currentX > 0 && matrix[currentX + 1][currentY] === '2' || matrix[currentX + 1][currentY] === ' '){ 
                currentX++; 
                queue.enqueue([currentX, currentY]); 
                console.log(queue) 
                isFound=true; 
                continue; 
            };

            if(currentX > 0 && matrix[currentX1][currentY - 1] === '2' || matrix[currentX][currentY - 1] === ' '){ 
                currentY--; 
                queue.enqueue([currentX, currentY]); 
                console.log(queue) 
                isFound=true; 
                continue; 
            };

            if(currentX > 0 && matrix[currentX][currentY + 1] === '2' || matrix[currentX][currentY + 1] === ' '){ 
                currentY++; 
                queue.enqueue([currentX, currentY]); 
                console.log(queue) 
                isFound=true; 
                continue; 
            };
            
        }
    });

}


main();