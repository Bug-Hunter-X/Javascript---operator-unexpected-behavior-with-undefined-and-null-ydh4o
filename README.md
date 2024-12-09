# Javascript + operator unexpected behavior with undefined and null
This code demonstrates unexpected behavior of the + operator in Javascript when used with undefined and null values.  The + operator will return NaN when used with undefined values and will treat null as 0.

## Bug
The bug lies in the unexpected behavior of the + operator when one of the operands is undefined or null.  When adding a number to undefined, the result is NaN.  When adding a number to null, the result is the number itself, because null is treated as 0. This inconsistency can lead to unexpected results in applications.

## Solution
The solution involves explicitly checking for undefined and null values before performing the addition operation. This ensures that the program handles these values correctly and produces consistent and predictable results.  Using the || (or) operator to handle null, undefined values helps avoid this problem, providing a clear way to handle unexpected values.
