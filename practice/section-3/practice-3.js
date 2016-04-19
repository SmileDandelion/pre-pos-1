function create_updated_collection(collection_a, object_b) {

  var newArray = countElement(collection_a);

  var resultArray = compare(newArray,object_b);

  return resultArray;

}
function countElement(collection_a){

  var newArray = [];
  var ncount = 1;

  for(var i = 0; i < collection_a.length; i++){

    if(collection_a[i] === collection_a[i+1]){

      ncount++;

    }else {

      newArray.push({key:collection_a[i], count: ncount});
      ncount = 1;

    }

  }

  return newArray;

}
function compare(newArray,object_b){

  var result = [];

  newArray.forEach(function(element){

    if(IsExit(element.key,object_b.value)){

      var cut = parseInt(element.count/3);
      result.push({key:element.key, count:element.count-cut});

    }
    else{

      result.push({key:element.key, count:element.count});

    }
  });

  return result;

}
function IsExit(key,object_b){

  for(var i = 0; i<object_b.length; i++){

    if(key === object_b[i]){
      return true;
    }

  }

  return false;

}
