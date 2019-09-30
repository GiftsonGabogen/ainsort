# AINSORT #



## Start Sorting:
```javascript
let arr = [5,2,1,7,8,4]

ainsort.merge(arr)
```
output: [1,2,4,5,7,8]

---
## Parameters
There are three parameters you can add:
1. Array
2. Order
3. Objects Property(if the Passed Array has an Object Element)

>With The Order Param
```javascript
let arr = [5,2,1,7,8,4]

ainsort.merge(arr,[1,2])
```
output: [1,2,4,5,7,8]
* the second argument should pass only two kind of array
* first one is [1,2] second one is [2,1]
* if the [1,2] is passed it will be in ascending order and vice versa
* if none is passed the default ordering is ascending

>With the Object Property Param (if and only if the passed array is an object)
```javascript
let arr = [{num:2},{num:3},{num:1},{num:5},{num:4}]

ainsort.merge(arr,[1,2],"num")
```
output: [{num:1},{num:2},{num:3},{num:4},{num:5}]
* the third argument should be a string
* third argument is needed if the passed array is an object otherwise sorting won't work

