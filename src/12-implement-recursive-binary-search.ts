/**
 *  Below code implements a recursive binary search.
 */
function binarySearchRecursive(arr: number[], target: number, low: number = 0, high: number = arr.length - 1): boolean {

    // -->Best Case: If the low index is more than the high index, the target is not found return false
    if (low > high) {
        return false;
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return true;
    }

    // -->Search: If the target is smaller than the middle element, search the left half
    if (arr[mid] > target) {
        // -->Recurse: Call the function on the left half (low to mid-1)
        return binarySearchRecursive(arr, target, low, mid - 1);
    }
    // -->If: the target is bigger than the middle element, search the right half
    return binarySearchRecursive(arr, target, mid + 1, high);
}

console.log(binarySearchRecursive([10, 22, 30, 40, 50], 40));
console.log(binarySearchRecursive([1, 2, 3, 4, 5], 6));



// function binarySearchRecursive(arr: number[], target: number, low: number = 0, high: number = arr.length - 1): number {
//
//     if(low > high){
//         return -1;
//     }
//
//     const mid = Math.floor((low + high) / 2);
//     if(arr[mid] === target) {
//         return mid;
//     }
//
//     if(arr[mid] > target) {
//         return binarySearchRecursive(arr, target, low, mid - 1);
//     }
//
//     if(arr[mid] < target) {
//         return binarySearchRecursive(arr, target, mid + 1, high);
//     }
//
//     return -1;
// }
//
// console.log(binarySearchRecursive([1, 2, 3, 4 ,5], 31));
