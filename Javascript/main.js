/*
///////////////////////////////////////////////////////////////////////////////////////
      This Project (The Log) Is Made by Programmer Patrick Paul....
      And all codes are written under a carefull super-version by him..... 
      By no means one or group of two or more is allowed to Copy/interfere with 
      the codes at anyhow with out the permission from the Programmer #Patrick Paul.... 
      If codes found stolen Serious measures wil be taken upon the Thief(s)...
      For Contacts email The Programmer (Patrick Paul) at :- patrickpaul367@gmail.com or
                                                             patrickshao367@gmail.com
                          THANK YOU FOR READING..... :)
////////////////////////////////////////////////////////////////////////////////////////
*/

var din = 0;
var see = 0;
var sign = new Array("+", "-", "*", "/");
var tagsFile = [
  '<div id="oneType" value="' + sign[din] + '">' + sign[din] + "</div>",
  '<label>Log</label> <sub id="swash"><input type="text" id="a" onkeyup="swift(); unCheck_calc();" maxlength="3" placeholder="base" onmouseover="this.placeholder=\'\'" onmouseout="if(this.value == \'\'){this.placeholder=\'base\'}" autocomplete="off" /></sub>',
  '<input type="text" id="b" onkeyup="swift(); unCheck_calc();" maxlength="7" placeholder="" autocomplete="off" />',
];
var insc = document.getElementById("modeTwo");
var insd = document.getElementById("cleanSize");
var calcId = document.getElementById("calc");
var takeInfo = document.getElementById("takeInfo");
var delBase = document.getElementById("base_cleaner");
var ping_Pong = 0;
var regex = /^[0.00-9.99]+$/;
var x = document.getElementById("x");
var y = document.getElementById("y");
var a = document.getElementById("a");
var b = document.getElementById("b");
var copy = document.getElementById("copy");
var model = document.getElementById("model");
var sudo = document.getElementById("sudo");
var results = document.getElementById("results");
var taker = new Array();
var cliker_check = 0;
var swin = new Array();
var tech = new Array();
var spin = new Array();
var calorado = 0;
var ford = 0;
var mint = 0;
var copied;
var width;
var mong;
var final;

// "remove Module" & "X Base Constant" Button & "resert Module" & "Calculate" & "Clean Constant(s)"  & "Copy"button's disability code
document.getElementById("modeTwo").disabled = true;
document.getElementById("base_cleaner").disabled = true;
document.getElementById("cleanSize").disabled = true;
document.getElementById("calc").disabled = true;
document.getElementById("copy").disabled = true;

//The Loading Blocks Positioning Using Javascript
document.getElementById("colapa").style.top = "75%";
document.getElementById("colapa").style.left = "88%";

function backGround() {
  Alert.render(
    "Choose A Background! <br /> <button class=\"linPlus\" style=\"background-color: #505488;\" onclick=\"document.getElementById('body').style.backgroundColor = '#505488'; document.getElementById('cover').style.backgroundColor = '#505488';Alert.ok();\"></button> <button class=\"linPlus\" style=\"background-color: #FFAE8F;\" onclick=\"document.getElementById('body').style.backgroundColor = '#FFAE8F'; document.getElementById('cover').style.backgroundColor = '#FFAE8F'; Alert.ok();\"></button> <button class=\"linPlus\" style=\"background-color: #00B7D4;\" onclick=\"document.getElementById('body').style.backgroundColor = '#00B7D4'; document.getElementById('cover').style.backgroundColor = '#00B7D4';Alert.ok();\"></button> <button class=\"linPlus\" style=\"background-color: crimson;\" onclick=\"document.getElementById('body').style.backgroundColor = '#a70000'; document.getElementById('cover').style.backgroundColor = '#a70000';Alert.ok();\"></button> <button class=\"linPlus\" style=\"background-color: rgb(202, 26, 123);\" onclick=\"document.getElementById('body').style.backgroundColor = 'rgb(202, 26, 123)'; document.getElementById('cover').style.backgroundColor = 'rgb(202, 26, 123)';Alert.ok();\"></button>"
  );
}

function modeOne() {
  document.getElementById("modeOne").disabled = true;
  document.getElementById("modeOne").style.opacity = 0.3;
  document
    .getElementById("modeOne")
    .removeEventListener("mouseover", function () {
      document.getElementById("modeOne").style.transition = 0.5;
      document.getElementById("modeOne").style.backgroundColor = "orange";
      document.getElementById("modeOne").style.borderRadius = 10 + "px";
      document.getElementById("modeOne").style.color = "black";
      document.getElementById("modeOne").style.width = 15 + "%";
      document.getElementById("modeOne").style.height = 62 + "px";
      document.getElementById("modeOne").style.cursor = "pointer";
    });
}

////// ModeOne Button & Base Constant Button MouseOver & MouseOut Event Listerners! ////
document.getElementById("sudo").addEventListener("mouseover", function () {
  sudo.style.transition = 0.5;
  sudo.style.backgroundColor = "orange";
  sudo.style.borderRadius = 5 + "px";
  sudo.style.color = "black";
  sudo.style.width = 15 + "%";
  sudo.style.height = 62 + "px";
  sudo.style.cursor = "pointer";
});

document.getElementById("sudo").addEventListener("mouseout", function () {
  sudo.style.transition = 0.5;
  sudo.style.backgroundColor = "#0bc9c9";
  sudo.style.borderRadius = 5 + "px";
  sudo.style.color = "black";
  sudo.style.width = 14 + "%";
  sudo.style.height = 50 + "px";
});

document.getElementById("modeOne").addEventListener("mouseover", function () {
  document.getElementById("modeOne").style.transition = 0.5;
  document.getElementById("modeOne").style.backgroundColor = "orange";
  document.getElementById("modeOne").style.borderRadius = 10 + "px";
  document.getElementById("modeOne").style.color = "black";
  document.getElementById("modeOne").style.width = 15 + "%";
  document.getElementById("modeOne").style.height = 62 + "px";
  document.getElementById("modeOne").style.cursor = "pointer";
});

document.getElementById("modeOne").addEventListener("mouseout", function () {
  document.getElementById("modeOne").style.transition = 0.5;
  document.getElementById("modeOne").style.backgroundColor = "#0bc9c9";
  document.getElementById("modeOne").style.borderRadius = 5 + "px";
  document.getElementById("modeOne").style.color = "black";
  document.getElementById("modeOne").style.width = 14 + "%";
  document.getElementById("modeOne").style.height = 50 + "px";
});

///////// End Of The Event Listerners!!! /////////////////

function CopyToClipboard() {
  const copyText = document.getElementById("model").textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.getElementById("collector").appendChild(textArea);
  textArea.select();
  document.execCommand("copy");

  copy.disabled = true;
  copy.style.opacity = 0.3;
  copy.style.backgroundColor = "#" + "0bc9c9";
  copy.style.width = 8 + "%";
  copy.style.height = 40 + "px";
  copy.innerHTML = "Copied!";
  copy.style.cursor = "auto";

  document.getElementById("copy").removeEventListener("mouseover", function () {
    copy.style.transition = 0.5;
    copy.style.backgroundColor = "orange";
    copy.style.color = "rgb(0, 0, 0)";
    copy.style.width = 7 + "%";
    copy.style.height = 42 + "px";
    copy.style.cursor = "pointer";
  });

  document.getElementById("copy").removeEventListener("mouseout", function () {
    copy.style.transition = 0.5;
    copy.style.backgroundColor = "#" + "0bc9c9";
    copy.style.color = "rgb(0, 0, 0)";
    copy.style.width = 6 + "%";
    copy.style.height = 40 + "px";
  });
}

function udoCopyButton() {
  copy.disabled = false;
  copy.style.opacity = 1;
  copy.style.transition = 0.5;
  copy.style.backgroundColor = "#" + "0bc9c9";
  copy.style.color = "rgb(0, 0, 0)";
  copy.style.width = 8 + "%";
  copy.style.height = 40 + "px";

  document.getElementById("copy").addEventListener("mouseover", function () {
    copy.style.transition = 0.5;
    copy.style.backgroundColor = "orange";
    copy.style.color = "rgb(0, 0, 0)";
    copy.style.width = 9 + "%";
    copy.style.height = 42 + "px";
    copy.style.cursor = "pointer";
  });

  document.getElementById("copy").addEventListener("mouseout", function () {
    copy.style.transition = 0.5;
    copy.style.backgroundColor = "#" + "0bc9c9";
    copy.style.color = "rgb(0, 0, 0)";
    copy.style.width = 8 + "%";
    copy.style.height = 40 + "px";
  });

  document.getElementById("copy").addEventListener("click", CopyToClipboard);
}

