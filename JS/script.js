(() => {
  var codeBtn = document.querySelector(".code");
  var decodeBtn = document.querySelector(".decode");
  var typeChangeBtn = document.querySelector(".type-change");
  var type = "normal";
  var passwordBox = document.querySelector(".password");
  var normalBox = document.querySelector(".normal");
  //array with all the alphabets
  var alpha = [
    "b",
    "a",
    "d",
    "<",
    "c",
    "r",
    "g",
    "h",
    ">",
    "f",
    "i",
    "j",
    "k",
    "x",
    "m",
    "o",
    "n",
    "{",
    "u",
    "q",
    "e",
    "s",
    "y",
    "}",
    "p",
    "v",
    "w",
    "l",
    "t",
    "]",
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
    " ",
    "["
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
  }

  // event listeners
  window.addEventListener("click", function(e) {
    if (e.target == codeBtn) {
      code("code");
    }
    if (e.target == decodeBtn) {
      code("decode");
    }
    if (e.target == typeChangeBtn) {
      if (type == "normal") {
        typeChangeBtn.innerHTML = "Normal-Type";
        passwordBox.classList.add("show");
        normalBox.classList.remove("show");
        normalBox.classList.remove("input-text");
        type = "password";
      } else if (type == "password") {
        typeChangeBtn.innerHTML = "Password-Type";
        passwordBox.classList.remove("show");
        normalBox.classList.add("show");
        normalBox.classList.add("input-text");
        type = "normal";
      }
    }
  });

  window.addEventListener("keydown", function(e) {});
})();
