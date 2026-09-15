// You are given an integer array nums of length n and an integer target.
// Find three integers at distinct indices in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// function closest3sum(nums, target) {
//   const n = nums.length;
//   let closest = nums[0] + nums[1] + nums[2];
//   let gap = Math.abs(closest - target);
//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         const sum = nums[i] + nums[j] + nums[k];
//         const minGap = Math.abs(sum - target);
//         if (minGap < gap) {
//           gap = minGap;
//           closest = sum;
//         } else if (sum === target) {
//           return sum;
//         }
//       }
//     }
//   }
//   return closest;
// }
// console.log(closest3sum([-1, 2, 1, -4], 1));
// console.log(closest3sum([0, 0, 0], 1));
// console.log(closest3sum([1, 1, 1, 5, 5, 5, 5, 5, 5], 14));
// const ar = [
//   833, 736, 953, -584, -448, 207, 128, -445, 126, 248, 871, 860, 333, -899, 463,
//   488, -50, -331, 903, 575, 265, 162, -733, 648, 678, 549, 579, -172, -897, 562,
//   -503, -508, 858, 259, -347, -162, -505, -694, 300, -40, -147, 383, -221, -28,
//   -699, 36, -229, 960, 317, -585, 879, 406, 2, 409, -393, -934, 67, 71, -312,
//   787, 161, 514, 865, 60, 555, 843, -725, -966, -352, 862, 821, 803, -835, -635,
//   476, -704, -78, 393, 212, 767, -833, 543, 923, -993, 274, -839, 389, 447, 741,
//   999, -87, 599, -349, -515, -553, -14, -421, -294, -204, -713, 497, 168, 337,
//   -345, -948, 145, 625, 901, 34, -306, -546, -536, 332, -467, -729, 229, -170,
//   -915, 407, 450, 159, -385, 163, -420, 58, 869, 308, -494, 367, -33, 205, -823,
//   -869, 478, -238, -375, 352, 113, -741, -970, -990, 802, -173, -977, 464, -801,
//   -408, -77, 694, -58, -796, -599, -918, 643, -651, -555, 864, -274, 534, 211,
//   -910, 815, -102, 24, -461, -146,
// ];
// console.log(closest3sum(ar, -7111));


// function closest3sum(nums, target) {
//     const n = nums.length;
//     let closest = nums[0] + nums [1] + nums[2]
//     let gap = Math.abs(closest - target)
//     nums.sort((a,b)=>a-b)
//     for(let i = 0; i<n-2; i++){
//         let j = i+1;
//         let k = n-1;
//         while(j < k){
//             const sum = nums[i] + nums[j] + nums[k]
//             if(sum > target){
//                 if(gap > sum-target){
//                     gap = sum - target
//                     closest = sum
//                 }
//                 k--
//             }
//             else if(target > sum){
//                 if(gap>target-sum){
//                     gap = target - sum
//                     closest=sum
//                 }
//                 j++
//             }else{
//                 return sum
//             }
//         }
//     }
//     return closest
// }
// console.log(closest3sum([-1, 2, 1, -4], 1))
// console.log(closest3sum([0, 0, 0], 1));
// console.log(closest3sum([1, 1, 1, 5, 5, 5, 5, 5, 5], 14));
// const ar = [
//   833, 736, 953, -584, -448, 207, 128, -445, 126, 248, 871, 860, 333, -899, 463,
//   488, -50, -331, 903, 575, 265, 162, -733, 648, 678, 549, 579, -172, -897, 562,
//   -503, -508, 858, 259, -347, -162, -505, -694, 300, -40, -147, 383, -221, -28,
//   -699, 36, -229, 960, 317, -585, 879, 406, 2, 409, -393, -934, 67, 71, -312,
//   787, 161, 514, 865, 60, 555, 843, -725, -966, -352, 862, 821, 803, -835, -635,
//   476, -704, -78, 393, 212, 767, -833, 543, 923, -993, 274, -839, 389, 447, 741,
//   999, -87, 599, -349, -515, -553, -14, -421, -294, -204, -713, 497, 168, 337,
//   -345, -948, 145, 625, 901, 34, -306, -546, -536, 332, -467, -729, 229, -170,
//   -915, 407, 450, 159, -385, 163, -420, 58, 869, 308, -494, 367, -33, 205, -823,
//   -869, 478, -238, -375, 352, 113, -741, -970, -990, 802, -173, -977, 464, -801,
//   -408, -77, 694, -58, -796, -599, -918, 643, -651, -555, 864, -274, 534, 211,
//   -910, 815, -102, 24, -461, -146,
// ];
// console.log(closest3sum(ar, -7111));



function closest3sum(nums, target) {
    nums.sort((a,b)=>a-b)
    const n = nums.length;
    let closest = nums[0] + nums [1] + nums[2]
    for(let i = 0; i<n-2; i++){
        if(i > 0 && nums[i]===nums[i-1]) continue
        let j = i+1;
        let k = n-1;
        while(j < k){
            const sum = nums[i] + nums[j] + nums[k]
            if(sum === target){
                return sum
            }

            if(Math.abs(sum-target) < Math.abs(closest-target) ){
                closest = sum
            }
            if(sum < target){
                j++
            }else{
                k--
            }
        }
    }
    return closest
}
console.log(closest3sum([-1, 2, 1, -4], 1))
console.log(closest3sum([0, 0, 0], 1));
console.log(closest3sum([1, 1, 1, 5, 5, 5, 5, 5, 5], 14));
const ar = [
  833, 736, 953, -584, -448, 207, 128, -445, 126, 248, 871, 860, 333, -899, 463,
  488, -50, -331, 903, 575, 265, 162, -733, 648, 678, 549, 579, -172, -897, 562,
  -503, -508, 858, 259, -347, -162, -505, -694, 300, -40, -147, 383, -221, -28,
  -699, 36, -229, 960, 317, -585, 879, 406, 2, 409, -393, -934, 67, 71, -312,
  787, 161, 514, 865, 60, 555, 843, -725, -966, -352, 862, 821, 803, -835, -635,
  476, -704, -78, 393, 212, 767, -833, 543, 923, -993, 274, -839, 389, 447, 741,
  999, -87, 599, -349, -515, -553, -14, -421, -294, -204, -713, 497, 168, 337,
  -345, -948, 145, 625, 901, 34, -306, -546, -536, 332, -467, -729, 229, -170,
  -915, 407, 450, 159, -385, 163, -420, 58, 869, 308, -494, 367, -33, 205, -823,
  -869, 478, -238, -375, 352, 113, -741, -970, -990, 802, -173, -977, 464, -801,
  -408, -77, 694, -58, -796, -599, -918, 643, -651, -555, 864, -274, 534, 211,
  -910, 815, -102, 24, -461, -146,
];
console.log(closest3sum(ar, -7111));
console.log(closest3sum([-1000,-5,-5,-5,-5,-5,-5,-1,-1,-1],-14));
