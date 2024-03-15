function storeData(v) {
  var txtInput = document.querySelector("#txtinput");
  var oldValue = txtInput.value;
  var t = oldValue.length;
  var lastChr = oldValue[t - 1];

  let oprSym = ["+", "-", "*", "/", "."];
  if (oprSym.includes(v)) {
    if (oprSym.includes(lastChr)) {
      var removeLast = oldValue.slice(0, -1);
      txtInput.value = removeLast + v;
    } else {
      txtInput.value = oldValue + v;
    }
  } else {
    txtInput.value = oldValue + v;
  }
}

function calData() {
  var txtInput = document.querySelector("#txtinput");
  var oldValue = eval(txtInput.value);
  txtInput.value = oldValue;
}

function clsData() {
  document.querySelector("#txtinput").value = "";
}
