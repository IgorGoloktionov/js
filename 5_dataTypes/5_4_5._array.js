"use strict";

function getMaxSubSum(arr) {
    let targetSum = 0;
    let sum = 0;
  
    for (let item of arr) {

        sum += item;

        targetSum = Math.max(sum, targetSum)

        if (sum < 0) sum = 0;

    }
  
    return maxSum;
  }