### Steven Shoemaker
### CSE 110 Lab 4 - Part 2

1. At line 12, the console will output `3`. This line specifies that the index for the above for loop will be printed - the for loop ran a total of 3 times, incrementing the i varaible at the end of it's scope 3 total times (0 incremented 3 times = 3). The i varaible was declared with the `var` keyword, so it is still accessible from line 12 because its scope is the wrapping function (lines 2 to 17).

2. At line 13, the console will output `150`. This line specifies that the value of `discountedPrice` calculated in the above for loop will be printed. The value is recalculated for each run of the for loop, meaning the most recent run will contain the current value. On this run, the value of i will be 2, meaning the last index of the prices arguement (300) will be used in the equation. Therefore `discountedPrice` at line 13 should = 300 * (1 - 0.5) = 150. The `discountedPrice` varaible was declared with the `var` keyword, so it is still accessible from line 12 because its scope is the wrapping function (lines 2 to 17).

3. At line 14, the console will output `150`. This line specifies that the value of `finalPrice` calculated in the above for loop will be printed. The value is recalculated for each run of the for loop, meaning the most recent run will contain the current value. As established in the above question, the value of discountedPrice is 150. Therefore `finalPrice` at line 14 should = Math.round(15000) / 100 = 150. (Note: Math.round just rounds to the nearest integer, and 15000 is already an integer). The `discountedPrice` varaible was declared with the `var` keyword, so it is still accessible from line 14 because its scope is the wrapping function (lines 2 to 17).

4. The function will return an array of values, in this case `[50, 100, 150]`. Building off of the processes I explained above, this function takes in an array of numbers and a discount value, applies the discount to each number, rounds away the 3rd decimal place of each value (presumably to remove anything less than one cent), and then returns an array of the discounted values. In our case, a 0.5 (or 50%) discount applied to input `[100, 200, 300]` is the output array `[50, 100, 150]`

5. ERROR! Line 12 is attempting to access a variable that does not exist within it's scope (the wrapping function on lines 2 to 17). In this case, it's trying to access the `i` varaible declared on line 6. The special syntax of for loops essentially considers all values declared within the following parentheses to be part of the scope of the for loop, not outside of the for loops. Varaibles declared with the `let` keyword are defined only in their respective block/scope, meaning that i does not exist outside of the for loop on lines 6 - 10. Therefore, it cannot be accessed on line 12.

6. ERROR! `let` defines a variable for that block/scope, not the entire function (unlike `var`). In this case, the `discountedPrice` variable is scoped by the for loop on lines 6 - 10 (as it is declared on line 7), and can't be accessed from line 13.

7. At line 14, the console will output `150`. This line specifies that the value of `finalPrice` calculated in the above for loop will be printed. The value is recalculated for each run of the for loop, meaning the most recent run will contain the current value. As established in the above question, the value of discountedPrice is 150. Therefore `finalPrice` at line 14 should = Math.round(15000) / 100 = 150. (Note: Math.round just rounds to the nearest integer, and 15000 is already an integer). The `discountedPrice` varaible was declared with the `let` keyword, so it is still accessible from line 14 because its scope is the wrapping function (lines 2 to 17). While the varaible was SET within the scope of the for loop, this does not prevent it from being accessed by the scope it was declared in.

8. The function will return an array of values, in this case `[50, 100, 150]`. Building off of the processes I explained in questions 1 to 3, this function takes in an array of numbers and a discount value, applies the discount to each number, rounds away the 3rd decimal place of each value (presumably to remove anything less than one cent), and then returns an array of the discounted values. In our case, a 0.5 (or 50%) discount applied to input `[100, 200, 300]` is the output array `[50, 100, 150]`. While the index used to loop through values and the calculation of their final price (variables `i` and `finalPrice`) are not accessible by the entire function and it's return statement, the varaible used to store their final price IS (as it's declared in the scope of the entire function). Therefore, it can safetly be returned.

9. ERROR! Line 11 is attempting to access a variable that does not exist within it's scope (the wrapping function on lines 2 to 15). In this case, it's trying to access the `i` varaible declared on line 6. The special syntax of for loops essentially considers all values declared within the following parentheses to be part of the scope of the for loop, not outside of the for loops. Varaibles declared with the `let` keyword are defined only in their respective block/scope, meaning that i does not exist outside of the for loop on lines 6 - 10. Therefore, it cannot be accessed on line 11.

