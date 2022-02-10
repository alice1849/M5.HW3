console.log('First part:');
const count = () => {
    let counter = 0;

    return function(number){
        counter += number;
        console.log(counter);
    }
}

let counter = count();
counter(3);
counter(5);
counter(235);

console.log('Second Part')
const func = () => {
    let array = [];

    return function(value){
        if (value === undefined){
            array = [];
        } else { 
        array.push(value);
        console.log(array);
        }
    }
}
let getUpdateArr = func();
getUpdateArr(3);
getUpdateArr(5);
getUpdateArr({name: 'Vasya'});
getUpdateArr();
getUpdateArr(4);

