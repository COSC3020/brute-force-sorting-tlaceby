/**
 * @param {number[]} arr
 * @returns {boolean}
 */
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function permutationSort(arr) {
    let count = 0;

    function generatePermutations(arr, startIndex) {
        if (startIndex === arr.length - 1) {
            count++;
            if (isSorted(arr)) return count;
        }

        for (let i = startIndex; i < arr.length; i++) {
            [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]]; // Swap elements
            generatePermutations(arr, startIndex + 1);
            [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]]; // Restore order.
        }
    }

    generatePermutations(arr, 0);
    return count;
}
