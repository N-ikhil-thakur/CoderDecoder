(() => {
  var codeBtn = document.querySelector(".code");
  var decodeBtn = document.querySelector(".decode");
  //array with all the alphabets
  var alpha = [
    "b",
    "a",
    "d",
    "c",
    "r",
    "g",
    "h",
    "f",
    "i",
    "j",
    "k",
    "x",
    "m",
    "o",
    "n",
    "u",
    "q",
    "e",
    "s",
    "y",
    "p",
    "v",
    "w",
    "l",
    "t",
    "z",
    "1",
    "!",
    "2",
    "@",
    "3",
    "#",
    "4",
    "$",
    "5",
    "%",
    "6",
    "^",
    "7",
    "&",
    "8",
    "*",
    "9",
    "(",
    "0",
    ")",
    " "
  ];
  // alpha = alpha.concat(alpha);
  var myTxt = [];
  function code(a) {
    // variable to determine whether to code or decode
    var toDo = a;
    // console.log(alpha.length);
    //getting the input text
    var inStr = document.querySelector(".input-text").value.toLowerCase();
    //getting the output tex filed
    var outStr = document.querySelector(".output-text");
    // converting the input text into array
    myTxt = inStr.split("");
    //doing the required  replacements
    if (toDo == "code") {
      myTxt.forEach((item1, a) => {
        alpha.forEach((item2, b) => {
          if (item1 == item2) {
            if (b + 21 > alpha.length - 1) {
              myTxt[a] = alpha[b + 21 - alpha.length];
            } else {
              myTxt[a] = alpha[b + 21];
              // console.log(myTxt);
            }
          }
        });
      });
    } else if (toDo == "decode") {
      myTxt.forEach((item1, a) => {
        alpha.forEach((item2, b) => {
          if (item1 == item2) {
            if (b - 21 < 0) {
              myTxt[a] = alpha[alpha.length + b - 21];
            } else {
              myTxt[a] = alpha[b - 21];
              // console.log(myTxt);
            }
          }
        });
      });
    }
    // console.log(myTxt);
    //passing the coded value to the output text field
    outStr.value = myTxt.join("");
    // outStr;
  }

  // event listeners
  window.addEventListener("click", function(e) {
    if (e.target == codeBtn) {
      code("code");
    }
    if (e.target == decodeBtn) {
      code("decode");
    }
  });

  window.addEventListener("keydown", function(e) {});
})();

// var arr = ["a", "b", "c"];
// console.log(arr.length);
