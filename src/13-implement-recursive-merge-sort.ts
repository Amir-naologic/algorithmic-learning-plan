/**
 *  Below code implements a recursive merge sort.
 *
 *  @example:
 *      mergeSort([4, 2, 77, 1, 9, 12, 33])
 */
function mergeSort(arr: number[]): number[] {
    // -->Check: exit condition (array already sorted)
    if(arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);

    //-->Divide: the array into two halves at the middle index
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    //-->Recursive: call mergeSort on both halves and merge the sorted results
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));

}

/**
 *  Merge function for combining two sorted arrays into one sorted array.
 *
 *  @example:
 *      merge([2, 4], [1, 3, 5]) => [1, 2, 3, 4, 5]
 */
function merge(left: number[], right: number[]): number[] {
    let results: number[] = [];

    // --> Initialize: pointer for the left and right array
    let i = 0;
    let j = 0;

    //-->Compare: elements from both arrays and push the smaller element to results
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            results.push(left[i]);
            i++
        }else{
            results.push(right[j]);
            j++
        }
    }

    // -->Concatenate: any remaining elements from the left or right array to results
    return results.concat(left.slice(i), right.slice(j));
}



console.log(mergeSort([4, 2, 77, 1, 9, 12, 33]))
console.log(mergeSort([4, 1, 7, 1, 12, 1222, 33]))