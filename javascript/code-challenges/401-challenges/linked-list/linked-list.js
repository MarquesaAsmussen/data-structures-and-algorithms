"use strict";

// "Node"
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// "Linked List"
// -Create a Linked List class
// -Within your Linked List class, include a head property.
//    -Upon instantiation, an empty Linked List should be created.

class LinkedList {
  constructor(head) {
    this.head = null;
  }

  transversIterative() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // -The class should contain the following methods
  //    -insert
  //        -Arguments: value
  //        -Returns: nothing
  //        -Adds a new node with that value to the head of the list with an O(1) Time performance.

  insert(value) {}

  //    -includes
  //        -Arguments: value
  //        -Returns: Boolean
  //            -Indicates whether that value exists as a Node’s value somewhere within the list.

  includes(value) {}

  //    -to string
  //        -Arguments: none
  //        -Returns: a string representing all the values in the Linked List, formatted as:
  //          -`"{ a } -> { b } -> { c } -> NULL"`

  toString() {}
}

const list = new LinkedList();

list.head = new Node();
list.head.next = new Node();
list.head.next.next = new Node();
list.head.next.next.next = new Node();

// -Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
// -Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

// Structure and Testing
// Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

// Write tests to prove the following functionality:

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list
// Ensure your tests are passing before you submit your solution.