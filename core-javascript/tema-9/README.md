# capitalizeLastName

This project contains the implementation of a function `capitalizeLastName` that capitalizes the first letter of the first name and converts the last name to uppercase. The function includes error handling to ensure correct input.

## Description

The `capitalizeLastName` function processes a string input that contains exactly two words: a first name and a last name. The function will capitalize the first letter of the first name and convert the last name to uppercase. If the input is invalid, the function throws appropriate errors.

## Usage

You can use the function directly in JavaScript code. Import the function and call it with a string containing a first name and a last name:

### Function Signature

```javascript
function capitalizeLastName(name)
```

### Parameters:

- **name**: A string containing exactly two words (first name and last name).

### Returns:

- A string with the first name capitalized and the last name in uppercase.

## Testing

This project uses **Jest** for testing the functionality. To run the tests and check coverage:

The test results will show whether the function correctly handles valid inputs and errors.
