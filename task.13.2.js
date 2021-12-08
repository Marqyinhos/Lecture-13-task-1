let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let word = new Map();
    
    for (let str of arr) {
      let sorted = str.toLowerCase().split("").sort().join("");
      word.set(sorted, str);
    }
    return Array.from(word.values());
  }
  alert("Анаграми: " + aclean(arr));

  