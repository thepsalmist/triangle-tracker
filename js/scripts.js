function triangleTracker() {
  var sideA = parseInt(document.querySelector("#a").value);
  var sideB = parseInt(document.querySelector("#b").value);
  var sideC = parseInt(document.querySelector("#c").value);
  var result = document.querySelector("#result");


  if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
    if (sideA == sideB && sideB == sideC) {
      result.innerHTML = "Equilateral Triangle";

    } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
      result.innerHTML = "Isosceles Triangle";

    } else {
      result.innerHTML = "Scalene Triangle";

    }
  } else {
    result.innerHTML = "Not a Triangle";
  }

}

function reset() {
  var sideA = parseInt(document.querySelector("#a").value);
  var sideB = parseInt(document.querySelector("#b").value);
  var sideC = parseInt(document.querySelector("#c").value);
  var result = document.querySelector("#result");
}




/*var sideB = getElementById("b").value;
var sideC = getElementById("c").value;
var result = getElementById("result");*/


/*if (a == b && b === c) {
    alert(Equilateral);

  } else if (a === b || b === c || a === c) {
    result.innerHTML = Isosceles;

  } else {
    result.innerHTML = Scalene;
  }


}*/