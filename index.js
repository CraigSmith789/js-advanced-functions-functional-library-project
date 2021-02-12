const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, alert) {
      let newArray = []
      if (array  instanceof Array)
       newArray = array.slice()
      else
       newArray = Object.values(array)
      for(let i = 0; i < newArray.length; i++)
        alert(newArray[i]);
      return array

    },

    map: function(array, alert) {

      return array
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
