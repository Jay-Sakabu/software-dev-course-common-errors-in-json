/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15" //Missing comma
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson", "name" property not in quotes
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined, // Can't use undefined as a value type
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",] // trailing comma
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


//LIST OF CORRECTIONS
/*
1. Line 50: "checkInDate": "2024-05-15" //Missing comma, commas need to exist after one entry preceding another, solution added a comma
2. Line 54:  name: "Alice Johnson", "name" property not in quotes, all properties need to have quotes around them, added double quotes
3. Line 60:       "age": undefined, // Can't use undefined as a value type, undefined is not a valid JSON data type, changed value to null
4. Line 67:     "amenities": ["WiFi", "Breakfast", "Parking",] // trailing comma, trailing commas aren't allowed in JSON, removed comma


*/




// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
  I  used VSCode and https://jsonlint.com/ to let me know what errors were happening and then corrected them as I found the errors.

2️⃣ How did you confirm that your corrected JSON file was valid?
  https://jsonlint.com/ and seeing there were no errors in vscode

3️⃣ Which errors were the most difficult to spot? Why?
  None of the errors were too hard to spot, some comma stuff though was a little tricky

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   Remembering how JSON works and using syntax higlighting to ensure that it's correct as I go
*/
