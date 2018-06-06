module.exports = function(text,title,mimetype,success,error){
  if(typeof text == 'object'){
   var data = text;
   text = data.text;
   title = data.title;
   mimetype = data.mimetype;
   if(data.url)
     text += "\n" + data.url;
  }
  if(typeof text !== "string") {
    text = "";
  }
  if(typeof title !== "string") {
    title = "Share";
  }
  if(typeof mimetype !== "string") {
    mimetype = "text/plain";
  }
  cordova.exec(success,error,"Share","share",[text,title,mimetype]);
  return true;
};
