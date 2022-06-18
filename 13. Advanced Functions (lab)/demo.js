function execute(func, text) {
    const str = func();

    console.log(`${str}${text}`);
}

//const myFunc = () => 'hello ';
//console.log(myFunc.call());
//const otherFunc = () => 'how are you';
const myFunc = () => 'hello ';


execute(myFunc, 'world!')
//execute(otherFunc, '?')
