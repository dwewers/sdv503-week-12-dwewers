# sdv503-week-12-dwewers
_____________________________________________________________________
//////////////////////////  Hash Tables  ////////////////////////////
Hash tables are a form of data structure that we can us to store data in an associative manner.
A hash table consists of an array of stored data. Within this array, there is a unique index value
for each and every data value. These designated values for each piece of data allows us to easily access 
each part of data, since we know their index values. This data structure uses a technique for which it takes
the array as a storage medium and uses the hash teqnique. This technique allows it to generate the assigned 
index. This index can then be used to store or locate the specified element.

A bennifit to using a hash table is that they are a very useful and efficient mean for lookup, insert and delete
operations. 


Hash Tables is similar to the linked list in the sense that it maps keys to values. A common use for this method is 
hashing with chaining. This method uses chaining with linked lists to resolve collisions. 

This method can look like this:

![alt text][logo]

[logo]: https://yourbasic.org/algorithms/hash-table.png "Logo Title Text 2"
hash-table.png. (n.d.). [Photograph]. Retrieved from https://yourbasic.org/algorithms/hash-table.png

This method only contains two steps to complete, converting a key to an interger and using the index to decide 
the position within the linked list to determine where the key-value pairs will be located.
      
The hashing function is the key part in this process. The main purpose of a hash function is to return the same output for the given input

Here is an example of a format for a hash table code:

class HashTable {
  constructor(size) {
    function
    this.size = size;//we define the size of our hash table
    this.storage = [];//Creates an empty array called storage
  }
  insert(key, value) { }
  get() {}
  remove() {}
 
  myHashingFunction(str, n) {//This is the function that we will use to hash our keys
    let sum = 0; //Sets the default value of sum as 0
    for (let i = 0; i < str.length; i++) { //Increments i by one for the length of the string
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }
}

PSEUDO code:
create a class for hashtable
end
insert values
end
Create a function for hash
set the default value of sum to be 0
increment the value of i by one until the length of the string is met
Add the value of i multiplied by three to sum(0)
end
return the value of sum division remainder of n
end



Applications of hash tables include:
Message Digest
Password Verification
Compiler Operation
Linking a file name and path together

references:

