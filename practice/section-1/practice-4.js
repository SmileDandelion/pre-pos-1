function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var newArray = [];
  collection_a.forEach(function (element) {
    if (isExist(element.key, object_b)) {
      newArray.push(element.key);
    }
  });
  return newArray;
}
function isExist(collection, object_b) {
  for (var i = 0; i < object_b.value.length; i++) {
    if (collection === object_b.value[i]) {
      return true;
    }
  }
  return false;
}