function unCheck_calc() {
  if (ping_Pong == 0) {
    if (cliker_check == 0) {
      var x = document.getElementById("x");
      var y = document.getElementById("y");
      if (x.value != "" && y.value != "") {
        document.getElementById("calc").disabled = false;
        document.getElementById("calc").style.opacity = 1;
        document
          .getElementById("calc")
          .addEventListener("mouseover", function () {
            calcId.style.transition = 0.5;
            calcId.style.backgroundColor = "orange";
            calcId.style.color = "black";
            calcId.style.width = 14 + "%";
            calcId.style.height = 58 + "px";
            calcId.style.cursor = "pointer";
          });
        document
          .getElementById("calc")
          .addEventListener("mouseout", function () {
            calcId.style.transition = 0.5;
            calcId.style.backgroundColor = "#" + "0bc9c9";
            calcId.style.color = "black";
            calcId.style.width = 13 + "%";
            calcId.style.height = 50 + "px";
            calcId.style.cursor = "pointer";
          });
      } else if (x.value == "" || y.value == "") {
        document.getElementById("calc").disabled = true;
        document.getElementById("calc").style.opacity = 0.3;
        calcId.style.transition = 0.5;
        calcId.style.backgroundColor = "#" + "0bc9c9";
        calcId.style.color = "black";
        calcId.style.width = 13 + "%";
        calcId.style.height = 50 + "px";
        calcId.style.cursor = "auto";
      }
    }

    if (cliker_check != 0) {
      var y = document.getElementById("y");
      if (
        (document.getElementById("melo").innerHTML == 10 ||
          document.getElementById("melo").innerHTML == 2.72) &&
        y.value != ""
      ) {
        document.getElementById("calc").disabled = false;
        document.getElementById("calc").style.opacity = 1;
        document
          .getElementById("calc")
          .addEventListener("mouseover", function () {
            calcId.style.transition = 0.5;
            calcId.style.backgroundColor = "orange";
            calcId.style.color = "black";
            calcId.style.width = 14 + "%";
            calcId.style.height = 58 + "px";
            calcId.style.cursor = "pointer";
          });
        document
          .getElementById("calc")
          .addEventListener("mouseout", function () {
            calcId.style.transition = 0.5;
            calcId.style.backgroundColor = "#" + "0bc9c9";
            calcId.style.color = "black";
            calcId.style.width = 13 + "%";
            calcId.style.height = 50 + "px";
            calcId.style.cursor = "pointer";
          });
      } else if (
        (document.getElementById("melo").innerHTML == 10 ||
          document.getElementById("melo").innerHTML == 2.72) &&
        y.value == ""
      ) {
        document.getElementById("calc").disabled = true;
        document.getElementById("calc").style.opacity = 0.3;
        calcId.style.transition = 0.5;
        calcId.style.backgroundColor = "#" + "0bc9c9";
        calcId.style.color = "black";
        calcId.style.width = 13 + "%";
        calcId.style.height = 50 + "px";
        calcId.style.cursor = "auto";
      }
    }
  }

  if (ping_Pong != 0) {
    if (cliker_check == 0) {
      var x = document.getElementById("x");
      var y = document.getElementById("y");
      var a = document.getElementById("a");
      var b = document.getElementById("b");

      if (x.value != "" && y.value != "" && a.value != "" && b.value != "") {
        document.getElementById("calc").disabled = false;
        document.getElementById("calc").style.opacity = 1;
        document
          .getElementById("calc")
          .addEventListener("mouseover", function () {
            calcId.style.transition = 0.5;
            calcId.style.backgroundColor = "orange";
            calcId.style.color = "black";
            calcId.style.width = 14 + "%";
            calcId.style.height = 58 + "px";
            calcId.style.cursor = "pointer";
          });
        document
          .getElementById("calc")
          .addEventListener("mouseout", function () {
            calcId.style.transition = 0.5;
            calcId.style.backgroundColor = "#" + "0bc9c9";
            calcId.style.color = "black";
            calcId.style.width = 13 + "%";
            calcId.style.height = 50 + "px";
            calcId.style.cursor = "pointer";
          });
      } else if (
        x.value != "" &&
        y.value != "" &&
        a.value == "" &&
        b.value == ""
      ) {
        document.getElementById("calc").disabled = true;
        document.getElementById("calc").style.opacity = 0.3;
        calcId.style.transition = 0.5;
        calcId.style.backgroundColor = "#" + "0bc9c9";
        calcId.style.color = "black";
        calcId.style.width = 13 + "%";
        calcId.style.height = 50 + "px";
        calcId.style.cursor = "auto";
      } else if (
        x.value == "" ||
        y.value == "" ||
        a.value == "" ||
        b.value == ""
      ) {
        document.getElementById("calc").disabled = true;
        document.getElementById("calc").style.opacity = 0.3;
        calcId.style.transition = 0.5;
        calcId.style.backgroundColor = "#" + "0bc9c9";
        calcId.style.color = "black";
        calcId.style.width = 13 + "%";
        calcId.style.height = 50 + "px";
        calcId.style.cursor = "auto";
      }
    }

    if (cliker_check != 0) {
      if (
        document.getElementById("melo").innerHTML == 10 ||
        document.getElementById("melo").innerHTML == 2.72
      ) {
        var x = document.getElementById("melo");
      } else if (
        document.getElementById("melo").innerHTML != 10 &&
        document.getElementById("melo").innerHTML != 2.72
      ) {
        var x = document.getElementById("x");
      }

      var y = document.getElementById("y");

      if (
        document.getElementById("swash").innerHTML == 10 ||
        document.getElementById("swash").innerHTML == 2.72
      ) {
        var a = document.getElementById("swash");
      } else if (
        document.getElementById("swash").innerHTML != 10 &&
        document.getElementById("swash").innerHTML != 2.72
      ) {
        var a = document.getElementById("a");
      }

      var b = document.getElementById("b");

      if (
        x == document.getElementById("melo") &&
        a != document.getElementById("swash")
      ) {
        if (y.value != "" && b.value != "" && a.value != "") {
          document.getElementById("calc").disabled = false;
          document.getElementById("calc").style.opacity = 1;
          document
            .getElementById("calc")
            .addEventListener("mouseover", function () {
              calcId.style.transition = 0.5;
              calcId.style.backgroundColor = "orange";
              calcId.style.color = "black";
              calcId.style.width = 14 + "%";
              calcId.style.height = 58 + "px";
              calcId.style.cursor = "pointer";
            });
          document
            .getElementById("calc")
            .addEventListener("mouseout", function () {
              calcId.style.transition = 0.5;
              calcId.style.backgroundColor = "#" + "0bc9c9";
              calcId.style.color = "black";
              calcId.style.width = 13 + "%";
              calcId.style.height = 50 + "px";
              calcId.style.cursor = "pointer";
            });
        } else if (y.value == "" || b.value == "" || a.value == "") {
          document.getElementById("calc").disabled = true;
          document.getElementById("calc").style.opacity = 0.3;
          calcId.style.transition = 0.5;
          calcId.style.backgroundColor = "#" + "0bc9c9";
          calcId.style.color = "black";
          calcId.style.width = 13 + "%";
          calcId.style.height = 50 + "px";
          calcId.style.cursor = "auto";
        }
      } else if (
        x != document.getElementById("melo") &&
        a == document.getElementById("swash")
      ) {
        if (y.value != "" && b.value != "" && x.value != "") {
          document.getElementById("calc").disabled = false;
          document.getElementById("calc").style.opacity = 1;
          document
            .getElementById("calc")
            .addEventListener("mouseover", function () {
              calcId.style.transition = 0.5;
              calcId.style.backgroundColor = "orange";
              calcId.style.color = "black";
              calcId.style.width = 14 + "%";
              calcId.style.height = 58 + "px";
              calcId.style.cursor = "pointer";
            });
          document
            .getElementById("calc")
            .addEventListener("mouseout", function () {
              calcId.style.transition = 0.5;
              calcId.style.backgroundColor = "#" + "0bc9c9";
              calcId.style.color = "black";
              calcId.style.width = 13 + "%";
              calcId.style.height = 50 + "px";
              calcId.style.cursor = "pointer";
            });
        } else if (y.value == "" || b.value == "" || x.value == "") {
          document.getElementById("calc").disabled = true;
          document.getElementById("calc").style.opacity = 0.3;
          calcId.style.transition = 0.5;
          calcId.style.backgroundColor = "#" + "0bc9c9";
          calcId.style.color = "black";
          calcId.style.width = 13 + "%";
          calcId.style.height = 50 + "px";
          calcId.style.cursor = "auto";
        }
      } else if (
        x == document.getElementById("melo") &&
        a == document.getElementById("swash")
      ) {
        if (y.value != "" && b.value != "") {
          document.getElementById("calc").disabled = false;
          document.getElementById("calc").style.opacity = 1;
          document
            .getElementById("calc")
            .addEventListener("mouseover", function () {
              calcId.style.transition = 0.5;
              calcId.style.backgroundColor = "orange";
              calcId.style.color = "black";
              calcId.style.width = 14 + "%";
              calcId.style.height = 58 + "px";
              calcId.style.cursor = "pointer";
            });
          document
            .getElementById("calc")
            .addEventListener("mouseout", function () {
              calcId.style.transition = 0.5;
              calcId.style.backgroundColor = "#" + "0bc9c9";
              calcId.style.color = "black";
              calcId.style.width = 13 + "%";
              calcId.style.height = 50 + "px";
              calcId.style.cursor = "pointer";
            });
        } else if (y.value == "" || b.value == "") {
          document.getElementById("calc").disabled = true;
          document.getElementById("calc").style.opacity = 0.3;
          calcId.style.transition = 0.5;
          calcId.style.backgroundColor = "#" + "0bc9c9";
          calcId.style.color = "black";
          calcId.style.width = 13 + "%";
          calcId.style.height = 50 + "px";
          calcId.style.cursor = "auto";
        }
      }
    }
  }
}

function swift() {
  if (cliker_check == 0) {
    if (ping_Pong == 0) {
      if (x != "" || y.value != "" || model.innerHTML != "") {
        document.getElementById("cleanSize").disabled = false;
        document.getElementById("cleanSize").style.opacity = 1;
        document
          .getElementById("cleanSize")
          .addEventListener("mouseover", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "orange";
            insd.style.color = "black";
            insd.style.width = 15 + "%";
            insd.style.height = 58 + "px";
            insd.style.cursor = "pointer";
          });
        document
          .getElementById("cleanSize")
          .addEventListener("mouseout", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "#" + "0bc9c9";
            insd.style.color = "black";
            insd.style.width = 14 + "%";
            insd.style.height = 50 + "px";
            insd.style.cursor = "pointer";
          });
      } else if (x == "" && y.value == "") {
        document.getElementById("cleanSize").disabled = true;
        document.getElementById("cleanSize").style.opacity = 0.3;
        document
          .getElementById("cleanSize")
          .removeEventListener("mouseover", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "orange";
            insd.style.color = "black";
            insd.style.width = 15 + "%";
            insd.style.height = 58 + "px";
            insd.style.cursor = "pointer";
          });

        document
          .getElementById("cleanSize")
          .removeEventListener("mouseout", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "#" + "0bc9c9";
            insd.style.color = "black";
            insd.style.width = 14 + "%";
            insd.style.height = 50 + "px";
            insd.style.cursor = "pointer";
          });
      }
    }

    if (ping_Pong != 0) {
      var a = document.getElementById("a");
      var b = document.getElementById("b");
      if (
        x != "" ||
        y.value != "" ||
        a != "" ||
        b.value != "" ||
        model.innerHTML != ""
      ) {
        document.getElementById("cleanSize").disabled = false;
        document.getElementById("cleanSize").style.opacity = 1;
        document
          .getElementById("cleanSize")
          .addEventListener("mouseover", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "orange";
            insd.style.color = "black";
            insd.style.width = 15 + "%";
            insd.style.height = 58 + "px";
            insd.style.cursor = "pointer";
          });
        document
          .getElementById("cleanSize")
          .addEventListener("mouseout", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "#" + "0bc9c9";
            insd.style.color = "black";
            insd.style.width = 14 + "%";
            insd.style.height = 50 + "px";
            insd.style.cursor = "pointer";
          });
      } else if (x == "" && y.value == "" && a == "" && b.value == "") {
        document.getElementById("cleanSize").disabled = true;
        document.getElementById("cleanSize").style.opacity = 0.3;
        takeInfo.innerHTML = "";
        document
          .getElementById("cleanSize")
          .removeEventListener("mouseover", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "orange";
            insd.style.color = "black";
            insd.style.width = 15 + "%";
            insd.style.height = 58 + "px";
            insd.style.cursor = "auto";
          });
        document
          .getElementById("cleanSize")
          .removeEventListener("mouseout", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "#" + "0bc9c9";
            insd.style.color = "black";
            insd.style.width = 14 + "%";
            insd.style.height = 50 + "px";
            insd.style.cursor = "auto";
          });
      }
    }
  } else if (cliker_check != 0) {
    if (ping_Pong == 0) {
      if (y.value != "" || model.innerHTML != "") {
        document.getElementById("cleanSize").disabled = false;
        document.getElementById("cleanSize").style.opacity = 1;
        document
          .getElementById("cleanSize")
          .addEventListener("mouseover", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "orange";
            insd.style.color = "black";
            insd.style.width = 15 + "%";
            insd.style.height = 58 + "px";
            insd.style.cursor = "pointer";
          });
        document
          .getElementById("cleanSize")
          .addEventListener("mouseout", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "#" + "0bc9c9";
            insd.style.color = "black";
            insd.style.width = 14 + "%";
            insd.style.height = 50 + "px";
            insd.style.cursor = "pointer";
          });
      } else if (y.value == "") {
        document.getElementById("cleanSize").disabled = true;
        document.getElementById("cleanSize").style.opacity = 0.3;
        document
          .getElementById("cleanSize")
          .removeEventListener("mouseover", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "orange";
            insd.style.color = "black";
            insd.style.width = 15 + "%";
            insd.style.height = 58 + "px";
            insd.style.cursor = "pointer";
          });
        document
          .getElementById("cleanSize")
          .removeEventListener("mouseout", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "#" + "0bc9c9";
            insd.style.color = "black";
            insd.style.width = 14 + "%";
            insd.style.height = 50 + "px";
            insd.style.cursor = "pointer";
          });
      }
    }

    if (ping_Pong != 0) {
      if (
        document.getElementById("melo").innerHTML == 10 ||
        document.getElementById("melo").innerHTML == 2.72
      ) {
        var x = document.getElementById("melo").innerHTML;
      }
      if (
        document.getElementById("melo").innerHTML != 10 &&
        document.getElementById("melo").innerHTML != 2.72
      ) {
        var x = document.getElementById("x").value;
      }
      if (
        document.getElementById("swash").innerHTML == 10 ||
        document.getElementById("swash").innerHTML == 2.72
      ) {
        var a = document.getElementById("swash").innerHTML;
      }
      if (
        document.getElementById("swash").innerHTML != 10 &&
        document.getElementById("swash").innerHTML != 2.72
      ) {
        var a = document.getElementById("a").value;
      }
      var b = document.getElementById("b");
      if (
        x != "" ||
        y.value != "" ||
        a != "" ||
        b.value != "" ||
        model.innerHTML != ""
      ) {
        document.getElementById("cleanSize").disabled = false;
        document.getElementById("cleanSize").style.opacity = 1;
        document
          .getElementById("cleanSize")
          .addEventListener("mouseover", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "orange";
            insd.style.color = "black";
            insd.style.width = 15 + "%";
            insd.style.height = 58 + "px";
            insd.style.cursor = "pointer";
          });
        document
          .getElementById("cleanSize")
          .addEventListener("mouseout", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "#" + "0bc9c9";
            insd.style.color = "black";
            insd.style.width = 14 + "%";
            insd.style.height = 50 + "px";
            insd.style.cursor = "pointer";
          });
      } else if (y.value == "" && b.value == "") {
        document.getElementById("cleanSize").disabled = true;
        document.getElementById("cleanSize").style.opacity = 0.3;
        takeInfo.innerHTML = "";
        document
          .getElementById("cleanSize")
          .removeEventListener("mouseover", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "orange";
            insd.style.color = "black";
            insd.style.width = 15 + "%";
            insd.style.height = 58 + "px";
            insd.style.cursor = "auto";
          });
        document
          .getElementById("cleanSize")
          .removeEventListener("mouseout", function () {
            insd.style.transition = 0.5;
            insd.style.backgroundColor = "#" + "0bc9c9";
            insd.style.color = "black";
            insd.style.width = 14 + "%";
            insd.style.height = 50 + "px";
            insd.style.cursor = "auto";
          });
      }
    }
  }
}

