const nums = [3,2,1,5,6,4];
const k = 2

const kthLargest = (n, k, m) => {
  if(k === 0) {
      return m
  }
  m = -Infinity
  for(let i = 0; i < n.length; i++) {
      if(m <= n[i]) m = n[i]
  }
  const processedN = [...n].filter(e => e !== m);
  return kthLargest(processedN, k - 1, m)
}

console.log(kthLargest(nums, k));
