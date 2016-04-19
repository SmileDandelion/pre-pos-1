function create_updated_collection(collection_a, object_b) {

  var newArray = countElement(collection_a);

  var result = compare(newArray,object_b);

  return result;

}
function countElement(collection_a) {

  var newArray = [];
  var count = 1;

  for(var i=0; i<collection_a.length; i++){

    if(collection_a[i] === collection_a[i+1]){

      count++;

    }
    else if(collection_a[i].length > 1){

      newArray.push({key:collection_a[i].charAt(0), count:parseInt(collection_a[i].slice(2))});
      count = 1;

    }
    else{

      newArray.push({key:collection_a[i], count:count});
      count = 1;

    }
  }

  return newArray;

}
function compare(newArray,object_b) {

  var result = [];

  newArray.forEach(function (element) {

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
function IsExit(key,object_b) {

  for(var i=0; i<object_b.length; i++){

    if(key === object_b[i]){

      return true;

    }
  }

  return false;

}
