[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

**Solution**

The **best-case** scenario is when the array is already sorted. In this case, the function will only generate one permutation, and the check function will return true in the first iteration. Therefore, the best-case input would be an already sorted array in ascending order.  The best case scenario would yield a runtime complexity of $\Theta(n)$ as the check function would still need to iterate $n$ times.

The **worst-case** scenario is when the array is given in a descending order. This would require $n!$ iterations where for each of one we must iterate another $n$ times in the check function. This would yeid a total runtime complexity of $\Theta(n \times n!)$.