function addModule() {
  see++;
  Alert.render(
    'Choose An Operator! <br /> <button class="linPlus" id="plus" onclick="hoverAge(event); unCheck_calc()">+</button><button class="linPlus" id="minus" onclick="hoverAge(event);unCheck_calc()">-</button><button class="linPlus" id="times" onclick="hoverAge(event);unCheck_calc()">x</button><button class="linPlus" id="divide" onclick="hoverAge(event);unCheck_calc()">/</button>'
  );
}
function hoverAge(event) {
  document.getElementById("plus").style.backgroundColor = "#fb2525";
  document.getElementById("plus").style.border = "none";

  document.getElementById("minus").style.backgroundColor = "#fb2525";
  document.getElementById("minus").style.border = "none";

  document.getElementById("times").style.backgroundColor = "#fb2525";
  document.getElementById("times").style.border = "none";

  document.getElementById("divide").style.backgroundColor = "#fb2525";
  document.getElementById("divide").style.border = "none";

  document.getElementById(event.target.id).style.backgroundColor = "purple";
  document.getElementById(event.target.id).style.border =
    "1px solid rgb(255, 0, 157)";

  if (ford == 0) {
    if (event.target.id == "plus") {
      din = 0;
      tagsFile = [
        '<div id="signature"><div id="oneType" value="' +
          sign[din] +
          '">' +
          sign[din] +
          "</div></div>",
        '<label>Log</label> <sub id="swash"><input type="text" id="a" onkeyup="swift(); unCheck_calc();" spellcheck="false" maxlength="3" onmouseover="this.placeholder=\'\'" onmouseout="if(this.value == \'\'){this.placeholder=\'base\'}" autocomplete="off" placeholder="base"/></sub>',
        '<input type="text" id="b" spellcheck="false" onkeyup="swift(); unCheck_calc();" maxlength="7" autocomplete="off" placeholder="" />',
      ];
      document.getElementById("subTheme").innerHTML =
        tagsFile[0] + tagsFile[1] + tagsFile[2];
      if (document.getElementById("sudo").innerHTML == "^ Const(s)") {
        document.getElementById("sudo").innerHTML = "+ Const(s)";
      }
      unCheck_calc();
    } else if (event.target.id == "minus") {
      din = 1;
      tagsFile = [
        '<div id="signature"><div id="oneType" value="' +
          sign[din] +
          '">' +
          sign[din] +
          "</div></div>",
        '<label>Log</label> <sub id="swash"><input type="text" id="a" onkeyup="swift(); unCheck_calc();" spellcheck="false" maxlength="3" onmouseover="this.placeholder=\'\'" onmouseout="if(this.value == \'\'){this.placeholder=\'base\'}" autocomplete="off" placeholder="base"/></sub>',
        '<input type="text" id="b" placeholder="" maxlength="7" spellcheck="false" onkeyup="swift(); unCheck_calc();" autocomplete="off" />',
      ];
      document.getElementById("subTheme").innerHTML =
        tagsFile[0] + tagsFile[1] + tagsFile[2];
      if (document.getElementById("sudo").innerHTML == "^ Const(s)") {
        document.getElementById("sudo").innerHTML = "+ Const(s)";
      }
      unCheck_calc();
    } else if (event.target.id == "times") {
      din = 2;
      tagsFile = [
        '<div id="signature"><div id="oneType" value="' +
          sign[din] +
          '">' +
          sign[din] +
          "</div></div>",
        '<label>Log</label> <sub id="swash"><input type="text" id="a" onkeyup="swift(); unCheck_calc();" spellcheck="false" maxlength="3" onmouseover="this.placeholder=\'\'" onmouseout="if(this.value == \'\'){this.placeholder=\'base\'}" autocomplete="off" placeholder="base"/></sub>',
        '<input type="text" id="b" placeholder="" maxlength="7" spellcheck="false" onkeyup="swift(); unCheck_calc();" autocomplete="off" />',
      ];
      document.getElementById("subTheme").innerHTML =
        tagsFile[0] + tagsFile[1] + tagsFile[2];
      if (document.getElementById("sudo").innerHTML == "^ Const(s)") {
        document.getElementById("sudo").innerHTML = "+ Const(s)";
      }
      unCheck_calc();
    } else if (event.target.id == "divide") {
      din = 3;
      tagsFile = [
        '<div id="signature"><div id="oneType" value="' +
          sign[din] +
          '">' +
          sign[din] +
          "</div></div>",
        '<label>Log</label> <sub id="swash"><input type="text" id="a" onkeyup="swift(); unCheck_calc();" spellcheck="false" maxlength="3" onmouseover="this.placeholder=\'\'" onmouseout="if(this.value == \'\'){this.placeholder=\'base\'}" autocomplete="off" placeholder="base"/></sub>',
        '<input type="text" id="b" placeholder="" spellcheck="false" onkeyup="swift(); unCheck_calc();" maxlength="7" autocomplete="off"/>',
      ];
      document.getElementById("subTheme").innerHTML =
        tagsFile[0] + tagsFile[1] + tagsFile[2];
      if (document.getElementById("sudo").innerHTML == "^ Const(s)") {
        document.getElementById("sudo").innerHTML = "+ Const(s)";
      }
      unCheck_calc();
    }
    document.getElementById("modeOne").innerText = "^ Module";
    ping_Pong++;
    ford++;
    Aman();
  } else if (ford != 0) {
    if (event.target.id == "plus") {
      din = 0;
      tagsFile = [
        '<div id="signature"><div id="oneType" value="' +
          sign[din] +
          '">' +
          sign[din] +
          "</div></div>",
      ];
      document.getElementById("signature").innerHTML = tagsFile[0];
      unCheck_calc();
    } else if (event.target.id == "minus") {
      din = 1;
      tagsFile = [
        '<div id="signature"><div id="oneType" value="' +
          sign[din] +
          '">' +
          sign[din] +
          "</div></div>",
      ];
      document.getElementById("signature").innerHTML = tagsFile[0];
      unCheck_calc();
    } else if (event.target.id == "times") {
      din = 2;
      tagsFile = [
        '<div id="signature"><div id="oneType" value="' +
          sign[din] +
          '">' +
          sign[din] +
          "</div></div>",
      ];
      document.getElementById("signature").innerHTML = tagsFile[0];
      unCheck_calc();
    } else if (event.target.id == "divide") {
      din = 3;
      tagsFile = [
        '<div id="signature"><div id="oneType" value="' +
          sign[din] +
          '">' +
          sign[din] +
          "</div></div>",
      ];
      document.getElementById("signature").innerHTML = tagsFile[0];
      unCheck_calc();
    }
    document.getElementById("modeOne").innerText = "^ Module";
    ping_Pong++;
    Aman();
  }
  setTimeout("Alert.ok()", 100);
}

function removeModule() {
  if (ping_Pong != 0) {
    if (
      document.getElementById("melo").innerHTML != 10 &&
      document.getElementById("melo").innerHTML != 2.72
    ) {
      if (cliker_check != 0) {
        cliker_check = 0;
      }
      document
        .getElementById("base_cleaner")
        .removeEventListener("mouseover", function () {
          delBase.style.transition = 0.5 + "s";
          delBase.style.backgroundColor = "orange";
          delBase.style.borderRadius = 5 + "px";
          delBase.style.width = 15 + "%";
          delBase.style.height = 62 + "px";
        });
      document
        .getElementById("base_cleaner")
        .removeEventListener("mouseout", function () {
          delBase.style.transition = 0.5 + "s";
          delBase.style.backgroundColor = "#" + "0bc9c9";
          delBase.style.width = 14 + "%";
          delBase.style.height = 50 + "px";
        });

      delBase.style.transition = 0.5 + "s";
      delBase.style.backgroundColor = "#" + "0bc9c9";
      delBase.style.borderRadius = 5 + "px";
      delBase.style.width = 14 + "%";
      delBase.style.height = 50 + "px";
      delBase.disabled = true;
      delBase.style.opacity = 0.3;
    } else if (
      document.getElementById("melo").innerHTML == 10 ||
      document.getElementById("melo").innerHTML == 2.72
    ) {
      if (document.getElementById("sudo").innerHTML == "+ Const(s)") {
        document.getElementById("sudo").innerHTML = "^ Const(s)";
      }
    }
    document.getElementById("subTheme").innerHTML = "";
    ford = 0;
    ping_Pong = 0;
    Aman();
    document.getElementById("modeOne").innerText = "+ Module";
    unCheck_calc();
  }
}

