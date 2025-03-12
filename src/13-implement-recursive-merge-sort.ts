/**
 *  Below code implements a recursive merge sort.
 */
function mergeSort(arr: number[]): number[] {

    //-->Base Case: If the array length is 1 or less, it's already sorted
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

function merge(left: number[], right: number[]): number[] {

    let results: number[] = [];
    let i = 0; // --> Initialize: pointer for the left array
    let j = 0; // --> Initialize: pointer for the right array

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

    // --> Concatenate any remaining elements from the left or right array to results
    return results.concat(left.slice(i), right.slice(j));
}



console.log(mergeSort([4, 2, 77, 1, 9, 12, 33]))