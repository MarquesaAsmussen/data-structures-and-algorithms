# Insert to Middle of an Array

Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process

![Array Insert Visual](./code-challenge-2.png)

## Approach & Efficiency

See below. Wasn't sure whether to follow the short README.md template in the assignment page, or the more extensive one in the guidelines.

## Inputs / Outputs

Input: `[1, 2, 4, 5], 3`\
Output: `[1, 2, 3, 4, 5]`

## Algorithm

If we can find the length of the array, we can determine what the middle index value should be and push the new value into the array at that index.

- create a new empty array
- determine the middle of the array
- Use a for loop to look at all the elements in the array.(iterating through the array).
- Use an if statement to determine if [i] is at the middle index value
- if at middle value, push the new value to the new array
- if not at middle value, push the current value being iterated over

## Pseudocode

```plaintext

function arrayInsert takes in `arr`:

  declare insertedArr = [];
  declare start <- 0;
  declare end <- length of arr minus 1;

  while start <= end:
    declare valueForInsert
    declare middleIndex value
    arr[current] != middleIndex ? insertedArr push valueForInsert : insertedArr push arr[current]

```

## Actual Code

Not sure, but was under the imporession that this was not required?

## Visual

![Array insert](array-insert-shift.png
