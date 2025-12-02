/*
 * @lc app=leetcode.cn id=217 lang=javascript
 * @lcpr version=30304
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let count = new Set();
  for (const num of nums) {
    if (count.has(num)) {
      return true;
    }
    count.add(num);
  }

  return false;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,3,3,4,3,2,4,2]\n
// @lcpr case=end

 */
