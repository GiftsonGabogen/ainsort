# AINSORT #


```
npm install ainsort
```

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
* the second argument should pass only on this two option of array: [1,2] or [2,1]
* if the [1,2] is passed it will be in ascending order and vice versa
* if none is passed the default ordering is ascending

>With the Object Property Param (if and only if the passed array's element is an object)
```javascript
let arr = [{num:2},{num:3},{num:1},{num:5},{num:4}]

ainsort.merge(arr,[1,2],"num")


//output: [{num:1},{num:2},{num:3},{num:4},{num:5}]
```
* the third argument should be a string
* third argument is needed if the passed array's element is an object otherwise sorting won't work
## more Example
```javascript
let arr = [
  {student:{details:{age:23}},
  {student:{details:{age:21}},
  {student:{details:{age:27}},
  {student:{details:{age:30}}
  ]

ainsort.merge(arr,[2,1],"student.details.age")

/* output : [
  {student:{details:{age:30}},
  {student:{details:{age:27}},
  {student:{details:{age:23}},
  {student:{details:{age:21}}
  ] */
```

also works with array element
```javascript
let arr = [
  {student:[{details:{age:23},{name:"ain"}]},
  {student:[{details:{age:21},{name:"grey"}]},
  {student:[{details:{age:27},{name:"ebben"}]},
  {student:[{details:{age:30},{name:"lolalolita"}]}
  ]

ainsort.merge(arr,[2,1],"student[0].details.age")

/* output : [
  {student:[{details:{age:30},{name:"ain"}]},
  {student:[{details:{age:27},{name:"grey"}]},
  {student:[{details:{age:23},{name:"ebben"}]},
  {student:[{details:{age:21},{name:"lolalolita"}]}
  ] */
```



---
## Available Sorting Algorithms
* bubblesort (ainsort.bubble)
* insertionsort (ainsort.insertion)
* mergesort (ainsort.merge)
* quicksort (ainsort.quick)
* radixsort (ainsort.radix)
* selectionsort (ainsort.selection)
---

>[Github](https://github.com/GiftsonGabogen/ainsort) | - - |
>[npm](https://www.npmjs.com/package/ainsort)