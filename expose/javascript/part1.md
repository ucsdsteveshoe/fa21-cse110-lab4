### Steven Shoemaker
### CSE 110 Lab 4 - Part 1

1. values added:  20

2. final result:  20

3. values added:  20

4. ERROR! `let` defines a variable for that block/scope, not the entire function (unlike `var`). In this case, the `result` variable is scoped by the if statement on lines 3 - 11, and can't be accessed from line 13.

5. ERROR! Sort of - the error in this case is actually on line 7, not line 9. Variables declared with `const` can't be reassigned, so trying to set `result` to `num1 + num2` after declaring it to be 0 throws an error. This prevents the code from reaching line 9, though there are no errors with line 9 itself.

6. ERROR! Same as above, the code errors on line 7 before it can reach line 13. However, commenting out line 7 (so that `result` stays constant at 0) still leads to an error. This is for the same reason as question 4 - `result` is still scoped by the if statement of lines 3 - 11, and can't be accessed by line 13.