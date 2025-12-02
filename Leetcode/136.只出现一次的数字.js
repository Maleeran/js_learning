/*
 * @lc app=leetcode.cn id=136 lang=javascript
 * @lcpr version=30304
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const count = new Map();

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  for (const num of nums) {
    if (count.get(num) === 1) {
      return num;
    }
  }

  return -1;
};
// @lc code=end

/*
// @lcpr case=start
// [2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,1,2,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
