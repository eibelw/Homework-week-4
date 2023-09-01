const arr=[]

for (let i = 0; i < 100; i++) {
  const arraynumber = Math.round((Math.random() * 100) + 1)
  arr.push(arraynumber)
}

console.log(arr)