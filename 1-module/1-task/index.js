function factorial(n) {
  let i = 1;
  while (n > 0) {
    i = i * n;
    n--;
  }
  return i;
}
