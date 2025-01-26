// Hellobirthday("ahmad", 26);

// function Hellobirthday(username,age) {
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear ${username}`);
//     console.log(`Happy birthday to you and you are turning ${age}`);
// }

// CALLBACKS !!

// hello(leave);


// function hello(callback) {
//     console.log("HELLO!");
//     callback();
// }

// function leave() {
//     console.log("LEAVE!");
// }

// function wait() {
//     console.log("WAIT!");
// }

// function goodbye(){
//     console.log("GOODBYE!");
// }

    sum(displayconsole,5 ,5);   
 

    function sum(callback,x ,y) {
        let result = x + y ;
        callback(result);
    }
    function displayconsole(result) {
        console.log(result);
    }
