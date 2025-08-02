
{
    var b = 20;

    let a= 10;
    console.log(" Block scope var : ",b);
    console.log(" Block scope let : ",a);
}
console.log(" global scope var : ",b);
console.log(" global scope let : ",a);

/*
Uncaught ReferenceError: a is not defined
    at fourth.js:10:36
(anonymous) @ fourth.js:10
*/