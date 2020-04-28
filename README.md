# Slept Sort
Asynchronously sleep sort.

## What is...
An implementation of [sleep sort](https://www.cs.princeton.edu/courses/archive/fall13/cos226/lectures/52Tries.pdf) in JavaScript asynchronously.

Basically, it will sort array of number by `n ms` where n is value of member of the array.

Time Complexity of sleep sort is unpredictable but I like to call it `O(wtf(N))`. 
It's neither fast nor slow without an absolute input, just pure chaos like Schordinger's cat.

## Why use Slept Sort
Slept Sort is:
* Pure function
* TypeScript support
* Multiple module to choose from
* Lightweight

## Example Usage
It's basically:
```javascript
import sleptSort from 'slept-sort'

let someAsyncFunction = async() => {
    await sleptSort([3,1,2]) // [1,2,3]
}
```

For some reason, you might interested in pre-built module:
```javascript
import sleptSort from 'slept-sort/dist'

let someAsyncFunction = async() => {
    await sleptSort([3,1,2]) // [1,2,3]
}
```

Or use other module resolution:
```javascript
const sleptSort = require('slept-sort/dist/cjs')

let someAsyncFunction = async() => {
    await sleptSort([3,1,2]) // [1,2,3]
}
```

The reason why you might interested in Slept Sort is because it
![Contains cat GIF](https://camo.githubusercontent.com/276f412823469d4fbbdad5bf42c43d1747dbf327/68747470733a2f2f666f7274686562616467652e636f6d2f696d616765732f66656174757265642f66656174757265642d636f6e7461696e732d6361742d676966732e737667)

![Vanilla GIF](https://steamuserimages-a.akamaihd.net/ugc/105106517891993907/A52B4F0853EDACCE1BFE6F71B6E60598523E1585/)