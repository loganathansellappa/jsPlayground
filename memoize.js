/*
  Simple JS memoization function
 
*/


const sum = (...args) => {
  return args.reduce((a,b) => a+b, 0)
}

function memoize(fn) {
  let cache = {}
  return function() {
    const key = [...arguments].join(':')
    if(cache[key] === undefined) { 
      console.log('CALL FUNCTION')
      cache[key] = fn.call(this,...arguments)      
    }
    return cache[key]
  }
}

const a = memoize(sum)
a(1,2)
a(1,2)
a(1,2)
a(1,2)
a(1,2)
a(1,2)
a(4,2,3,4)
a(4,2,3,4)
a(4,2,3,4)
