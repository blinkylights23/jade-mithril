function () {
  return m("select",{
      "value": "B"
    },
    m("option",{
        "value": "A"
      },
      "Apple"
    ),
    m("option",{
        "value": "B"
      },
      "Banana"
    ),
    m("option",{
        "value": "C"
      },
      "Cranberry"
    )
  );
}
