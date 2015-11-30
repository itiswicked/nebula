exports = (typeof window === 'undefined') ? global : window;

/*
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(memo, element){
      return memo + element;
    })
  },

  remove : function(arr, item) {
    return arr.filter(function(element){
      return element !== item;
    })
  },

  reverseString : function(str) {
    var array = str.split('');
    var newArray = [];
    for(i = array.length - 1; i >= 0; i--){
      newArray.push(array[i])
    }
    return newArray.join('');
  },

  longestSubString : function(str) {
    return _.max(str.split(' '), function(subStr) { return subStr.length; });
  },

  letterMoveForward : function(str) {
    return str.split('').map(function(letter) {
      if(letter === 'z'|| letter === 'Z') {
        return String.fromCharCode(letter.charCodeAt(0) - 25);
      }else if(letter.match(/[a-yA-Y]/) != null) {
        return String.fromCharCode(letter.charCodeAt(0) + 1);
      }else {
        return letter;
      }
    }).join('');
  },

  capitalizeWords : function(str) {
    return str
      .split(' ')
      .map(function(string){ return string[0].toUpperCase() + string.slice(1) })
      .join(' ');
  }
};
