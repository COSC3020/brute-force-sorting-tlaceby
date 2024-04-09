/**
 * @param {number[]} a 
 * @returns {boolean}
 */
function check(a){
    let sorted = true;

    for(let i = 0; i < a.length; i++){
        if(a[i + 1] < a[i]){
            sorted = false;
            break;
        }
    }
    
    return sorted;
}

/**
 * @param {number[]} a 
 * @returns {number} count
 */
function permutationSort(a) {
    let count = 0;
    let sorted = false;

    function getPermutations(a, i) {
        if (i === a.length - 1) {
            count++;

            sorted = check(a);
            if(sorted) return count;   
        }

        for(let j = i; j < a.length; j++){
            // gen new permutation
            [a[i], a[j]] = [a[j], a[i]];
            getPermutations(a, i + 1);

            if(sorted) return count;

            // swap back to default state
            [a[j], a[i]] = [a[i], a[j]];
        }
    }

    getPermutations(a, 0);
    return count;
}