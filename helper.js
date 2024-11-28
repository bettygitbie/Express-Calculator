function calcMean(nums) {
  if (nums.length === 0) return 0;
  return (
    nums.reduce((acc, ele) => {
      return acc + ele;
    }) / nums.length
  );
}

function checkValidity(nums) {
  let numArray = [];
  for (i = 0; i < nums.length; i++) {
    if (!Number(nums[i])) {
      return console.error(`The value ${nums[i]} should be a number!`);
    } else {
      numArray.push(Number(nums[i]));
    }
  }
  return numArray;
}

function findMode(nums) {
  let count = 0;
  let mode;
  function freqCounter(numsArr) {
    return numsArr.reduce((acc,elem) => {
        acc[elem] = (acc[elem] || 0) + 1;
        return acc;
    }, {});
  }
  const counter = freqCounter(nums);
  for(let key in counter){
    if(counter[key]>count){
        mode = key;
        count = counter[key];
    }
  }
  return mode;
}

function findMedian(nums) {
    nums.sort((a,b)=>a-b);
    let midIdx = Math.floor(nums.length/2);
    if(nums.length%2===0){
        return (nums[midIdx]+nums[midIdx-1])/2;
    }else return nums[midIdx];
}


module.exports = { calcMean, checkValidity, findMode, findMedian };
