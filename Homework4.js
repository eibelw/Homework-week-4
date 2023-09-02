const array = [];
const arrayganjil = [];
const arraygenap = [];

for (let i = 0; i < 100; i++) {
  const randomnumber = Math.floor(Math.random() * 51);
  array.push(randomnumber);
  if (i % 2 === 0) {
    arraygenap.push(randomnumber);
  } else {
    arrayganjil.push(randomnumber);
  }
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
  totalganjil += arrayganjil[i];
}

for (i = 0; i < arraygenap.length; i++) {
  totalgenap += arraygenap[i];
}

console.log("Nilai Total Array Ganjil:", totalganjil);
console.log("Nilai Total Array Genap:", totalgenap);

let avgganjil = totalganjil / arrayganjil.length;
console.log("Nilai Rata-rata Array Ganjil:", avgganjil);

let avggenap = totalgenap / arraygenap.length;
console.log("Nilai Rata-rata Array Genap:", avggenap);

function bandingmin() {
  if (minganjil > mingenap) {
    return "Hasil Perbandingan Nilai Min Array Ganjil Lebih Besar Dari Array Genap";
  } else if (minganjil < mingenap) {
    return "Hasil Perbandingan Nilai Min Array Ganjil Lebih Kecil Dari Array Genap";
  } else {
    return "Hasil Perbandingan Nilai Min Array Ganjil Sama Dengan Array Genap";
  }
}

function bandingmax() {
  if (maxganjil > maxgenap) {
    return "Hasil Perbandingan Nilai Max Array Ganjil Lebih Besar Dari Array Genap";
  } else if (maxganjil < maxgenap) {
    return "Hasil Perbandingan Nilai Max Array Ganjil Lebih Kecil Dari Array Genap";
  } else {
    return "Hasil Perbandingan Nilai Max Array Ganjil Sama Dengan Array Genap";
  }
}

function bandingtotal() {
  if (totalganjil > totalgenap) {
    return "Hasil Perbandingan Nilai Total Array Ganjil Lebih Besar Dari Array Genap";
  } else if (totalganjil < totalgenap) {
    return "Hasil Perbandingan Nilai Total Array Ganjil Lebih Kecil Dari Array Genap";
  } else {
    return "Hasil Perbandingan Nilai Total Array Ganjil Sama Dengan Array Genap";
  }
}

function bandingavg() {
  return (nilai =
    avgganjil > avggenap
      ? "Hasil Perbandingan Nilai Rata-rata Array Ganjil Lebih Besar Dari Array Genap"
      : avgganjil < avggenap
      ? "Hasil Perbandingan Nilai Rata-rata Array Ganjil Lebih Kecil Dari Array Genap"
      : "Hasil Perbandingan Nilai Rata-rata Array Ganjil Sama Dengan Array Genap");
}

console.log(bandingmin(minganjil, mingenap));
console.log(bandingmax(maxganjil, maxgenap));
console.log(bandingtotal(totalganjil, totalgenap));
console.log(bandingavg(avgganjil, avggenap));