function resertModule() {
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var x = document.getElementById("x");
  var y = document.getElementById("y");

  width = 10;

  if (document.getElementById("sudo").disabled) {
    //base Button Recovery
    sudo.disabled = false;
    sudo.style.opacity = 1;
    document.getElementById("sudo").addEventListener("mouseover", function () {
      sudo.style.transition = 0.5;
      sudo.style.backgroundColor = "orange";

      sudo.style.borderRadius = 5 + "px";
      sudo.style.color = "black";
      sudo.style.width = 15 + "%";
      sudo.style.height = 62 + "px";
      sudo.style.cursor = "pointer";
    });

    document.getElementById("sudo").addEventListener("mouseout", function () {
      sudo.style.transition = 0.5;
      sudo.style.backgroundColor = "#0bc9c9";
      sudo.style.borderRadius = 5 + "px";
      sudo.style.color = "black";
      sudo.style.width = 14 + "%";
      sudo.style.height = 50 + "px";
    });
  }

  if (ping_Pong != 0) {
    if (document.getElementById("modeTwo").disabled) {
      //Mode Two Button Recovery
      document.getElementById("modeTwo").disabled = false;
      document.getElementById("modeTwo").style.opacity = 1;
      document
        .getElementById("modeTwo")
        .addEventListener("mouseover", function () {
          document.getElementById("modeTwo").style.transition = 0.5;
          document.getElementById("modeTwo").style.backgroundColor = "orange";

          document.getElementById("modeTwo").style.borderRadius = 5 + "px";
          document.getElementById("modeTwo").style.color = "black";
          document.getElementById("modeTwo").style.width = 15 + "%";
          document.getElementById("modeTwo").style.height = 62 + "px";
          document.getElementById("modeTwo").style.cursor = "pointer";
        });

      document
        .getElementById("modeTwo")
        .addEventListener("mouseout", function () {
          document.getElementById("modeTwo").style.transition = 0.5;
          document.getElementById("modeTwo").style.backgroundColor = "#0bc9c9";
          document.getElementById("modeTwo").style.borderRadius = 5 + "px";
          document.getElementById("modeTwo").style.color = "black";
          document.getElementById("modeTwo").style.width = 14 + "%";
          document.getElementById("modeTwo").style.height = 50 + "px";
        });
    }
  }

  if (document.getElementById("modeOne").disabled) {
    document.getElementById("modeOne").disabled = false;
    document.getElementById("modeOne").style.opacity = 1;
    document
      .getElementById("modeOne")
      .addEventListener("mouseover", function () {
        document.getElementById("modeOne").style.transition = 0.5;
        document.getElementById("modeOne").style.backgroundColor = "orange";

        document.getElementById("modeOne").style.borderRadius = 10 + "px";
        document.getElementById("modeOne").style.color = "black";
        document.getElementById("modeOne").style.width = 15 + "%";
        document.getElementById("modeOne").style.height = 62 + "px";
        document.getElementById("modeOne").style.cursor = "pointer";
      });

    document
      .getElementById("modeOne")
      .addEventListener("mouseout", function () {
        document.getElementById("modeOne").style.transition = 0.5;
        document.getElementById("modeOne").style.backgroundColor = "#0bc9c9";
        document.getElementById("modeOne").style.borderRadius = 5 + "px";
        document.getElementById("modeOne").style.color = "black";
        document.getElementById("modeOne").style.width = 14 + "%";
        document.getElementById("modeOne").style.height = 50 + "px";
      });
  }

  if (copy.innerHTML == "Copied!" || copy.innerHTML == "Copy") {
    copy.innerHTML = "Copy";
    copy.disabled = true;
    copy.style.opacity = 0.3;
    copy.style.backgroundColor = "#" + "0bc9c9";
    copy.style.width = 8 + "%";
    copy.style.height = 40 + "px";
    copy.style.cursor = "auto";
  }

  if (cliker_check == 0) {
    if (ping_Pong == 0) {
      if (x.value != "" || y.value != "" || model.innerHTML != "") {
        // clearing
        document.getElementById("x").value = "";
        document.getElementById("x").placeholder = "base";
        document.getElementById("y").value = "";
        model.innerHTML = "";
        takeInfo.innerHTML = "";

        document.getElementById("x").addEventListener("mouseover", function () {
          document.getElementById("x").style.borderBottom = "1px solid gold";
        });

        document.getElementById("y").addEventListener("mouseover", function () {
          document.getElementById("y").style.borderBottom = "1px solid gold";
        });

        document.getElementById("x").addEventListener("mouseout", function () {
          document.getElementById("x").style.borderBottom = "1px solid black";
        });

        document.getElementById("y").addEventListener("mouseout", function () {
          document.getElementById("y").style.borderBottom = "1px solid black";
        });
        //css recovery
        insd.style.transition = 0.5;
        insd.style.backgroundColor = "#" + "0bc9c9";
        insd.style.color = "black";
        insd.style.width = 14 + "%";
        insd.style.height = 50 + "px";
        insd.style.cursor = "auto";

        // disability
        insd.disabled = true;
        insd.style.opacity = 0.3;
        unCheck_calc();
      }
    }

    if (ping_Pong != 0) {
      if (
        y.value != "" ||
        x.value != "" ||
        a.value != "" ||
        b.value != "" ||
        model.innerHTML != ""
      ) {
        document.getElementById("x").value = "";
        document.getElementById("x").placeholder = "base";
        document.getElementById("y").value = "";

        document.getElementById("a").value = "";
        document.getElementById("a").placeholder = "base";
        document.getElementById("b").value = "";
        model.innerHTML = "";
        takeInfo.innerHTML = "";

        document.getElementById("x").addEventListener("mouseover", function () {
          document.getElementById("x").style.borderBottom = "1px solid gold";
        });

        document.getElementById("y").addEventListener("mouseover", function () {
          document.getElementById("y").style.borderBottom = "1px solid gold";
        });

        document.getElementById("a").addEventListener("mouseover", function () {
          document.getElementById("a").style.borderBottom = "1px solid gold";
        });

        document.getElementById("b").addEventListener("mouseover", function () {
          document.getElementById("b").style.borderBottom = "1px solid gold";
        });

        document.getElementById("x").addEventListener("mouseout", function () {
          document.getElementById("x").style.borderBottom = "1px solid black";
        });

        document.getElementById("y").addEventListener("mouseout", function () {
          document.getElementById("y").style.borderBottom = "1px solid black";
        });

        document.getElementById("a").addEventListener("mouseout", function () {
          document.getElementById("a").style.borderBottom = "1px solid black";
        });

        document.getElementById("b").addEventListener("mouseout", function () {
          document.getElementById("b").style.borderBottom = "1px solid black";
        });

        //css recovery
        insd.style.transition = 0.5;
        insd.style.backgroundColor = "#" + "0bc9c9";
        insd.style.color = "black";
        insd.style.width = 14 + "%";
        insd.style.height = 50 + "px";
        insd.style.cursor = "auto";

        // disability
        insd.disabled = true;
        insd.style.opacity = 0.3;
        unCheck_calc();
      }
    }
  } else if (cliker_check != 0) {
    if (ping_Pong == 0) {
      if (y.value != "" || model.innerHTML != "") {
        // clearing
        document.getElementById("y").value = "";
        model.innerHTML = "";
        takeInfo.innerHTML = "";

        //css recovery
        insd.style.transition = 0.5;
        insd.style.backgroundColor = "#" + "0bc9c9";
        insd.style.color = "black";
        insd.style.width = 14 + "%";
        insd.style.height = 50 + "px";
        insd.style.cursor = "auto";

        // disability
        insd.disabled = true;
        insd.style.opacity = 0.3;
        if (calorado != 0) {
          love();
          calorado = 0;
        }
        unCheck_calc();
      }
    }

    if (ping_Pong != 0) {
      if (
        document.getElementById("melo").innerHTML != 10 &&
        document.getElementById("melo").innerHTML != 2.72
      ) {
        document.getElementById("x").value = "";
        document.getElementById("x").placeholder = "base";
        document.getElementById("y").value = "";
      } else if (
        document.getElementById("melo").innerHTML == 10 ||
        document.getElementById("melo").innerHTML == 2.72
      ) {
        if (calorado != 0) {
          love();
          calorado = 0;
        }
      }

      if (
        document.getElementById("swash").innerHTML != 10 &&
        document.getElementById("swash").innerHTML != 2.72
      ) {
        document.getElementById("a").value = "";
        document.getElementById("a").placeholder = "base";
        document.getElementById("b").value = "";
      } else if (
        document.getElementById("swash").innerHTML == 10 ||
        document.getElementById("swash").innerHTML == 2.72
      ) {
        if (calorado != 0) {
          love();
          calorado = 0;
        }
      }

      if (
        y.value != "" ||
        b.value != "" ||
        model.innerHTML != "" ||
        takeInfo.innerHTML != ""
      ) {
        document.getElementById("y").value = "";
        document.getElementById("b").value = "";
        model.innerHTML = "";
        takeInfo.innerHTML = "";
        if (calorado != 0) {
          calorado = 0;
        }

        //css recovery
        insd.style.transition = 0.5;
        insd.style.backgroundColor = "#" + "0bc9c9";
        insd.style.color = "black";
        insd.style.width = 14 + "%";
        insd.style.height = 50 + "px";
        insd.style.cursor = "auto";

        // disability
        insd.disabled = true;
        insd.style.opacity = 0.3;
        unCheck_calc();
      }
    }
  }
}

