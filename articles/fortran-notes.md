---
title: "FORTRAN Notes"
date: "NOV 14, 2024" 
description: "thank you, Backus"
category: "school"
---

numbered 1-80; columned bc based on punch cards
c in column 1 -> comment line
all code in uppercase (NELSON CARES)
- comments don't need to be !

columns 2-5: numeric labels (line number like in BASIC, used for things like **GOTO** and **format statements**)

column 6 -> continuation line; anything in this column means it's a continuation from the previous line

column 7-71/72 (nelson can never remember): code

column 72-80: used for documentation

SIX SPACES, **no tabs :(**

Nelson's ✨super cool✨template:
- parameters: static finals
	- ![[Pasted image 20241007140155.png]]
	- ^^^ YOU HAVE TO USE THE PARENTHESES
	- line 1: declare the constant/parameter
	- line 2: assign something to it omg
# **data types**
- INTEGER = `INTEGER*4`
- REAL = `REAL*4`
- CHARACTER
- COMPLEX
- LOGICAL
	- `.TRUE` or `.FALSE`
- DOUBLE PRECISION (WTF) (OR `REAL*8`)
- local variables
- function declarations: what is the return type? *cuz functions are treated as variables*
	- function name becomes variable after return
	- I think it's like this:
```FORTRAN
REAL function myfunc(bob)
	[code]
```
- common variables (??)
- data statements: for preloading variables -> prepopulate variables
- main program module (your code)
      STOP
      END PROGRAM
- subroutines
- functions
- block data


**arrays declared** same way as in BASIC
"INTEGER ARRAY how big is it"
- puh lease DONT USE THE DIMENSION STATEMENT; independent of the datatype :( ew.
BOB(5,5)
     ^  ^
     r   c

up down versus left right?
organizes down column first, row changes the fastest (go through the rows first)
- "vectorization programming"
	- actually, Nelson got paid a bunch for doing this; "he got decent at it"

**function declarations**
- don't declare ones you don't use

**block data**: loads truckloads of variables in advance -> everything's in a common
what's a common -> a way of sharing data across values??? a member variable (global ig)

***everything in FORTRAN is passed by reference***: 
```
in main:
bob = 12;
x = func(bob);

in the function:
func(bob){
	bob=13;
}

LOLOLOLOL it's changed 
```

**subroutines DO NOT RETURN A VALUE**
lowk subroutines are basically void functions
Call BOB() <- parentheses optional if no arguments, but Nelson wants them in

v. 1st thing:
- what are v1, v2

e.x.
```FORTRAN
      SUBROUTINE BOB(v1,v2)
	  REAL*8 v1, v2
C
.
. <- duplicate structure as the parameters, local variables, etc.
.
      RETURN <- only one of these. or else Nelson "will yell at you"
      END <- do not forget this.
```

**functions -> only diff between subroutine and function is that it returns something**
e.x.
```FORTRAN
      FUNCTION BOB(v1,v2)
      CHARACTER BOB <- return type
      REAL*8 v1,v2
      BOB='6'
      RETURN
      END
```
^^^^ no need to indent what's in the function

x=SALLEY <- could be a variable or a function
but if SALLEY takes no argument, put the () in or else


## HELLO WORLD:
1. copy template over
2. create subroutine
3. call subroutine from main
4. do absolutely nothing
5. PRINT statement
	1. test write
	2. format statement
		1. ridiculously powerful
		2. `WRITE(*,1000) 'BOB';`
		3. FORMAT(8A) <- A for ASCII!! (print in blocks of eight)
		4. format statements used in more than one location should be put within the STOP and END statements
		5. '$' allows you to print stuff on the same line!
		6. floating points: D (double precision value) E (print exponential format) F (single precision floating point) G
```FORTRAN
		WRITE(*,*) 'Anything'
 1000   FORMAT(A) <- use to gain control over what the output looks like
```
- first * means terminal
- second * auto format -> how do u want to format it? DONT CARE, just print it out
- ^ only for testing purposes

`READ(*, *)`  is input

## DO LOOP:

      DO label V=start,end,step
`label continue (non executing statement, just here for readability, REQUIRED TO USE)`

test for do loop is done at the top of the loop (not bottom lol) -> not guaranteed to go at least once

## while loop i guess
c start of a while loop
 500   continue
      if blah blah

**ARRAYS ARE ONE INDEXED**

## if statements
1. in line, one line statement POPULAR ones
	1. if condition execute
2. if condition THEN
3. multiple lines
4. ENDIF


# OPEN statement
the list stuff separated by commas
`UNIT=` put a number greater than 10, which are usually reserved (or you can leave out the `UNIT=`)

ACCESS -> 'SEQUENTIAL' (also default, so it's okay if you don't put it)
FORM -> 'UNFORMATTED' (also default)
STATUS -> 'NEW' (most of the times)
if you use UNKNOWN "your mileage may vary"

`OPEN(11, FILE='bob.txt', ERR=100)`
1. 11 = unit
2. file is bob.txt, since no specified status, better be created alr
3. if there's an error, jump to 100

`READ(11,*) I1,I2` <- ??
interesting construct, unique to this language
if you do
`READ(11,*)`, ignores everything!
^ convenient way to count line numbers in a file

so
`READ(11,*,END=100)`
increment a counter
`GOTO back to the READ statement`

`REWIND(11)` takes counter pointer and puts it back in the beginning <- to then read the contents

**use a parameter for this assignment -> requirement**

there's also a close statement
`CLOSE(11)`


DYNAMIC ARRAY CREATION
``
`READ(*,*) V` <- but the cursor just blinks at you so you have no idea what ur doing
so u need a user interface
make the output **meaningful**
use WRITE to put a prompt
read in bins you want for the histogram
1 is minimum -> check
10 numbers, can't have 100 bins

*magic numbers, like the max # of pound signs in a line, must be declared as parameters instead of just used*

83 bins max


**no while loop in fortran 77**


# commons
```FORTRAN
INTEGER*8 V1
REAL*8 V2
REAL*4 V3(4)
COMMON /MYVARS/ V1, V2, V3
C
```

grab everything every time you need it :()

EQUIVALENCE: same as UNION statement in C
memory address of 2 things is the same

```FORTRAN
REAL*8 R8
REAL*4 R41, R42
INTEGER*2 I(4)
CHARACTER C(8)

EQUIVALENCE(R8, R41), (R8, I), (R8, C)
```

what its useful for:
```FORTRAN
REAL A, B, C, D, .... W, X, Y, Z
REAL RV(26)
EQUIVALENCE (RV, A)
C zero RV with a do loop yay
```
