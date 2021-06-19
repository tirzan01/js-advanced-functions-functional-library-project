const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      if(Array.isArray(collection)){
        for (const element of collection) {
          fn(element)
        }
      }else{
        let vals = Object.values(collection)
        for(const val of vals){
          fn(val)
        }
      }
      return collection
    },

    map: function(collection, fn) {
      
      if(Array.isArray(collection)){
        const newArray = []
        for(const element of collection){
          newArray.push(fn(element))
        }
        return newArray
      }else{
        const objVals = Object.values(collection)
        let newObjVals = []
        for (const val of objVals) {
          newObjVals.push(fn(val))
        }
        return newObjVals

      }
    },

    reduce: function(collection, fn, acc) {
      if(!acc){
        let value = collection[0]
        for (let i = 1; i < collection.length; i++) {
          value = fn(value, collection[i], collection)         
        }
        
        return value
      }else{
      let value = acc
      for (const number of collection) {
        value = fn(value, number, collection)
      }
      
      return value}
    },

    find: function(collection, predicate){
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
        }
      }
    },

    size: function(collection){
      let collectionKeys = Object.keys(collection)
      return collectionKeys.length
    },

    filter: function(collection, predicate){
      const newArray = []
      for (const item of collection) {
        if(predicate(item)){
          newArray.push(item)
        }
      }
      return newArray
    },

    first: function(array, n){
      if(n){
        return array.slice(0, n)
      }else{
        return array[0]
      }
    },

    last: function(array, n){
      if(n){
        return array.slice(-n)       
      }else{
        return array.slice(-1)[0]
      }
    },

    compact: function(array){
      const truthyArray = []
      for (const item of array) {
        if(item){
          truthyArray.push(item)
        }
      }
      return truthyArray
    },
    sortBy: function(initialArray, fn){
      let arrayToSort = Object.assign([], initialArray)
      return arrayToSort.sort((a, b)=>fn(a) - fn(b))
    },

    flatten: function(initialArray, isTrue){
      if(isTrue === true){
        const oneLayerDown = []
        for (const item of initialArray) {
          if(Array.isArray(item)){
            for (const elem of item) {
              oneLayerDown.push(elem)
            }
          }else{
            oneLayerDown.push(item)
          }
        }
        return oneLayerDown
      }else{
        const flattedArray = []
        function flatternArray(array){
          for (const item of array) {
            if(Array.isArray(item)){
              flatternArray(item)
            }else{
              flattedArray.push(item)
            }
          }
        }
        flatternArray(initialArray)
        return flattedArray       
      }    
    },

    uniq: function(array, isSorted, fn){
      const duplicateFreeArray = []
      if(!!isSorted || isSorted === undefined){
        for (const item of array) {
          if(!duplicateFreeArray.includes(item)){
            duplicateFreeArray.push(item)
          }
        }
            return duplicateFreeArray
      }else{
        let duplicateFnResult = []
        for (const item of array) {
          if(!duplicateFnResult.includes(fn(item))){
            duplicateFnResult.push(fn(item))
            duplicateFreeArray.push(item)
           
          }
        }
        console.log(duplicateFreeArray)
        return duplicateFreeArray
      }
    },

    keys: function (obj){
      return Object.keys(obj)
    },

    values: function (obj){
      return Object.values(obj)
    },

    functions: function(obj) {
      let objKeys = Object.keys(obj)
      return objKeys.filter(key => typeof obj[key] === 'function').sort()
    }, 


  }
})()

fi.libraryMethod()
// // if(isSorted){
//   const duplicateFreeArray = []
//   for (let i = array.length; i > 0; i--) {
//     if(fn(array[i]) !== fn(array[i-1])){
//       duplicateFreeArray.push(array[i])
//     }         
//   }
//   console.log(duplicateFreeArray)
//   return duplicateFreeArray
// // }

console.log(fi.uniq(['a', 'a', 'b', 'c', 'e', 'e', 'e', 'e'], true))