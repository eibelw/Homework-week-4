const arr =[]

for ( let i = 0; i < 100; i++) {
    const randomnumb = Math.round(( Math.random() * 50)+ 1);
    arr.push(randomnumb)
}

console.log(arr);

const arrOdd=[]
const arrEven=[]

for (let i = 0; i < 10; i++) {
    console.log(i, '<<< index')
    arrEven.push(arrOdd)
}

console.log(arrEven)