var i = 0;
var countTime = 10;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    mong = 0;
    width = 0;
    var id = setInterval(frame, 1000);

    function frame() {
      if (width >= 10) {
        clearInterval(id);
        Aman();

        calorado++;
        if (cliker_check != 0) {
          if (ping_Pong != 0) {
            if (
              (document.getElementById("melo").innerHTML == 10 ||
                document.getElementById("melo").innerHTML == 2.72) &&
              document.getElementById("swash").innerHTML != 10 &&
              document.getElementById("swash").innerHTML != 2.72
            ) {
              love();

              document.getElementById("a").disabled = false;
              document.getElementById("b").disabled = false;
              document.getElementById("y").disabled = false;

              document.getElementById("a").style.borderBottom =
                "1px solid black";
              document.getElementById("b").style.borderBottom =
                "1px solid black";
              document.getElementById("y").style.borderBottom =
                "1px solid black";

              document
                .getElementById("a")
                .addEventListener("mouseover", function () {
                  document.getElementById("a").style.borderBottom =
                    "1px solid gold";
                });

              document
                .getElementById("b")
                .addEventListener("mouseover", function () {
                  document.getElementById("b").style.borderBottom =
                    "1px solid gold";
                });

              document
                .getElementById("a")
                .addEventListener("mouseout", function () {
                  document.getElementById("a").style.borderBottom =
                    "1px solid black";
                });

              document
                .getElementById("b")
                .addEventListener("mouseout", function () {
                  document.getElementById("b").style.borderBottom =
                    "1px solid black";
                });
            }
            if (
              document.getElementById("melo").innerHTML != 10 &&
              document.getElementById("melo").innerHTML != 2.72 &&
              (document.getElementById("swash").innerHTML == 10 ||
                document.getElementById("swash").innerHTML == 2.72)
            ) {
              love();

              document.getElementById("b").disabled = false;
              document.getElementById("x").disabled = false;
              document.getElementById("y").disabled = false;

              document.getElementById("b").style.borderBottom =
                "1px solid black";
              document.getElementById("x").style.borderBottom =
                "1px solid black";
              document.getElementById("y").style.borderBottom =
                "1px solid black";

              document
                .getElementById("x")
                .addEventListener("mouseover", function () {
                  document.getElementById("x").style.borderBottom =
                    "1px solid gold";
                });

              document
                .getElementById("y")
                .addEventListener("mouseover", function () {
                  document.getElementById("y").style.borderBottom =
                    "1px solid gold";
                });

              document
                .getElementById("x")
                .addEventListener("mouseout", function () {
                  document.getElementById("x").style.borderBottom =
                    "1px solid black";
                });

              document
                .getElementById("y")
                .addEventListener("mouseout", function () {
                  document.getElementById("y").style.borderBottom =
                    "1px solid black";
                });
            }
            if (
              (document.getElementById("melo").innerHTML == 10 ||
                document.getElementById("melo").innerHTML == 2.72) &&
              (document.getElementById("swash").innerHTML == 10 ||
                document.getElementById("swash").innerHTML == 2.72)
            ) {
              love();

              document.getElementById("b").disabled = false;
              document.getElementById("y").disabled = false;

              document.getElementById("b").style.borderBottom =
                "1px solid black";
              document.getElementById("y").style.borderBottom =
                "1px solid black";

              document
                .getElementById("y")
                .addEventListener("mouseover", function () {
                  document.getElementById("y").style.borderBottom =
                    "1px solid gold";
                });

              document
                .getElementById("y")
                .addEventListener("mouseout", function () {
                  document.getElementById("y").style.borderBottom =
                    "1px solid black";
                });

              document
                .getElementById("b")
                .addEventListener("mouseover", function () {
                  document.getElementById("b").style.borderBottom =
                    "1px solid gold";
                });

              document
                .getElementById("b")
                .addEventListener("mouseout", function () {
                  document.getElementById("b").style.borderBottom =
                    "1px solid black";
                });
            }
            if (
              document.getElementById("melo").innerHTML != 10 &&
              document.getElementById("melo").innerHTML != 2.72 &&
              document.getElementById("swash").innerHTML != 10 &&
              document.getElementById("swash").innerHTML != 2.72
            ) {
              document.getElementById("a").disabled = true;
              document.getElementById("b").disabled = true;
              document.getElementById("x").disabled = true;
              document.getElementById("y").disabled = false;

              document.getElementById("a").style.borderBottom =
                "1px solid black";
              document.getElementById("b").style.borderBottom =
                "1px solid black";
              document.getElementById("x").style.borderBottom =
                "1px solid black";
              document.getElementById("y").style.borderBottom =
                "1px solid black";

              document
                .getElementById("base_cleaner")
                .removeEventListener("mouseover", function () {
                  delBase.style.transition = 0.5 + "s";
                  delBase.style.backgroundColor = "orange";
                  delBase.style.borderRadius = 5 + "px";
                  delBase.style.width = 15 + "%";
                  delBase.style.height = 62 + "px";
                });
              document
                .getElementById("base_cleaner")
                .removeEventListener("mouseout", function () {
                  delBase.style.transition = 0.5 + "s";
                  delBase.style.backgroundColor = "#" + "0bc9c9";
                  delBase.style.width = 14 + "%";
                  delBase.style.height = 50 + "px";
                });

              delBase.style.transition = 0.5 + "s";
              delBase.style.backgroundColor = "#" + "0bc9c9";
              delBase.style.borderRadius = 5 + "px";
              delBase.style.width = 14 + "%";
              delBase.style.height = 50 + "px";
              delBase.disabled = true;
              delBase.style.opacity = 0.3;
            }
          }
        }

        if (ping_Pong != 0) {
          if (document.getElementById("modeTwo").disabled) {
            //Mode Two Button Recovery
            document.getElementById("modeTwo").disabled = false;
            document.getElementById("modeTwo").style.opacity = 1;
            document
              .getElementById("modeTwo")
              .addEventListener("mouseover", function () {
                document.getElementById("modeTwo").style.transition = 0.5;
                document.getElementById("modeTwo").style.backgroundColor =
                  "orange";

                document.getElementById("modeTwo").style.borderRadius =
                  5 + "px";
                document.getElementById("modeTwo").style.color = "black";
                document.getElementById("modeTwo").style.width = 15 + "%";
                document.getElementById("modeTwo").style.height = 62 + "px";
                document.getElementById("modeTwo").style.cursor = "pointer";
              });

            document
              .getElementById("modeTwo")
              .addEventListener("mouseout", function () {
                document.getElementById("modeTwo").style.transition = 0.5;
                document.getElementById("modeTwo").style.backgroundColor =
                  "#0bc9c9";
                document.getElementById("modeTwo").style.borderRadius =
                  5 + "px";
                document.getElementById("modeTwo").style.color = "black";
                document.getElementById("modeTwo").style.width = 14 + "%";
                document.getElementById("modeTwo").style.height = 50 + "px";
              });
          }
        }

        //base Button Recovery
        sudo.style.transition = 0.5 + "s";
        sudo.style.borderRadius = 5 + "px";
        sudo.style.backgroundColor = "#0bc9c9";
        sudo.style.width = 14 + "%";
        sudo.style.height = 50 + "px";
        sudo.style.cursor = "pointer";
        sudo.disabled = false;
        sudo.style.opacity = 1;
        document
          .getElementById("sudo")
          .addEventListener("mouseover", function () {
            sudo.style.transition = 0.5;
            sudo.style.backgroundColor = "orange";

            sudo.style.borderRadius = 5 + "px";
            sudo.style.color = "black";
            sudo.style.width = 15 + "%";
            sudo.style.height = 62 + "px";
            sudo.style.cursor = "pointer";
          });

        document
          .getElementById("sudo")
          .addEventListener("mouseout", function () {
            sudo.style.transition = 0.5;
            sudo.style.backgroundColor = "#0bc9c9";
            sudo.style.borderRadius = 5 + "px";
            sudo.style.color = "black";
            sudo.style.width = 14 + "%";
            sudo.style.height = 50 + "px";
          });

        mong = 0;
        document
          .getElementById("modeOne")
          .addEventListener("mouseover", function () {
            document.getElementById("modeOne").style.transition = 0.5;
            document.getElementById("modeOne").style.backgroundColor = "orange";

            document.getElementById("modeOne").style.borderRadius = 5 + "px";
            document.getElementById("modeOne").style.color = "black";
            document.getElementById("modeOne").style.width = 15 + "%";
            document.getElementById("modeOne").style.height = 62 + "px";
            document.getElementById("modeOne").style.cursor = "pointer";
          });

        document
          .getElementById("modeOne")
          .addEventListener("mouseout", function () {
            document.getElementById("modeOne").style.transition = 0.5;
            document.getElementById("modeOne").style.backgroundColor =
              "#0bc9c9";
            document.getElementById("modeOne").style.borderRadius = 5 + "px";
            document.getElementById("modeOne").style.color = "black";
            document.getElementById("modeOne").style.width = 14 + "%";
            document.getElementById("modeOne").style.height = 50 + "px";
          });
        if (cliker_check == 0) {
          if (ping_Pong == 0) {
            document.getElementById("x").disabled = false;
            document.getElementById("y").disabled = false;

            document.getElementById("x").style.borderBottom = "1px solid black";
            document.getElementById("y").style.borderBottom = "1px solid black";
          } else if (ping_Pong != 0) {
            document.getElementById("a").disabled = false;
            document.getElementById("b").disabled = false;
            document.getElementById("x").disabled = false;
            document.getElementById("y").disabled = false;

            document.getElementById("a").style.borderBottom = "1px solid black";
            document.getElementById("b").style.borderBottom = "1px solid black";
            document.getElementById("x").style.borderBottom = "1px solid black";
            document.getElementById("y").style.borderBottom = "1px solid black";
          }
        } else if (cliker_check != 0) {
          if (ping_Pong == 0) {
            document.getElementById("y").disabled = false;
            document.getElementById("y").style.borderBottom = "1px solid black";
          } else if (ping_Pong != 0) {
            document.getElementById("b").disabled = false;
            document.getElementById("y").disabled = false;

            document.getElementById("b").style.borderBottom = "1px solid black";
            document.getElementById("y").style.borderBottom = "1px solid black";
          }
        }

        document.getElementById("realTime").innerHTML =
          "Cleaned! Progress Bar Inactive";
        elem.style.width = mong + "%";
        countTime = 10;
        i = 0;
        resertModule();
      } else {
        width++;
        mong = mong + 10;
        countTime--;
        elem.style.width = mong + "%";
        document.getElementById("realTime").innerHTML =
          countTime + " Sec To Auto-Cleaning";
      }
    }
  }
}

function nextCall() {
  Alert.render(
    'Chose Area Of Effect! <br /> <button class="valuez" id="first" onclick="swin.push(\'first\'); Alert.ok(); cliker_check++; Affect();">First Module</button> <button class="valuez" onclick="swin.push(\'second\'); Alert.ok(); cliker_check++; Affect();" id="second">Second Module</button> <button class="valuez" onclick="swin.push(\'both\'); cliker_check++; Alert.ok(); Affect()" id="both">Both Modules</button> <button class="valuez" onclick="Alert.ok(); swin.push(\'none\'); Affect()">None</button>'
  );
  if (ping_Pong == 0) {
    document.getElementById("second").disabled = true;
    document.getElementById("second").style.opacity = 0.3;
    document.getElementById("second").style.transition = 0.5;
    document.getElementById("second").style.backgroundColor = "#" + "0bc9c9";
    document.getElementById("second").style.color = "black";
    document.getElementById("second").style.width = 180 + "px";
    document.getElementById("second").style.height = 50 + "px";
    document.getElementById("second").style.cursor = "auto";

    document.getElementById("both").disabled = true;
    document.getElementById("both").style.opacity = 0.3;
    document.getElementById("both").style.transition = 0.5;
    document.getElementById("both").style.backgroundColor = "#" + "0bc9c9";
    document.getElementById("both").style.color = "black";
    document.getElementById("both").style.width = 180 + "px";
    document.getElementById("both").style.height = 50 + "px";
    document.getElementById("both").style.cursor = "auto";

    if (
      (swin.includes("base_ten") &&
        document.getElementById("melo").innerHTML == 10) ||
      (swin.includes("base_e") &&
        document.getElementById("melo").innerHTML == 2.72)
    ) {
      document.getElementById("first").disabled = true;
      document.getElementById("first").style.opacity = 0.3;
      document.getElementById("first").style.transition = 0.5;
      document.getElementById("first").style.backgroundColor = "#" + "0bc9c9";
      document.getElementById("first").style.color = "black";
      document.getElementById("first").style.width = 180 + "px";
      document.getElementById("first").style.height = 50 + "px";
      document.getElementById("first").style.cursor = "auto";
    }
  } else if (ping_Pong != 0) {
    document.getElementById("second").disabled = false;
    document.getElementById("second").style.opacity = 1;
    document.getElementById("second").style.transition = 0.5 + "s";
    document.getElementById("second").style.backgroundColor = "#" + "fb2525";
    document.getElementById("second").style.color = "white";
    document.getElementById("second").style.width = 180 + "px";
    document.getElementById("second").style.height = 50 + "px";

    document.getElementById("both").disabled = false;
    document.getElementById("both").style.opacity = 1;
    document.getElementById("both").style.transition = 0.5 + "s";
    document.getElementById("both").style.backgroundColor = "#" + "fb2525";
    document.getElementById("both").style.color = "white";
    document.getElementById("both").style.width = 180 + "px";
    document.getElementById("both").style.height = 50 + "px";

    if (
      (swin.includes("base_ten") &&
        document.getElementById("melo").innerHTML == 10) ||
      (swin.includes("base_e") &&
        document.getElementById("melo").innerHTML == 2.72)
    ) {
      document.getElementById("first").disabled = true;
      document.getElementById("first").style.opacity = 0.3;
      document.getElementById("first").style.transition = 0.5;
      document.getElementById("first").style.backgroundColor = "#0bc9c9";
      document.getElementById("first").style.color = "black";
      document.getElementById("first").style.width = 180 + "px";
      document.getElementById("first").style.height = 50 + "px";
      document.getElementById("first").style.cursor = "auto";

      document.getElementById("both").disabled = true;
      document.getElementById("both").style.opacity = 0.3;
      document.getElementById("both").style.transition = 0.5 + "s";
      document.getElementById("both").style.backgroundColor = "#" + "0bc9c9";
      document.getElementById("both").style.color = "black";
      document.getElementById("both").style.width = 180 + "px";
      document.getElementById("both").style.height = 50 + "px";
      document.getElementById("both").style.cursor = "auto";
    }
    if (
      (swin.includes("base_ten") &&
        document.getElementById("swash").innerHTML == 10) ||
      (swin.includes("base_e") &&
        document.getElementById("swash").innerHTML == 2.72)
    ) {
      document.getElementById("second").disabled = true;
      document.getElementById("second").style.opacity = 0.3;
      document.getElementById("second").style.transition = 0.5;
      document.getElementById("second").style.backgroundColor = "#0bc9c9";
      document.getElementById("second").style.color = "black";
      document.getElementById("second").style.width = 180 + "px";
      document.getElementById("second").style.height = 50 + "px";
      document.getElementById("second").style.cursor = "auto";

      document.getElementById("both").disabled = true;
      document.getElementById("both").style.opacity = 0.3;
      document.getElementById("both").style.transition = 0.5 + "s";
      document.getElementById("both").style.backgroundColor = "#" + "0bc9c9";
      document.getElementById("both").style.color = "black";
      document.getElementById("both").style.width = 180 + "px";
      document.getElementById("both").style.height = 50 + "px";
      document.getElementById("both").style.cursor = "auto";
    }
    if (
      (document.getElementById("melo").innerHTML == 10 &&
        document.getElementById("swash").innerHTML == 2.72) ||
      (document.getElementById("melo").innerHTML == 2.72 &&
        document.getElementById("swash").innerHTML == 10)
    ) {
      document.getElementById("both").disabled = false;
      document.getElementById("both").style.opacity = 1;
      document.getElementById("both").style.transition = 0.5 + "s";
      document.getElementById("both").style.backgroundColor = "#" + "fb2525";
      document.getElementById("both").style.color = "white";
      document.getElementById("both").style.width = 180 + "px";
      document.getElementById("both").style.height = 50 + "px";
    }

    document
      .getElementById("second")
      .addEventListener("mouseover", function () {
        document.getElementById("second").style.transition = 0.5 + "s";
        document.getElementById("second").style.backgroundColor = "orange";
        document.getElementById("second").style.borderRadius = 5 + "px";
        document.getElementById("second").style.color = "black";
        document.getElementById("second").style.width = 190 + "px";
        document.getElementById("second").style.height = 60 + "px";
      });

    document.getElementById("both").addEventListener("mouseover", function () {
      document.getElementById("both").style.transition = 0.5 + "s";
      document.getElementById("both").style.backgroundColor = "orange";
      document.getElementById("both").style.borderRadius = 5 + "px";
      document.getElementById("both").style.color = "black";
      document.getElementById("both").style.width = 190 + "px";
      document.getElementById("both").style.height = 60 + "px";
    });
    document.getElementById("second").addEventListener("mouseout", function () {
      document.getElementById("second").style.transition = 0.5 + "s";
      document.getElementById("second").style.backgroundColor = "#" + "fb2525";
      document.getElementById("second").style.color = "white";
      document.getElementById("second").style.width = 180 + "px";
      document.getElementById("second").style.height = 50 + "px";
    });

    document.getElementById("both").addEventListener("mouseout", function () {
      document.getElementById("both").style.transition = 0.5 + "s";
      document.getElementById("both").style.backgroundColor = "#" + "fb2525";
      document.getElementById("both").style.color = "white";
      document.getElementById("both").style.width = 180 + "px";
      document.getElementById("both").style.height = 50 + "px";
    });
  }
}

