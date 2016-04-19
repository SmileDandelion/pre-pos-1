function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var newArray = [];
  collection_a.forEach(function (element) {
    if (isExist(element, collection_b[0])) {
      newArray.push(element);
    }
  });
  return newArray;
}
function isExist(collection, collection_b) {
  for (var i = 0; i < collection_b.length; i++) {
    if (collection === collection_b[i]) {
      return true;
    }
  }
  return false;
}

