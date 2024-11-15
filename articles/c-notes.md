---
title: "C Notes"
date: "NOV 14, 2024" 
description: "the unsafe language."
category: "school"
---

design philosophy: C was designed to write operating systems
(UNIX was written in C, wrote C to write UNIX)
C construct looks a lot like JAVA, syntax familiar: **REMEMBER IT'S NOT JAVA THOUGH.**
- such as printf -> print routine in C that java kind of hijacked
- but java doesn't have an unsigned type (why would you do that?)

comments same as java
in java it's 'import', with C, it's✨minimal✨(most functionality is in separate libraries)
- how to access libraries?
```C
#include <stdio.h>
- has things like print
#include <stdlib.h>
```

unistd?? (unix standard)
math utilities -> math.h
which means you have to learn which ones you need :(

INCLUDES AS VERy FIRST THING

### MAIN
- you can also say 'void main'
- return value
	- 'exit' function whatever value u get there gets returned into the command line interface
	- hand to OS?? handy??

### strings in C
- NOT objects
- pretty dumb
- any collection of characters, always one byte -> always *ASCII*
- any # of characters with a null termination (last byte is 0)
	- 1-255; 0 means end of string
- you can print✨anything✨
- 'printf'

### pascal indentation.
curly brace indented with the code

***sizeof() is pretty cool***
- good for structures
- tell you if it has padding?

print new line -> '\n'

### main is the very last function.


C is not a functional programming languages
- C has operators and functions, *that's it.*
- unlike fortran, you can have stuff between stuff
- declare stuff outside functions
- yay
- no classes
- globals??!! **please.... do not use globals??!!**

file I/O is very system specific
- atcs.h file

command line stuff
- passed whatever was typed into each of the elements or smth (the argc + `*argv[]` stuff)

```C
#include <stdlib.h>
#include <stdio.h>
int main (int argc, char *argv[])
   {
   int i;

   for (i = 0; i < argc; ++i) printf("argv[%d] = %s\n", i, argv[i]);

   exit(0) 
   }
```

??


## coding standards.

### comments
- block ones need the asterix * for things

#define : substitution

- predeclare all your functions: use wherever you want

read rev8

main v. simple? calls a bunch of other stuff / no functionality in of itself

indenting (3-5 spaces); no tabs
- pascal indenting standard...

function names start in lower case
new word stads w/ a uppercase letter (camelCase omg)

java has a Noun.Verb construct
- in C, it's verb noun
- functions are verbs?!
- pass nouns for verb

`readFile(handle hFile)` ?

no spaces following parentheses
variables names can start w/ an uppercase :O
don't use l (el) or O (uppercase O) not allowed cuz confusing 

no declarations b/w fcts

ijk -> only used for indexing unless physics stuff like i = current

for/while/if statements have the space between the for/while/if and the left parentheses
`for (i = 0; i>100; ++i)`
^^ put the spaces...

# **break statement should never be used** 

# no in-line declarations

```C
void bob()
   {
   int i, j, k;
   double val;

   for (i = 0; i < N; ++i) ...
   
   }
```

so like u can't do ;(

```C
for (int i = 0; i < n; ++i)
```

functions have block comments (**PRE AND POST CONDITIONS**) unless arguments are self-explanatory or something


all functions have **one and ONLY ONE return statement, which IS THE LAST LINE**

# void functions must have a return; just a return and a semicolon

unless it's recursive :()
- only 2 then...

exit() only used in main()

# magic numbers BAD. use #define 

# cannot have warnings so use the -Wall switch :


assignments
- next week: structures + typedef
- ripping .wav apart: pcm (pulse code modulation)
- in order to take them apart, we are going to take advantage of what c can do that java cannot?

endian-ness
- low high or high low
- little endian (low byte is first)
- java would have have to swap the bytes bc java compatible so the swapbyte thing
- big endians -> text

union in C -> equivalence in FORTRAN

arrays
bit field


'unsigned' char (a byte)


# 11/12/24 notes

percent codes for printf tell you what you're printing (a lot like the FORMAT statements in FORTRAN)

%f
%g
%ud
%ul

1) to create a struct:
```C
struct vector { double x, y, z; };
```

***is this according to the codingstandards***

2) create a thing of struct vector??? you have to have the 'struct'
```C
struct vector F;
```