function sudic() {
  Alert.render(
    'Choose A Basic Constant! <br /> <button class="valuez" onclick="swin.push(\'base_ten\'); nextCall();"> Base 10</button>  <button class="valuez" onclick="swin.push(\'base_e\'); nextCall();"> Base e</button>'
  );
}
function love() {
  delBase.disabled = false;
  delBase.style.opacity = 1;

  document
    .getElementById("base_cleaner")
    .addEventListener("mouseover", function () {
      delBase.style.transition = 0.5 + "s";
      delBase.style.backgroundColor = "orange";
      delBase.style.borderRadius = 5 + "px";
      delBase.style.width = 15 + "%";
      delBase.style.height = 62 + "px";
    });
  document
    .getElementById("base_cleaner")
    .addEventListener("mouseout", function () {
      delBase.style.transition = 0.5 + "s";
      delBase.style.backgroundColor = "#" + "0bc9c9";
      delBase.style.width = 14 + "%";
      delBase.style.height = 50 + "px";
    });
}

function takeOut() {
  if (ping_Pong == 0) {
    if (
      document.getElementById("melo").innerHTML == 10 ||
      document.getElementById("melo").innerHTML == 2.72
    ) {
      document.getElementById("melo").innerHTML =
        " <input" +
        ' type="text"' +
        ' id="x"' +
        ' onkeyup="swift(); unCheck_calc();"' +
        ' placeholder="base"' +
        ' maxlength="3"' +
        " onmouseover=\"this.placeholder=''\"" +
        " onmouseout=\"if(this.value == ''){this.placeholder='base'}\"" +
        ' autocomplete="off"' +
        ' spellcheck="false"' +
        " />";

      ////////////////////////////////

      document.getElementById("sudo").innerHTML = "+ Const(s)";

      document
        .getElementById("base_cleaner")
        .removeEventListener("mouseover", function () {
          delBase.style.transition = 0.5 + "s";
          delBase.style.backgroundColor = "orange";
          delBase.style.borderRadius = 5 + "px";
          delBase.style.width = 15 + "%";
          delBase.style.height = 62 + "px";
        });
      document
        .getElementById("base_cleaner")
        .removeEventListener("mouseout", function () {
          delBase.style.transition = 0.5 + "s";
          delBase.style.backgroundColor = "#" + "0bc9c9";
          delBase.style.width = 14 + "%";
          delBase.style.height = 50 + "px";
        });

      delBase.style.transition = 0.5 + "s";
      delBase.style.backgroundColor = "#" + "0bc9c9";
      delBase.style.borderRadius = 5 + "px";
      delBase.style.width = 14 + "%";
      delBase.style.height = 50 + "px";
      delBase.disabled = true;
      delBase.style.opacity = 0.3;

      cliker_check = 0;
      unCheck_calc();
    }
  } else if (ping_Pong != 0) {
    if (
      (document.getElementById("melo").innerHTML == 10 ||
        document.getElementById("melo").innerHTML == 2.72) &&
      document.getElementById("swash").innerHTML != 10 &&
      document.getElementById("swash").innerHTML != 2.72
    ) {
      document.getElementById("melo").innerHTML =
        " <input" +
        ' type="text"' +
        ' id="x"' +
        ' onkeyup="swift(); unCheck_calc();"' +
        ' placeholder="base"' +
        ' maxlength="3"' +
        " onmouseover=\"this.placeholder=''\"" +
        " onmouseout=\"if(this.value == ''){this.placeholder='base'}\"" +
        ' autocomplete="off"' +
        ' spellcheck="false"' +
        " />";

      document
        .getElementById("base_cleaner")
        .removeEventListener("mouseover", function () {
          delBase.style.transition = 0.5 + "s";
          delBase.style.backgroundColor = "orange";
          delBase.style.borderRadius = 5 + "px";
          delBase.style.width = 15 + "%";
          delBase.style.height = 62 + "px";
        });
      document
        .getElementById("base_cleaner")
        .removeEventListener("mouseout", function () {
          delBase.style.transition = 0.5 + "s";
          delBase.style.backgroundColor = "#" + "0bc9c9";
          delBase.style.width = 14 + "%";
          delBase.style.height = 50 + "px";
        });

      delBase.style.transition = 0.5 + "s";
      delBase.style.backgroundColor = "#" + "0bc9c9";
      delBase.style.borderRadius = 5 + "px";
      delBase.style.width = 14 + "%";
      delBase.style.height = 50 + "px";
      delBase.disabled = true;
      delBase.style.opacity = 0.3;

      cliker_check = 0;
      unCheck_calc();
    }
    if (
      document.getElementById("melo").innerHTML != 10 &&
      document.getElementById("melo").innerHTML != 2.72 &&
      (document.getElementById("swash").innerHTML == 10 ||
        document.getElementById("swash").innerHTML == 2.72)
    ) {
      document.getElementById("swash").innerHTML =
        " <input" +
        ' type="text"' +
        ' id="x"' +
        ' onkeyup="swift(); unCheck_calc();"' +
        ' placeholder="base"' +
        ' maxlength="3"' +
        " onmouseover=\"this.placeholder=''\"" +
        " onmouseout=\"if(this.value == ''){this.placeholder='base'}\"" +
        ' autocomplete="off"' +
        ' spellcheck="false"' +
        " />";

      document
        .getElementById("base_cleaner")
        .removeEventListener("mouseover", function () {
          delBase.style.transition = 0.5 + "s";
          delBase.style.backgroundColor = "orange";
          delBase.style.borderRadius = 5 + "px";
          delBase.style.width = 15 + "%";
          delBase.style.height = 62 + "px";
        });
      document
        .getElementById("base_cleaner")
        .removeEventListener("mouseout", function () {
          delBase.style.transition = 0.5 + "s";
          delBase.style.backgroundColor = "#" + "0bc9c9";
          delBase.style.width = 14 + "%";
          delBase.style.height = 50 + "px";
        });

      delBase.style.transition = 0.5 + "s";
      delBase.style.backgroundColor = "#" + "0bc9c9";
      delBase.style.borderRadius = 5 + "px";
      delBase.style.width = 14 + "%";
      delBase.style.height = 50 + "px";
      delBase.disabled = true;
      delBase.style.opacity = 0.3;

      cliker_check = 0;
      unCheck_calc();
    }
    if (
      (document.getElementById("melo").innerHTML == 10 ||
        document.getElementById("melo").innerHTML == 2.72) &&
      (document.getElementById("swash").innerHTML == 10 ||
        document.getElementById("swash").innerHTML == 2.72)
    ) {
      Alert.render(
        'Which One To Remove? <br /> <button class="valuez" onclick="spin.push(\'first\'); Alert.ok(); Dail();">First Module</button> <button class="valuez" onclick="spin.push(\'second\'); Alert.ok(); Dail();">Second Module</button> <button class="valuez" onclick="spin.push(\'both\'); Alert.ok(); Dail();">Both Modules</button> <button class="valuez" onclick="Alert.ok(); spin.push(\'none\'); Dail();">None</button>'
      );
    }
  }
}

function Dail() {
  if (spin.includes("first")) {
    document.getElementById("melo").innerHTML =
      " <input" +
      ' type="text"' +
      ' id="x"' +
      ' onkeyup="swift(); unCheck_calc();"' +
      ' placeholder="base"' +
      ' maxlength="3"' +
      " onmouseover=\"this.placeholder=''\"" +
      " onmouseout=\"if(this.value == ''){this.placeholder='base'}\"" +
      ' autocomplete="off"' +
      ' spellcheck="false"' +
      " />";
    if (cliker_check >= 2) {
      cliker_check = 1;
    }
    spin = new Array();
    document.getElementById("sudo").innerHTML = "+ Const(s)";
  } else if (spin.includes("second")) {
    document.getElementById("swash").innerHTML =
      " <input" +
      ' type="text"' +
      ' id="a"' +
      ' onkeyup="swift(); unCheck_calc();"' +
      ' placeholder="base"' +
      ' maxlength="3"' +
      " onmouseover=\"this.placeholder=''\"" +
      " onmouseout=\"if(this.value == ''){this.placeholder='base'}\"" +
      ' autocomplete="off"' +
      ' spellcheck="false"' +
      " />";
    if ((cliker_check = 2)) {
      cliker_check = 1;
    }
    spin = new Array();
    document.getElementById("sudo").innerHTML = "+ Const(s)";
  } else if (spin.includes("both")) {
    document.getElementById("melo").innerHTML =
      " <input" +
      ' type="text"' +
      ' id="x"' +
      ' onkeyup="swift(); unCheck_calc();"' +
      ' placeholder="base"' +
      ' maxlength="3"' +
      " onmouseover=\"this.placeholder=''\"" +
      " onmouseout=\"if(this.value == ''){this.placeholder='base'}\"" +
      ' autocomplete="off"' +
      ' spellcheck="false"' +
      " />";
    document.getElementById("swash").innerHTML =
      " <input" +
      ' type="text"' +
      ' id="a"' +
      ' onkeyup="swift(); unCheck_calc();"' +
      ' placeholder="base"' +
      ' maxlength="3"' +
      " onmouseover=\"this.placeholder=''\"" +
      " onmouseout=\"if(this.value == ''){this.placeholder='base'}\"" +
      ' autocomplete="off"' +
      ' spellcheck="false"' +
      " />";
    document
      .getElementById("base_cleaner")
      .removeEventListener("mouseover", function () {
        delBase.style.transition = 0.5 + "s";
        delBase.style.backgroundColor = "orange";
        delBase.style.borderRadius = 5 + "px";
        delBase.style.width = 15 + "%";
        delBase.style.height = 62 + "px";
      });
    document
      .getElementById("base_cleaner")
      .removeEventListener("mouseout", function () {
        delBase.style.transition = 0.5 + "s";
        delBase.style.backgroundColor = "#" + "0bc9c9";
        delBase.style.width = 14 + "%";
        delBase.style.height = 50 + "px";
      });

    delBase.style.transition = 0.5 + "s";
    delBase.style.backgroundColor = "#" + "0bc9c9";
    delBase.style.borderRadius = 5 + "px";
    delBase.style.width = 14 + "%";
    delBase.style.height = 50 + "px";
    delBase.disabled = true;
    delBase.style.opacity = 0.3;
    cliker_check = 0;

    document.getElementById("sudo").innerHTML = "+ Const(s)";
    unCheck_calc();
    spin = new Array();
  } else if (spin.includes("none")) {
    spin = new Array();
  }
}

