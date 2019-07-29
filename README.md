# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @willgwong/lotide`

**Require it:**

`const _ = require('@willgwong/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

 * 'head(arr)'			: returns index 0 of an array
 * 'tail(arr)'			: return all but index 0 of an array
 * 'middle(arr'			: returns middle element(s) of an array
 * 'assertArraysEqual'		: checks if two arrays are equal
 * 'assertEqual'		: check if two strings are equal
 * 'assertObjectEqual'		: checks if two objects are equal
 * 'countLetters'		: counts letters in a string
 * 'countOnly(arr, item)'	: counts how many times a given item appears in an array
 * 'eqObjects'			: checks if two objects are equal
 * 'findKey'			: finds the key of a given object
 * 'findKeyByValue'		: finds the key of a given object by a value
 * 'flatten'			: given nested arrays, returns all elements in 1 array
 * 'letterPositions'		: returns an index of a given character in a string
 * 'map'			: creates a new array with a given callback function
 * 'takeUntil'			: iterates through an array until callback function returns false
 * 'without'			: removes given items from an array