10. At line 12, the console will output `3`. This line specifies that the `length` variable be printed. Line 4 defines the length variable to store the total number of values in the input `prices` array argument - a total of 3 values. The length variable is declared on line 4 using the `const` keyword, which restricts it to it's current block/scope - the function defined on lines 2 to 15. This means that this varaible is accessible from line 12.

11. The function will return an array of values, in this case `[50, 100, 150]`. Building off of the processes I explained in questions 1 to 3, this function takes in an array of numbers and a discount value, applies the discount to each number, and then returns an array of the discounted values. In our case, a 0.5 (or 50%) discount applied to input `[100, 200, 300]` is the output array `[50, 100, 150]`. While the index used to loop through values (`i`) is not accessible by the entire function and it's return statement, the varaible used to store their final price (`discounted`) IS (as it's declared in the scope of the entire function). Therefore, it can safetly be returned.

// NOTE: C specified CALLING the function, not just getting it
12.
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseLoad[0]

13.
A. ‘3’ + 2 = '32'
// 2 is converted to a String, concatenating it to the end of '3' makes the String '32'.

B. ‘3’ - 2 = 1
// '3' is converted to a Number, 3. 3 - 2 = 1, which makes the number 1.

C. 3 + null = 3
// null is converted to a Number, 0. 3 + 0 = 3, which makes the number 3.

D. ‘3’ + null = '3null'
// null is converted to a String, concatenating it to the end of '3' makes the String '3null'.

E. true + 3 = 4
// true is converted to a Number, 1. 1 + 3 = 4, which makes the number 4.

F. false + null = 0
// False and null are both converted to Numbers - both convert directly to zero. 0 + 0 = 0, which maakes the number 0.

G. '3' + undefined = '3undefined'
// undefined is converted to a String, concatenating it to the end of '3' makes the String '3undefined'.

H. '3' - undefined = NaN
// '3' and undefined are both converted to Numbers. '3' converts to 3, and undefined converts to NaN. Any operations done with NaN continue to output NaN, so 3 - NaN outputs NaN.

14.
A. ‘2’ > 1 >= true
// '2' is converted to a Number, 2. 2 is greater than 1, so the statement is true.

B. ‘2’ < ‘12’ => false
// Strings are compared in lexicographical order. The ASCII value of the '1' in '12' is  less than the ASCII value of the '2' in '2'. Therefore '2' should be greater, and the statement exaluates to false.

C. 2 == ‘2’ => true
// The non-strict equality operator allows '2' to convert to a Number, 2. 2 is equal to itself, so the statement is true.

D. 2 === ‘2’ => false
// The strict equality operator checks type equality first. The first value (2) is a Number and the second ('2') is a String. These types are not the same, therefore the operator returns false.

E. true == 2 => false
// true is converted to a Number, 1. 1 is not the same as 2, so the statement is false.

F. true === Boolean(2) => true
// In the order of operations for programming, evaluation comes first. The Boolean equivalent of a nozero number is true. The strict equality operator checks type equality first. The first value (true) is a Boolean and the second (true) is a Boolean as well. Their values (true and true) are equal as well, meaning the operator returns true.

15. The difference between the non-strict equality operator (==) and the strict equality operator (===) is that the later does not check after type coversion. Basically, the non-strict operator will attempt to convert one or both of its inputs to the same type so that they can be compared. The strict equality operator does not do this - its inputs need to be of the same value AND the same type for it to return true.

16. `.\part2-question16.js`

17. The return value will be the array `[2, 4, 6]`. The for loop in the `modifyArray` function indexes over each value in the `array` parameter and saves it to a function-scope variable (`newArr`) so it can safely return these changes. The only thing the for loop does specifically to each element in `array` is save the element's value AFTER the callback function has been run on it. Specifically, it will save each element once the element has been run through `doSomething`, which just multiplies the value by 2. Therefore, each element in the return array will be double it's original value in the input array. So, the input `[1, 2, 3]` becomes `[2, 4, 6]`.

18. `.\part2-question18.js`

19. The output is `1 4 3 2`. (Note: They are delimited by newlines rather than spaces in the acctual output)