3) double load.
```C
struct vector { doublex; double y; double z;} E;
```

4) to get to one of these elements
```C
F.x;
```

### union
```C
union tag { char[4]; LONG lVal; short a, b;};
union tag bob;
bob.lVal = 0x01020304; // 4 bytes
```

if you want to access bob.a it's '0102'
basically union is like the EQUIVALENCE statement in FORTRAN
so they're all in the same memory address

use this to figure out highbyte lowbyte or low-high (big/small endian):

```C
bob.lVal=1
// look at bob.char[0] -> is it 0 or 1????
// 1 -> little endian
// 0 -> big endian
```

we're going to use the union w/ wav value format (uppercase RIFF)
# pointers

declare something to be a pointer by putting an asterix in front of it.

it will POINT to something

```C
int *a, b; // don't do this mix match but
           // a is a pointer to an integer, b is an integer itself
```
:*()
```C
int* a, b; // looks like declaring two pointers, but no it's the same as above
           // since C will ignore your spaces
```
^^ created problems for people in early C compiler times (note this for the paper)

how to point to something:
1. ampersand means 'give me the address of this'
2. basically a pointer

```C
a = &b;
```

if I just say
1. a, I get the pointer
2. if I say `*a`, I get the VALUE associated with the pointer
3. so if i say
```C
*a = 7;
```
	then I'm also setting b to 7

**'alias'**
- typically you don't want to do this though

DO NOT DO a = b if a is a pointer and b is an int :(

```C
int *a;
int b[100];
int c;
// variable name b is a pointer to the array tf
// so you can say b[0], b[1]...b[99]

// so you can do
a = b;
// since both are pointers

// then you can do
*(a + 0)
// who's value is a[0]
// you can also do this with b...

// you can do:
[N]b

// difference between a + b though:
a = (int *) 1234;
// but you can't do this with b. since it's an array.

```

```C
a.x
b.y

// a + b are structures

d->x
d->y

// d is a pointer to a struct
```


# 11/14/2024 - read & malloc notes
# memory allocation functions in C
malloc(), calloc(), free() and realloc()
- always meet alignment requirements?

```C
#include<memory.h>
```

malloc() -> # of bytes -> returns memory pointer
- same as 'new' in java or smth
```
ptr = (cast-type*) malloc(byte-size)
```

**IF IT FAILS... RETURNS A NULL POINTER**
- so you have to check:
```C
if (ptr)
	{
	
	}
```

last thing you do -> if you're not returning the pointer, MAKE SURE YOU GIVE THE MEMORY BACK.
```C
if (ptr)
	{
		free(ptr);
	}
```

**BUT IF YOU ARE RETURNING IT, THEN DONT GIVE IT BACK...**

**BEFORE FREEING UP SPACE, YOU HAVE TO CHECK THAT THE PTR EXISTS**

**AFTER YOU FREE A POINTER, NULL IT. ESPECIALLY IF IT'S A GLOBAL...**

#### hi, this is what we are doing this time:
*pass a file name to a function, open that file, check how long the file is, carve out memory for how much space, did that work?, read that file into the memory space, did that work?, if it didn't work -> do some housekeeping, if everything is successful, then that functions returns a non-null pointer to the higher level, typecast into WAV file structure.*

when we are done, give the memory back.

#### other stuff
calloc() -> larger blocks of stuff
```C
ptr = (cast-type*)calloc(n, element-size);
// n is the no. of elements and element-size is the size of each element
```

realloc()
- java does not have, but does do
	- one class that does this in Java: ArrayList
- reallocates the size!
- no need to typecast it lol!

```C
ptr = realloc(ptr, newSize);
// where ptr is reallocated with the new size 'newSize'
```
^^^ **HOWEVER THIS IS A BAD IDEA... BECAUSE REALLOCC DELETES IT IF IT DOESNT WORK**
so you create a new thing
```C
ptr1 = realloc(ptr, newSize);
```
- all declarations should be up top
- give back what you request...memory leak :(

# have to check EVERYTHING in I/O


2 arguments to open an alr existing one, 3 arguments to create a NEW ONE!! (NEED THAT ONE!!)
- you must have the p_mod flag S_IWRITE | S_IREAD

Do not close a file handle that is -1