function Affect() {
  if (swin.includes("base_ten") && swin.includes("first")) {
    document.getElementById("melo").innerHTML = 10;
    swin = new Array();
    love();
    if (ping_Pong == 0) {
      document.getElementById("sudo").innerHTML = "^ Const(s)";
    }
  } else if (swin.includes("base_ten") && swin.includes("second")) {
    document.getElementById("swash").innerHTML = 10;
    swin = new Array();
    love();
  } else if (swin.includes("base_ten") && swin.includes("both")) {
    document.getElementById("melo").innerHTML = 10;
    document.getElementById("swash").innerHTML = 10;
    swin = new Array();
    love();
    document.getElementById("sudo").innerHTML = "^ Const(s)";
  } else if (swin.includes("base_ten") && swin.includes("none")) {
    swin = new Array();
  } else if (swin.includes("base_e") && swin.includes("first")) {
    document.getElementById("melo").innerHTML = 2.72;
    swin = new Array();
    love();
    if (ping_Pong == 0) {
      document.getElementById("sudo").innerHTML = "^ Const(s)";
    }
  } else if (swin.includes("base_e") && swin.includes("second")) {
    document.getElementById("swash").innerHTML = 2.72;
    swin = new Array();
    love();
  } else if (swin.includes("base_e") && swin.includes("both")) {
    document.getElementById("melo").innerHTML = 2.72;
    document.getElementById("swash").innerHTML = 2.72;
    swin = new Array();
    love();
    document.getElementById("sudo").innerHTML = "^ Const(s)";
  } else if (swin.includes("base_e") && swin.includes("none")) {
    swin = new Array();
  }
  if (ping_Pong != 0) {
    if (
      (document.getElementById("melo").innerHTML == 10 ||
        document.getElementById("melo").innerHTML == 2.72) &&
      (document.getElementById("swash").innerHTML == 10 ||
        document.getElementById("swash").innerHTML == 2.72)
    ) {
      document.getElementById("sudo").innerHTML = "^ Const(s)";
    }
  }
}

function checkForModeTwo() {
  if (ping_Pong != 0) {
    insc.style.transition = 0.5 + "s";
    insc.style.borderRadius = 5 + "px";
    insc.style.backgroundColor = "#0bc9c9";
    insc.style.width = 14 + "%";
    insc.style.height = 50 + "px";
    insc.style.cursor = "auto";
    insc.disabled = true;
    insc.style.opacity = 0.3;
  }
}

function checkForBaseConst() {
  sudo.style.transition = 0.5 + "s";
  sudo.style.borderRadius = 5 + "px";
  sudo.style.backgroundColor = "#0bc9c9";
  sudo.style.width = 14 + "%";
  sudo.style.height = 50 + "px";
  sudo.style.cursor = "auto";
  sudo.disabled = true;
  sudo.style.opacity = 0.3;
}

function kill() {
  if (cliker_check == 0) {
    if (ping_Pong == 0) {
      document.getElementById("x").disabled = true;
      document.getElementById("y").disabled = true;

      document.getElementById("x").style.borderBottom = "2px solid orangered";
      document.getElementById("y").style.borderBottom = "2px solid orangered";
    } else if (ping_Pong != 0) {
      document.getElementById("a").disabled = true;
      document.getElementById("b").disabled = true;
      document.getElementById("x").disabled = true;
      document.getElementById("y").disabled = true;

      document.getElementById("a").style.borderBottom = "2px solid orangered";
      document.getElementById("b").style.borderBottom = "2px solid orangered";
      document.getElementById("x").style.borderBottom = "2px solid orangered";
      document.getElementById("y").style.borderBottom = "2px solid orangered";
    }
  } else if (cliker_check != 0) {
    if (ping_Pong == 0) {
      document.getElementById("y").disabled = true;
      document.getElementById("y").style.borderBottom = "2px solid orangered";
    } else if (ping_Pong != 0) {
      if (
        (document.getElementById("melo").innerHTML == 10 ||
          document.getElementById("melo").innerHTML == 2.72) &&
        document.getElementById("swash").innerHTML != 10 &&
        document.getElementById("swash").innerHTML != 2.72
      ) {
        document.getElementById("a").disabled = true;
        document.getElementById("a").style.borderBottom = "2px solid orangered";
      }

      if (
        document.getElementById("melo").innerHTML != 10 &&
        document.getElementById("melo").innerHTML != 2.72 &&
        (document.getElementById("swash").innerHTML == 10 ||
          document.getElementById("swash").innerHTML == 2.72)
      ) {
        document.getElementById("x").disabled = true;
        document.getElementById("x").style.borderBottom = "2px solid orangered";
      }

      document.getElementById("b").disabled = true;
      document.getElementById("y").disabled = true;

      document.getElementById("b").style.borderBottom = "2px solid orangered";
      document.getElementById("y").style.borderBottom = "2px solid orangered";
    }
  }
}

function destroyer101() {
  document
    .getElementById("base_cleaner")
    .removeEventListener("mouseover", function () {
      delBase.style.transition = 0.5 + "s";
      delBase.style.backgroundColor = "orange";
      delBase.style.borderRadius = 5 + "px";
      delBase.style.width = 15 + "%";
      delBase.style.height = 62 + "px";
    });
  document
    .getElementById("base_cleaner")
    .removeEventListener("mouseout", function () {
      delBase.style.transition = 0.5 + "s";
      delBase.style.backgroundColor = "#" + "0bc9c9";
      delBase.style.width = 14 + "%";
      delBase.style.height = 50 + "px";
    });

  delBase.style.transition = 0.5 + "s";
  delBase.style.backgroundColor = "#" + "0bc9c9";
  delBase.style.borderRadius = 5 + "px";
  delBase.style.width = 14 + "%";
  delBase.style.height = 50 + "px";
  delBase.disabled = true;
  delBase.style.opacity = 0.3;
}

