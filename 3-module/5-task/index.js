function getMinMax(str) {
  let arr = str.split(/[\s,]+/);
  arr = arr.map(function (item) {
    return +item;
  })
  let outPut = arr.filter((item) => isFinite(item));
  let max = Math.max.apply(null, outPut);
  let min = Math.min.apply(null, outPut);

  return { min, max };
}
