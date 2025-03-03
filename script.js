var points = [ 10, 5, 25, 55, 45, 12];
document.getElementById("result").innerHTML = points;
function ascending () {
 points.sort(function (a, b) {
  return a - b;

 });
 document.getElementById("result").innerHTML = points;
}
function descending () {
points.sort(function (a, b) {
    return b - a;
}) ;
document.getElementById("result").innerHTML = points;


}