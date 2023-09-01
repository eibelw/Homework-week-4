const array = [];

for (let arr = 0; arr < 100; arr++) {
  const randomnumber = Math.floor(Math.random() * 51);
  array.push(randomnumber);
}

const arrayganjil = [];
const arraygenap = [];

let i = 0;

while (arraygenap.length < 50 && arrayganjil.length < 50) {
  const angka = array[i];
  if (angka % 2 === 0) {
    arraygenap.push(angka);
  } else {
    arrayganjil.push(angka);
  }
  i++;
}

console.log("Array:", array);
console.log("Array Ganjil:", arrayganjil);
console.log("Array Genap:", arraygenap);

let minganjil = arrayganjil[0];
let mingenap = arraygenap[0];

for (let i = 0; i < arrayganjil.length; i++) {
  if (arrayganjil[i] < minganjil) {
    minganjil = [arrayganjil[i]];
  }
}

for (let i = 0; i < arraygenap.length; i++) {
  if (arraygenap[i] < mingenap) {
    mingenap = [arraygenap[i]];
  }
}

console.log("Nilai Min Array Ganjil:", minganjil);
console.log("Nilai Min Array Genap:", mingenap);

let maxganjil = arrayganjil[0];
let maxgenap = arraygenap[0];

for (let i = 0; i < arrayganjil.length; i++) {
  if (arrayganjil[i] > maxganjil) {
    maxganjil = [arrayganjil[i]];
  }
}

for (let i = 0; i < arraygenap.length; i++) {
  if (arraygenap[i] > maxgenap) {
    maxgenap = [arraygenap[i]];
  }
}
console.log("Nilai Max Array Ganjil:", maxganjil);
console.log("Nilai Max Array Genap:", maxgenap);

let totalganjil = 0;
let totalgenap = 0;

for (i = 0; i < arrayganjil.length; i++) {
  totalganjil += 1;
}

for (i = 0; i < arraygenap.length; i++) {
  totalgenap += 1;
}

console.log("Nilai Total Array Ganjil:", totalganjil);
console.log("Nilai Total Array Genap:", totalgenap);
