# Brief

Write a function that, when given an email subject (string) and an array of voyages (object; see example in example.js), 
returns the name of the matching voyage. The matching voyage is the single voyage where:
1. the voyage vessel name is contained in the subject AND  
2. of all the voyages that match criteria 1, this voyage has the closest date to the date in the subject

For example, given the subject "23/03/2021: EVER GIVEN stuck in Suez Canal" and the voyages array found in example.js, 
the function would print "Ever Given-2".

# Expectations

The code produced should be well documented and tested. We expect you to spend no more than two hours on this challenge.
We do not require the solution to be complete, however, if the solution is not complete, you must provide a clear 
explanation in the README.md of the status of the solution, what has been accomplished so far and what work is 
remaining. If you do not sufficiently explain your progress in the README.md then you will not be invited to the 
technical interview.

# About this repo

This repo is a very hastily thrown together node project to help get you started in producing a solution to the above 
brief. Feel free to use this repo as a starting point if you wish. The repo has been built and tested against node 
v22.13.1.

To execute the tests:

```
$ node run test
```

To execute the example.js script:
```
$ node run example
```