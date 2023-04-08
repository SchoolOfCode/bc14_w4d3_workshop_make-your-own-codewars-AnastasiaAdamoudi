//👉 Write your tests below here:

import { test, expect } from "@jest/globals"; 
import { aprilVeg, aprilVegArrays } from "./main.js"; // import the function you want to test


// Tests for the string version of the kata

test("Cucumber planted on April 2", () => { // write a test description
    const vegetable = { name: `cucumber`, day: 2 }; // create a test case
    const actual = aprilVeg(vegetable); // call the function you want to test
    const expected = `The cucumber planted on April 2 needs to be moved outside on April 23.`; // create an expected result
    expect(actual).toBe(expected); // compare the actual result to the expected result
});

test("Carrot planted on April 9", () => { 
    const vegetable = { name: `carrot`, day: 9 }; 
    const actual = aprilVeg(vegetable); 
    const expected = `The carrot planted on April 9 needs to be moved outside on April 30.`; 
    expect(actual).toBe(expected); 
});

test("Aubergine planted on April 10", () => { 
    const vegetable = { name: `aubergine`, day: 10 }; 
    const actual = aprilVeg(vegetable); 
    const expected = `The aubergine planted on April 10 needs to be moved outside on May 1.`; 
    expect(actual).toBe(expected); 
});

test("Red pepper planted on April 17", () => { 
    const vegetable = { name: `red pepper`, day: 17 }; 
    const actual = aprilVeg(vegetable); 
    const expected = `The red pepper planted on April 17 needs to be moved outside on May 8.`; 
    expect(actual).toBe(expected); 
});

test("Carrot planted on April 29", () => { 
    const vegetable = { name: `carrot`, day: 29 }; 
    const actual = aprilVeg(vegetable); 
    const expected = `The carrot planted on April 29 needs to be moved outside on May 20.`; 
    expect(actual).toBe(expected); 
});

test("Courgette planted on April 30", () => { 
    const vegetable = { name: `courgette`, day: 30 }; 
    const actual = aprilVeg(vegetable); 
    const expected = `The courgette planted on April 30 needs to be moved outside on May 21.`; 
    expect(actual).toBe(expected); 
});

test("Asparangus planted on April 31", () => { 
    const vegetable = { name: `asparangus`, day: 31 }; 
    const actual = aprilVeg(vegetable); 
    const expected = `Invalid day for the month of April.`; 
    expect(actual).toBe(expected); 
});

test("Courgette planted on April 0", () => { 
    const vegetable = { name: `courgette`, day: 0 }; 
    const actual = aprilVeg(vegetable); 
    const expected = `Invalid day for the month of April.`; 
    expect(actual).toBe(expected); 
});

test("Name and day both missing", () => { 
    const vegetable = { name: ``, day: null }; 
    const actual = aprilVeg(vegetable); 
    const expected = `Empty data.`; 
    expect(actual).toBe(expected); 
});

test("Name missing", () => { 
    const vegetable = { name: ``, day: 8 }; 
    const actual = aprilVeg(vegetable); 
    const expected = `Empty data.`; 
    expect(actual).toBe(expected); 
});

test("Day missing", () => { 
    const vegetable = { name: `green pepper`, day: null }; 
    const actual = aprilVeg(vegetable); 
    const expected = `Empty data.`; 
    expect(actual).toBe(expected); 
});



// Tests for the array version of the kata

test("Carrot planted on April 9", () => {
    const vegetableArray = [ // Array with one vegetable-object
        { name: `carrot`, day: 9 } 
        ];
    const actualArray = aprilVegArrays(vegetableArray); 
    const expectedArray = [ // Array with one string with the expected output
        `The carrot planted on April 9 needs to be moved outside on April 30.`,
    ]; 
    expect(actualArray).toStrictEqual(expectedArray); 
});

test("Carrot planted on April 9, aubergine planted on April 10, red pepper planted on April 17", () => { 
    const vegetableArray = [ // Array with three vegetables-objects
        { name: `carrot`, day: 9 },
        { name: `aubergine`, day: 10 },
        { name: `red pepper`, day: 17 }
        ];
    const actualArray = aprilVegArrays(vegetableArray); 
    const expectedArray = [
        `The carrot planted on April 9 needs to be moved outside on April 30.`,
        `The aubergine planted on April 10 needs to be moved outside on May 1.`,
        `The red pepper planted on April 17 needs to be moved outside on May 8.`
    ]; 
    expect(actualArray).toStrictEqual(expectedArray); 
});

test("Asparangus planted on April 31", () => { 
    const vegetableArray = [ // Array with one vegetable-object with invalid day
        { name: `asparangus`, day: 31 }
    ]; 
    const actualArray = aprilVegArrays(vegetableArray); 
    const expectedArray = [`Invalid day for the month of April.`]; 
    expect(actualArray).toStrictEqual(expectedArray); 
});

test("Asparangus planted on April 31, name of vegetable missing, courgette planted on April 0, courgette planted on April 30, plantind day missing", () => { 
    const vegetableArray = [ // Array with five vegetable-objects with invalid data
        { name: `asparangus`, day: 31 },
        { name: ``, day: 8 },
        { name: `courgette`, day: 0 },
        { name: `courgette`, day: 30 },
        { name: `green pepper`, day: null }
    ]; 
    const actualArray = aprilVegArrays(vegetableArray); 
    const expectedArray = [  // Array with five strings with the expected output
        `Invalid day for the month of April.`,
        `Empty data.`,
        `Invalid day for the month of April.`,
        `The courgette planted on April 30 needs to be moved outside on May 21.`,
        `Empty data.`
    ]; 
    expect(actualArray).toStrictEqual(expectedArray); 
});

test("Cucumber planted on April 2, carrot planted on April 29, name and day both missing", () => { 
    const vegetableArray = [ // Array with three vegetable-objects with invalid data
        { name: `cucumber`, day: 2 },
        { name: `carrot`, day: 29 },
        { name: ``, day: null }
    ]; 
    const actualArray = aprilVegArrays(vegetableArray); 
    const expectedArray = [
        `The cucumber planted on April 2 needs to be moved outside on April 23.`,
        `The carrot planted on April 29 needs to be moved outside on May 20.`,
        `Empty data.`
    ]; 
    expect(actualArray).toStrictEqual(expectedArray); 
});