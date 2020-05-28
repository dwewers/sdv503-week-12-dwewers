# sdv503-week-12-dwewers 

---
# Mondays Class
## ////////////////////////// Hash Tables ////////////////////////////
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

![alt text][diagram1]

[diagram1]: https://yourbasic.org/algorithms/hash-table.png "diagram1"

hash-table.png. (n.d.). [Photograph]. Retrieved from https://yourbasic.org/algorithms/hash-table.png

This method only contains two steps to complete, converting a key to an interger and using the index to decide
the position within the linked list to determine where the key-value pairs will be located.
  
The hashing function is the key part in this process. The main purpose of a hash function is to return the same output for the given input
![alt text][diagram2]

[diagram2]: https://gblobscdn.gitbook.com/assets%2F-M0tzdQoYXoPhCiqfqxs%2F-M7Y_5joCQkAp5eT8QA3%2F-M7YbWY9D-3kXbAetNJ5%2FScreen%20Shot%202020-05-18%20at%205.10.45%20AM.png?alt=media&token=e44fee37-a2b9-41ae-8777-246028af8d87 "diagram2"

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
sum += str.charCodeAt(i) \* 3;
}
        return sum % n;
    }
}

## PSEUDO code:
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

Here is an example of the implementation of the hash algorithm:

//Here we create a new class that we have called myHash with two properties "bucket" and "size"
class myHash{
constructor(size=42){
this.bucket = new Array(size)
this.size = size
}
}
//From here we need to add the hash function

    hash(key){
       return key.toString().length % this.size;

}

/_
From here we need to create a new method that we will call list that will accept the previous stated
property "key" and a new property "value". From this it will now hash the property "key" by using the
created hash function. From here we will now push that key-value to the previously stated "bucket."
_/
set(key,value){

    let index = this.hash(key);

    if(!this.buckets[index]){
      this.buckets[index] = [ ];
    }

    this.buckets[index].push([key,value])

    return index

}

/_
From here we will now use the get method. The get method is a piece of code that is helpful in gerring specific
sets of data, based off their unique allocated key value. We will now create a new method that we will call "get."
This will accept the arguement that we created called "key." From here we will then hash that arguement so that we can
get the index of the specified bucket. If there is no bucket found in the index, we will return null
_/
get(key){

     // index of the bucket
    let index = this.hash(key);

     // if there is no bucket
     if(!this.buckets[index])return null

        for(let bucket of this.buckets[index]){
          // if key  matches
          if(bucket [0] === key){
            // value
            return bucket [1]
           }
        }

}
![alt text][diagram3]

[diagram3]: https://reactgo.com/static/da923364e6f09497c068bb9f8a591dbe/36727/seperate-chaining.png "diagram3"

Gowtham, S. (2019, December 31). How to implement hash table in javascript. Retrieved from https://reactgo.com/hashtable-javascript/

Applications of hash tables include:
Message Digest,
Password Verification,
Compiler Operation,
Linking a file name and path together


# Fridays class

