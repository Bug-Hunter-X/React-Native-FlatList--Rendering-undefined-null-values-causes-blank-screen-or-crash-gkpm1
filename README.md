# React Native FlatList: Handling Undefined/Null Values

This repository demonstrates a common issue encountered when using the FlatList component in React Native: rendering undefined or null values within the data array.  The issue often manifests as a blank screen or a crash without clear error messages.

The example shows how improper data handling can lead to the error, and the solution demonstrates a robust way to handle potential null or undefined values in your data before rendering them in the FlatList.

## Bug
The `bug.js` file shows how this bug can happen.  We will try to display items from an array where some items may be null or undefined which is causing the rendering to fail.

## Solution
The `bugSolution.js` file demonstrates a solution that gracefully handles these scenarios by filtering out null and undefined values from the data before rendering them in the FlatList, providing a more robust and reliable user experience.
