let an_array = ['s1', 's2', 's3', 's4', 's5'];
console.log(an_array);

an_array.push('s_new');
console.log(an_array);

an_array.splice(2, 1);
console.log(an_array);

let a_string = an_array.join(', ');
console.log(a_string);
