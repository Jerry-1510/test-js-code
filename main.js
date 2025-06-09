let n = prompt("nhập vào số phần tử trong dãy");
n = parseInt(n);
let max;
let a = [n];
for (let i = 0; i <= n; i++) {
  let element = prompt(`Nhập phần tử thứ ${i + 1}:`);
  a.push(parseFloat(element));
}

if (a.length > 0) {
  max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  console.log(`gia tri lon nhat ${max}`);
}
