function count_same_elements(collection) {

  var newArray = [];

  var countNumber = 1;

  for(var a = 0 ;a < collection.length;a++){

    if(collection[a] === collection[a+1]){

      countNumber++;

    }else{

      newArray.push({key:collection[i],count:countNumber});

      countNumber=1;

    }

  }
  return newArray;
}
