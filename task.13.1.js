let names = ["Марк", "Міша", "Маша", "Марк", "Василь", "Саша", "Оксана", "Саша", "Леонід" ];
function unique(arr) {
    let name2 = [];
    for (let str of arr) {
      if (!name2.includes(str)) {
        name2.push(str);
      }
    }
    return name2;
  }
  alert("Імена: " + unique(names) );