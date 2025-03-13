/**
 * Solves the Tower of Hanoi problem using recursion.
 *
 * @example
 *  towerOfHanoi(3, 'A', 'C', 'B');
 */
function towerOfHanoi(n: number, from: string, to: string, helper_rod: string): void {
    // -->Check: If there is only one disk, move it directly to the target.
    if(n === 1){
        console.log(`Move disk 1 from ${from} to ${to}`);
        return;
    }

    // -->Move: n - 1 disks from source to helper peg.
    towerOfHanoi(n - 1, from, helper_rod, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);

    // -->Move: n - 1 disks from helper to destination.
    towerOfHanoi(n - 1, helper_rod, to, from);
}

towerOfHanoi(3, 'A', 'C', 'B');