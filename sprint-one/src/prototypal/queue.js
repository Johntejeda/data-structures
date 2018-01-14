var Queue = function() {
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
 var obj = Object.create(queueMethods);
 return obj;
};

var queueMethods = {
 length: 0,
 enqueue: function(value){
   this[this.length] = value;
   this.length++
 },
 size: function(){
   return this.length;
 },
 dequeue: function(){
   if (this.length > 0){
     let currentVal = this[0];
     this.length--;
     for (let i = 1; i <= this.length;i++){
       this[i-1] = this[i];
     }
     delete this[this.length];
     return currentVal;
   }
 }
};
