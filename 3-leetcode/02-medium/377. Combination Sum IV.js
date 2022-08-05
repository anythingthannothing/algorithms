const combinationSum4 = (nums, target) => {
    let len = nums.length;
    let memo = new Map();
    
    return topDown(target);
    
    function topDown(target) {
        // base cases
        if (target == 0) return 1;
        if (target < 0) return 0;
        if (memo.has(target)) return memo.get(target);
         
        let count = 0;
        
        for (let i = 0; i < len; i++) {
            let num = nums[i];
            if (num <= target) {
                let amountLeft = target - num;
                count += topDown(amountLeft);
            }
        }
        
        memo.set(target, count);
        return count;
    }
};