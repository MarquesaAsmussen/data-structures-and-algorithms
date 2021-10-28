# Zip Two Linked Lists

Write a function called zip lists

- Arguments: 2 linked lists
- Return: Linked List, zipped as noted below
- Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.
- Try and keep additional space down to O(1)
- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process

<!-- ![Linked List Zip Visual](./linked-list-zip.png) -->

## Approach & Efficiency

<!-- See below. Wasn't sure whether to follow the short README.md template in the assignment page, or the more extensive one in the guidelines. -->

## Inputs / Outputs

zipLists(list1, list2)

| Arg list1                      | Arg list2                      | Output                                              |
| ------------------------------ | ------------------------------ | --------------------------------------------------- |
| head -> [1] -> [3] -> [2] -> X | head -> [5] -> [9] -> [4] -> X | head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X |
| head -> [1] -> [3] -> X        | head -> [5] -> [9] -> [4] -> X | head -> [1] -> [5] -> [3] -> [9] -> [4] -> X        |
| head -> [1] -> [3] -> [2] -> X | head -> [5] -> [9] -> X        | head -> [1] -> [5] -> [3] -> [9] -> [2] -> X        |

## Algorithm

<!-- If we can find the length of the array, we can determine what the middle index value should be and push the new value into the array at that index.

- create a new empty array
- determine the middle of the array
- Use a for loop to look at all the elements in the array.(iterating through the array).
- Use an if statement to determine if [i] is at the middle index value
- if at middle value, push the new value to the new array
- if not at middle value, push the current value being iterated over -->

## Pseudocode

<!-- ```plaintext

function arrayInsert takes in `arr`:

  declare insertedArr = [];
  declare start <- 0;
  declare end <- length of arr minus 1;

  while start <= end:
    declare valueForInsert
    declare middleIndex value
    arr[current] != middleIndex ? insertedArr push valueForInsert : insertedArr push arr[current]

``` -->

## Actual Code

<!-- Not sure, but was under the impression that this was not required? -->

## Visual

<!-- ![Linked List Zip Visual](./linked-list-zip.png) -->
