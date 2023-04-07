//👉 Write your tests below here:

import { test, expect } from "@jest/globals"; 
import { aprilVeg } from "./main.js"; // import the function you want to test

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