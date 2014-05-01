function () {
  function map (obj, fn) {
    if ('number' === typeof obj.length) return obj.map(fn);
    var result = [], key, hasProp = {}.hasOwnProperty;
    for (key in obj) hasProp.call(obj, key) && result.push(fn(key, obj[key]));
    return result;
  }

  return m("ul",null,
      map(this.products, function (product, $index) {
        return m("li",null,
          product.name
        );
      }
    )
  );
}
