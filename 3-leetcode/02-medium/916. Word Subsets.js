const wordSubsets = (words1, words2) => {
    let answer = [];
    let w2Freq = Array(26).fill(0);
    
    for (let word of words2) {
        let currFreq = getFreq(word);
        for(let i = 0, len = w2Freq.length; i < len; i++) {
            w2Freq[i] = Math.max(w2Freq[i], currFreq[i]);
        }
    }
    
    for (let word of words1) {
        let wFreq = getFreq(word);
        if(isSubset(wFreq)) answer.push(word);
    }
    
    function isSubset(wFreq) {
        for (let i = 0, len = wFreq.length; i < len; i++) {
            if (w2Freq[i] > wFreq[i]) return false;
        }
        return true;
    }
    
    function getFreq(word) {
        let check = Array(26).fill(0);
        for (let char of word) {
            let index = char.charCodeAt() - 97;
            check[index]++;
        }
        return check;
    }
    return answer;
};
