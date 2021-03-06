
// Rotate an array arr in place arr to the right by k steps.

// For example, with n = [1,2,3,4,5,6,7] and k = 3, the array is rotated to [5,6,7,1,2,3,4].

function rotate(arr, k) {
  while (k > 0) {
    let a = arr.pop()
    arr.unshift(a);
    k--;
  }

  return arr;
}
