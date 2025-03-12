/**
 *  Below code implements a recursive quick sort.
 */
function quickSort(array: number[], start: number = 0, end: number = array.length - 1): number[] {

    // --> Base Case: If the end index is less than or equal to the start index, the array is already sorted
    if(end <= start)
        return array;

    //-->Partition: find the pivot and rearrange the array elements around the pivot
    let pivot: number = partition(array, start, end);

    //-->Recursive: Apply quickSort to both halves
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);

    return array;
}

function partition(array: number[], start: number, end: number) {

    //-->Set pivot: The last element is selected as the pivot
    let pivot: number = array[end];
    let i: number = start - 1;

    //-->Loop: through the array and rearrange elements less than the pivot to the left
    for(let j = start; j < end; j++) {
        if(array[j] < pivot) {
            i++;

            //-->Swap: Elements smaller than pivot move to the left side
            let temp: number = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    //-->Final Swap: Place the pivot element in the correct sorted position
    i++;
    let temp: number = array[i];
    array[i] = array[end];
    array[end] = temp;

    return i
}

console.log(quickSort([5, 3, 8, 4, 2]));