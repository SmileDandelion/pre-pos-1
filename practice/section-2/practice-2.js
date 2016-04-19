function count_same_elements(collection) {

  var newArray = [];

  var countNumber = 1;

  for(var a = 0 ;a < collection.length;a++){

    if(collection[a] === collection[a+1]){

      countNumber++;

    }
    else if(collection[a].length > 1){

      newArray.push({key:collection[a].charAt(0), count:parseInt( collection[a].slice(2))});

      countNumber=1;

    }
    else{

      newArray.push({key:collection[a], count:countNumber});

      countNumber=1;

    }

  }
  return newArray;
}
