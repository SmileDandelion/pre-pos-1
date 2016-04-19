
function getSubelementCount(collection){

  var element = [];

  for(var i = 0;i < collection.length;i++){

    if(collection[i].length == 1){

      element.push({key:collection[i],count:1});

    }
    else{

      element.push({key:collection[i].substr(0,1),count:parseInt(collection[i].substr(2,2))});

    }

  }

  element.push({key:0,count:0});
  return element;

}
function count_same_elements(collection) {

  var Collection=getSubelementCount(collection);

  var newArray = [];

  var countNumber = Collection[0].count;

  for(var a = 0 ;a < Collection.length-1;a++){

    if(Collection[a].key === Collection[a+1].key){

      countNumber+=Collection[a+1].count;

    }
    else{

      newArray.push({name:Collection[a].key, summary:countNumber});

      countNumber = Collection[a+1].count;

    }

  }
  return newArray;
}
