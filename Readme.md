# jade-mithril

Compile Jade templates to Mithril templates.

```jade
.container-fluid.readme
  .row
    h1= this.storeName
    ul
    each product in this.products
      li
        | Product
        = product.title
```

into

```javascript
function () {
  function map (obj, fn) {
    if ('number' === typeof obj.length) return obj.map(fn);
    var result = [], key, hasProp = {}.hasOwnProperty;
    for (key in obj) hasProp.call(obj, key) && result.push(fn(key, obj[key]));
    return result;
  }

  return m("div", {
    "className": "container-fluid readme"
  },
    m("div", {
      "className": "row"
    },
      m("h1", null,
        this.storeName
      ),
      m("ul", null),
        map(this.products, function (product, $index) {
          return m("li", null,
            "Product",
            product.title
          );
        }
      )
    )
  );
}
```
