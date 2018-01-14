var Stack = function() {
 var obj = {
 }
 defaults(obj, stackMethods)
 return obj;
};
var defaults = function(destination, source){
 for(var key in source){
   if(destination[key] === undefined){
       destination[key] = source[key]
   }
 };

};
var stackMethods = {
 length: 0,
 size: function(){
   return this.length;
},  push: function(value){
  this[this.length] = value;
  this.length++;
},  pop: function(){
   if(this.length > 0){
     this.length--
} return this[this.length];
 }
};
