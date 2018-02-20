module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g,'');
  let arr = equation.split('x');

  const A = parseInt(arr[0]),
        B = parseInt(arr[1].slice(2)),
        C = parseInt(arr[2]);

  let D = Math.pow(B,2) - 4*A*C,
      X1 = (-B - Math.sqrt(D)) / (2*A),
      X2 = (-B + Math.sqrt(D)) / (2 * A);

  return [X1, X2];
}
