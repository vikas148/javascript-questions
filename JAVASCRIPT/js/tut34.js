console.log("this is tut  34");
/*
client to server request or server se request wapis aane me time lgta hai ye time depend krta hai internet connection pr
or us chij pr bhi depend krega ki kitne user us server se connected hai

1 any computation  we do require processor for our javascript engine to get the jobdone
2   many things intract with things outside of the processor for ex:-they may communicate over a network or request data from the 
storage disk
3 This is lot slower than getting it from memory
4 we dont want our processor to sit idle when such things are happening

like 2 requwsts ko 2 alg alg log milkr pura krte hai its called asyncronous programming
ascnchrounus means multitasking like ek kaam ho rha hai or processor free hai to dusra kamm krwa lege usi time

1 an ascynchronous model alows  multiple things to happen at the same tiime
2at synchronos programming model  things happen one at a time back to back
3 ehen you call a fxn that performs a long action it returns only when the action has finished so that it canreturn the resut
4 this stops your program for the time action takes

ther eare 3 ways to write asynchronus  code 

1   Async/await
2 Callback
3 promises
*/

setTimeout(() => {
    for (let index = 0; index < 4000; index++) {
        const element = index;
        console.log("this is index number "+ index);
        
    } 
}, 100);

// for (let index = 0; index < 4000; index++) {
//     const element = index;
//     console.log("this is index number "+ index);
    
// }
console.log('done printing..');