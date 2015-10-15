var ar = [5, 7, 'items'];
console.log(ar);

ar[3] = 42;
console.log(ar);

ar = 4;

console.log(ar);
ar = [];
ar[2] = 'val 1';
ar[5] = 'val 3';
console.log(ar);

ar['hello'] = 'something';
console.log(ar);

console.log(ar['hello']);
index = 'hello';

console.log(ar[index]);

for (x of ar) {
  //console.log(x);
}

for (x in ar) {
  console.log('key ' + x + '\nvalue: ' +ar[x]);
}

