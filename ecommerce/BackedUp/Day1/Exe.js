const a1_calc = require('./A1_Calc');
const a2_calc = require('./A2_Calc');


console.log(a1_calc);
a1_calc.Calculator.add(1,1);
a1_calc.Calculator.sub(1,1);
a1_calc.Calculator.mult(1,1);
a1_calc.Calculator.div(1,1);

console.log(a2_calc);

a2_calc.Calculator().add(1,1);
a2_calc.Calculator().sub(1,1);
a2_calc.Calculator().mult(1,1);
a2_calc.Calculator().div(1,1);

