function create_updated_collection(collection_a, object_b) {
  var newArray=[];
  collection_a.forEach(function(element){
    if(IsExit(element.key,object_b.value)){
      newArray.push({key:element.key, count:element.count-1});
    }else {
      newArray.push({key:element.key, count:element.count});
    }
  });
  return newArray;
}
function IsExit(key,object_b){
  for(var i=0;i<object_b.length;i++){
    if(key == object_b[i]){
      return true;
    }
  }
  return false;
}
