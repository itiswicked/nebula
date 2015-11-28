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
    return str.split('').reverse().join('');
  },

  longestSubString : function(str) {
    return _.max(str.split(' '), function(subStr) { return subStr.length; });
  },

  letterMoveForward : function(str) {
    return str.split('').map(function(element){
      if(element.match(/\D/) != null){
        if(element === 'z'){
          new_unicode = element.charCodeAt(0) - 25;
        }else {
          new_unicode = element.charCodeAt(0) + 1;
        }
        return String.fromCharCode(new_unicode);
      }else {
        return element;
      }
      }).join('');
  },

  capitalizeWords : function(str) {
    return str
      .split(' ')
      .map(function(string){ return string[0].toUpperCase() + string.slice(1)})
      .join(' ');
  }
};
