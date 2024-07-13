//factory function for iphone1
function iPhone1(ASIN,color,display,camera){
    let obj={};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;

   obj.dial=function()
   {
    return "tring.. tring...";
   };
   obj.sendMessage=function()
   {
    return "Sending message...";
   };
   obj.cameraClick=function()
   { return "Camera clicked";
   };
   return obj;
}
let display=iPhone1("xyz","gold","abc","124mp");
console.log(display.dial());
console.log(display.sendMessage());
console.log(display.cameraClick());

//factory function for iphone2
function iPhone2(ASIN,color,display,camera){
    let obj={};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;

   obj.dial=function()
   {
    return "tring.. tring...";
   };
   obj.sendMessage=function()
   {
    return "Sending message...";
   };
   obj.cameraClick=function()
   { return "Camera clicked";
   };
   return obj;
}
let display1=iPhone2("xyz","gold","abc","124mp");
console.log(display1.dial());
console.log(display1.sendMessage());
console.log(display1.cameraClick());