// Intro To The Calculation Codes
/////////////////////////////Math Starts Here/////////////////////////////
document.getElementById("calc").addEventListener("click", function () {
  if (cliker_check == 0) {
    var x = document.getElementById("x");
    var y = document.getElementById("y");

    if (ping_Pong == 0) {
      if (!x.value.match(regex) || !y.value.match(regex)) {
        takeInfo.innerHTML =
          "<br/><img src='icons\\wait.png' class='imgOne' />" +
          "  " +
          "Sorry! <br/>Number Inputs Required Only!";

        document.getElementById("calc").disabled = true;
        document.getElementById("calc").style.opacity = 0.3;
        calcId.style.transition = 0.5;
        calcId.style.backgroundColor = "#" + "0bc9c9";
        calcId.style.color = "black";
        calcId.style.width = 13 + "%";
        calcId.style.height = 50 + "px";
        calcId.style.cursor = "auto";
        swift();
        kill();
        modeOne();
        checkForBaseConst();
        move();
      } else if (x.value.match(regex) && y.value.match(regex)) {
        function compute1() {
          // changing the user input from "string integer" type to "real interger"!
          var xMore = parseInt(x.value, 10);
          var yMore = parseInt(y.value, 10);

          var ans1 = Math.log(yMore) / Math.log(xMore);
          //
          final = Math.round((ans1 + Number.EPSILON) * 100) / 100;

          resertModule();
          checkForBaseConst();

          document.getElementById("colapa").style.display = "block";
          takeInfo.innerHTML = "<br /> Calculating...!!! :)";
          kill();
          modeOne();
          setTimeout(function () {
            document.getElementById("colapa").style.display = "none";
            takeInfo.innerHTML = "";
            model.innerHTML = final;
            udoCopyButton();
            move();
            swift();
          }, 5000);
        }
        compute1();
      }
    } else if (ping_Pong != 0) {
      var a = document.getElementById("a");
      var b = document.getElementById("b");
      var oneType = document.getElementById("oneType");

      if (x.value != "" && y.value != "" && a.value != "" && b.value != "") {
        if (
          !x.value.match(regex) ||
          !y.value.match(regex) ||
          !a.value.match(regex) ||
          !b.value.match(regex)
        ) {
          takeInfo.innerHTML =
            "<br/><img src='icons\\wait.png' class='imgOne' />" +
            "  " +
            "Sorry! <br/>Number Inputs Required Only!";

          document.getElementById("calc").disabled = true;
          document.getElementById("calc").style.opacity = 0.3;
          calcId.style.transition = 0.5;
          calcId.style.backgroundColor = "#" + "0bc9c9";
          calcId.style.color = "black";
          calcId.style.width = 13 + "%";
          calcId.style.height = 50 + "px";
          calcId.style.cursor = "auto";
          kill();
          move();
          modeOne();
          checkForModeTwo();
          checkForBaseConst();
        } else if (
          x.value.match(regex) &&
          y.value.match(regex) &&
          a.value.match(regex) &&
          b.value.match(regex)
        ) {
          if (oneType.innerHTML == "+") {
            function compute1() {
              // changing the user input from "string integer" type to real interger!
              var xMore = parseInt(x.value, 10);
              var yMore = parseInt(y.value, 10);
              var aMore = parseInt(a.value, 10);
              var bMore = parseInt(b.value, 10);

              var ans1 = Math.log(yMore) / Math.log(xMore);
              var ans2 = Math.log(bMore) / Math.log(aMore);

              var total = ans1 + ans2;

              final = Math.round((total + Number.EPSILON) * 100) / 100;

              resertModule();
              checkForModeTwo();
              checkForBaseConst();
              document.getElementById("colapa").style.display = "block";
              takeInfo.innerHTML = " <br /> Calculating...!!! :)";
              kill();
              modeOne();
              setTimeout(function () {
                document.getElementById("colapa").style.display = "none";
                takeInfo.innerHTML = "";
                model.innerHTML = final;
                udoCopyButton();
                move();
                swift();
              }, 5000);
            }
            compute1();
          } else if (oneType.innerHTML == "-") {
            function compute1() {
              // changing the user input from "string integer" type to real interger!
              var xMore = parseInt(x.value, 10);
              var yMore = parseInt(y.value, 10);
              var aMore = parseInt(a.value, 10);
              var bMore = parseInt(b.value, 10);

              var ans1 = Math.log(yMore) / Math.log(xMore);
              var ans2 = Math.log(bMore) / Math.log(aMore);

              var total = ans1 - ans2;
              final = Math.round((total + Number.EPSILON) * 100) / 100;

              resertModule();
              checkForModeTwo();
              checkForBaseConst();
              document.getElementById("colapa").style.display = "block";
              takeInfo.innerHTML = " <br /> Calculating...!!! :)";
              kill();
              modeOne();
              setTimeout(function () {
                document.getElementById("colapa").style.display = "none";
                takeInfo.innerHTML = "";
                model.innerHTML = final;
                udoCopyButton();
                move();
                swift();
              }, 5000);
            }
            compute1();
          } else if (oneType.innerHTML == "*") {
            function compute1() {
              // changing the user input from "string integer" type to real interger!
              var xMore = parseInt(x.value, 10);
              var yMore = parseInt(y.value, 10);
              var aMore = parseInt(a.value, 10);
              var bMore = parseInt(b.value, 10);

              var ans1 = Math.log(yMore) / Math.log(xMore);
              var ans2 = Math.log(bMore) / Math.log(aMore);

              var total = ans1 * ans2;
              final = Math.round((total + Number.EPSILON) * 100) / 100;

              resertModule();
              checkForModeTwo();
              checkForBaseConst();
              document.getElementById("colapa").style.display = "block";
              takeInfo.innerHTML = " <br /> Calculating...!!! :)";
              kill();
              modeOne();
              setTimeout(function () {
                document.getElementById("colapa").style.display = "none";
                takeInfo.innerHTML = "";
                model.innerHTML = final;
                udoCopyButton();
                move();
                swift();
              }, 5000);
            }
            compute1();
          } else if (oneType.innerHTML == "/") {
            function compute1() {
              // changing the user input from "string integer" type to real interger!
              var xMore = parseInt(x.value, 10);
              var yMore = parseInt(y.value, 10);
              var aMore = parseInt(a.value, 10);
              var bMore = parseInt(b.value, 10);

              var ans1 = Math.log(yMore) / Math.log(xMore);
              var ans2 = Math.log(bMore) / Math.log(aMore);

              var total = ans1 / ans2;
              final = Math.round((total + Number.EPSILON) * 100) / 100;

              resertModule();
              checkForModeTwo();
              checkForBaseConst();
              document.getElementById("colapa").style.display = "block";
              takeInfo.innerHTML = " <br /> Calculating...!!! :)";
              kill();
              modeOne();
              setTimeout(function () {
                document.getElementById("colapa").style.display = "none";
                takeInfo.innerHTML = "";
                model.innerHTML = final;
                udoCopyButton();
                move();
                swift();
              }, 5000);
            }
            compute1();
          }
        }
      }
    }
  } else if (cliker_check != 0) {
    var x = document.getElementById("melo");
    var y = document.getElementById("y");

    if (ping_Pong == 0) {
      if (!y.value.match(regex)) {
        takeInfo.innerHTML =
          "<br/><img src='icons\\wait.png' class='imgOne' />" +
          "  " +
          "Sorry! <br/>Number Inputs Required Only!";

        document.getElementById("calc").disabled = true;
        document.getElementById("calc").style.opacity = 0.3;
        calcId.style.transition = 0.5;
        calcId.style.backgroundColor = "#" + "0bc9c9";
        calcId.style.color = "black";
        calcId.style.width = 13 + "%";
        calcId.style.height = 50 + "px";
        calcId.style.cursor = "auto";

        destroyer101();
        kill();
        move();
        modeOne();
        checkForBaseConst();
      } else if (y.value.match(regex)) {
        function compute1() {
          // changing the user input from "string integer" type to real interger!
          var yMore = parseInt(y.value, 10);

          var ans1 = Math.log(yMore) / Math.log(x.innerText);
          //
          final = Math.round((ans1 + Number.EPSILON) * 100) / 100;

          document.getElementById("colapa").style.display = "block";
          takeInfo.innerHTML = "<br /> Calculating...!!! :)";

          calorado = 0;
          destroyer101();
          resertModule();
          checkForModeTwo();
          checkForBaseConst();
          document.getElementById("colapa").style.display = "block";
          takeInfo.innerHTML = "<br /> Calculating...!!! :)";
          kill();
          modeOne();
          setTimeout(function () {
            document.getElementById("colapa").style.display = "none";
            takeInfo.innerHTML = "";
            model.innerHTML = final;
            udoCopyButton();
            move();
            swift();
          }, 5000);
        }
        compute1();
      }
    } else if (ping_Pong != 0) {
      if (
        document.getElementById("melo").innerHTML != 10 &&
        document.getElementById("melo").innerHTML != 2.72
      ) {
        var x = document.getElementById("x").value;
      } else if (
        document.getElementById("melo").innerHTML == 10 ||
        document.getElementById("melo").innerHTML == 2.72
      ) {
        var x = document.getElementById("melo").innerHTML;
      }

      if (
        document.getElementById("swash").innerHTML != 10 &&
        document.getElementById("swash").innerHTML != 2.72
      ) {
        var a = document.getElementById("a").value;
      } else if (
        document.getElementById("swash").innerHTML == 10 ||
        document.getElementById("swash").innerHTML == 2.72
      ) {
        var a = document.getElementById("swash").innerHTML;
      }

      var b = document.getElementById("b");
      var oneType = document.getElementById("oneType");

      if (x != "" && y.value != "" && a != "" && b.value != "") {
        if (
          !x.match(regex) ||
          !y.value.match(regex) ||
          !a.match(regex) ||
          !b.value.match(regex)
        ) {
          takeInfo.innerHTML =
            "<br/><img src='icons\\wait.png' class='imgOne' />" +
            "  " +
            "Sorry! <br/>Number Inputs Required Only!";

          document.getElementById("calc").disabled = true;
          document.getElementById("calc").style.opacity = 0.3;
          calcId.style.transition = 0.5;
          calcId.style.backgroundColor = "#" + "0bc9c9";
          calcId.style.color = "black";
          calcId.style.width = 13 + "%";
          calcId.style.height = 50 + "px";
          calcId.style.cursor = "auto";

          destroyer101();
          kill();
          move();
          modeOne();
          checkForModeTwo();
          checkForBaseConst();
        } else if (
          x.match(regex) &&
          y.value.match(regex) &&
          a.match(regex) &&
          b.value.match(regex)
        ) {
          if (oneType.innerHTML == "+") {
            function compute1() {
              // changing the user input from "string integer" type to real interger!
              var xMore = parseInt(x, 10);
              var yMore = parseInt(y.value, 10);
              var aMore = parseInt(a, 10);
              var bMore = parseInt(b.value, 10);

              var ans1 = Math.log(yMore) / Math.log(xMore);
              var ans2 = Math.log(bMore) / Math.log(aMore);

              var total = ans1 + ans2;

              final = Math.round((total + Number.EPSILON) * 100) / 100;

              document.getElementById("colapa").style.display = "block";
              takeInfo.innerHTML = "<br /> Calculating...!!! :)";

              calorado = 0;
              destroyer101();
              resertModule();
              checkForModeTwo();
              checkForBaseConst();
              kill();
              modeOne();
              setTimeout(function () {
                document.getElementById("colapa").style.display = "none";
                takeInfo.innerHTML = "";
                model.innerHTML = final;
                udoCopyButton();
                move();
                swift();
              }, 5000);
            }
            compute1();
          } else if (oneType.innerHTML == "-") {
            function compute1() {
              // changing the user input from "string integer" type to real interger!
              var xMore = parseInt(x, 10);
              var yMore = parseInt(y.value, 10);
              var aMore = parseInt(a, 10);
              var bMore = parseInt(b.value, 10);

              var ans1 = Math.log(yMore) / Math.log(xMore);
              var ans2 = Math.log(bMore) / Math.log(aMore);

              var total = ans1 - ans2;
              final = Math.round((total + Number.EPSILON) * 100) / 100;

              calorado = 0;
              destroyer101();
              resertModule();
              checkForModeTwo();
              checkForBaseConst();
              kill();
              modeOne();
              document.getElementById("colapa").style.display = "block";
              takeInfo.innerHTML = "<br /> Calculating...!!! :)";
              setTimeout(function () {
                document.getElementById("colapa").style.display = "none";
                takeInfo.innerHTML = "";
                model.innerHTML = final;
                udoCopyButton();
                move();
                swift();
              }, 5000);
            }
            compute1();
          } else if (oneType.innerHTML == "*") {
            function compute1() {
              // changing the user input from "string integer" type to real interger!
              var xMore = parseInt(x, 10);
              var yMore = parseInt(y.value, 10);
              var aMore = parseInt(a, 10);
              var bMore = parseInt(b.value, 10);

              var ans1 = Math.log(yMore) / Math.log(xMore);
              var ans2 = Math.log(bMore) / Math.log(aMore);

              var total = ans1 * ans2;
              final = Math.round((total + Number.EPSILON) * 100) / 100;

              document.getElementById("colapa").style.display = "block";
              takeInfo.innerHTML = "<br /> Calculating...!!! :)";

              calorado = 0;
              destroyer101();
              resertModule();
              checkForModeTwo();
              checkForBaseConst();
              kill();
              modeOne();
              setTimeout(function () {
                document.getElementById("colapa").style.display = "none";
                takeInfo.innerHTML = "";
                model.innerHTML = final;
                udoCopyButton();
                move();
                swift();
              }, 5000);
            }
            compute1();
          } else if (oneType.innerHTML == "/") {
            function compute1() {
              // changing the user input from "string integer" type to real interger!
              var xMore = parseInt(x, 10);
              var yMore = parseInt(y.value, 10);
              var aMore = parseInt(a, 10);
              var bMore = parseInt(b.value, 10);

              var ans1 = Math.log(yMore) / Math.log(xMore);
              var ans2 = Math.log(bMore) / Math.log(aMore);

              var total = ans1 / ans2;
              final = Math.round((total + Number.EPSILON) * 100) / 100;

              document.getElementById("colapa").style.display = "block";
              takeInfo.innerHTML = "<br /> Calculating...!!! :)";

              calorado = 0;
              destroyer101();
              resertModule();
              checkForModeTwo();
              checkForBaseConst();
              kill();
              modeOne();
              setTimeout(function () {
                document.getElementById("colapa").style.display = "none";
                takeInfo.innerHTML = "";
                model.innerHTML = final;
                udoCopyButton();
                move();
                swift();
              }, 5000);
            }
            compute1();
          }
        }
      }
    }
  }
});

var taken_Over;

function CustomAlert() {
  this.render = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
    dialogbox.style.top = "150px";
    dialogbox.style.display = "block";
    document.getElementById("dialogboxhead").innerHTML =
      "Notification Message! <span id='piko' style='float:right; cursor: pointer;' onclick='Alert.ok()'>x</span>";

    document.getElementById("dialogboxbody").innerHTML = dialog;

    document.getElementById("dialogboxfoot").innerHTML =
      '<span id="me">This app is made by Patrick Paul!</span>';

    if (dialog.length == 476) {
      document.getElementById("dialogboxhead").innerHTML =
        "Notification Message!";
    }
  };
  this.ok = function () {
    document.getElementById("dialogbox").style.display = "none";
    document.getElementById("dialogoverlay").style.display = "none";
  };
}
var Alert = new CustomAlert();

function Aman() {
  if (ping_Pong != 0) {
    insc.disabled = false;
    insc.style.opacity = 1;
    document
      .getElementById("modeTwo")
      .addEventListener("mouseover", function () {
        insc.style.transition = 0.5 + "s";
        insc.style.borderRadius = 10 + "px";
        insc.style.backgroundColor = "orange";
        insc.style.width = 15 + "%";
        insc.style.height = 62 + "px";
        insc.style.cursor = "pointer";
      });
    document
      .getElementById("modeTwo")
      .addEventListener("mouseout", function () {
        insc.style.transition = 0.5 + "s";
        insc.style.borderRadius = 5 + "px";
        insc.style.backgroundColor = "#0bc9c9";
        insc.style.width = 14 + "%";
        insc.style.height = 50 + "px";
        insc.style.cursor = "pointer";
      });
  } else if (ping_Pong == 0) {
    insc.style.transition = 0.5 + "s";
    insc.style.borderRadius = 5 + "px";
    insc.style.backgroundColor = "#0bc9c9";
    insc.style.width = 14 + "%";
    insc.style.height = 50 + "px";
    insc.style.cursor = "auto";
    insc.disabled = true;
    insc.style.opacity = 0.3;
  }
}
