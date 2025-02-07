/* 
    ### 4. Checking if it's an Array

    **Instructions:**

    1. Create different variables, each containing either an array or a non-array value.

    2. Now use isArray to check if each variable is an array.

    3. Print a message to the console indicating whether each variable is an array or not.
*/
const name = "Parvez";
const age = 25;
const friends = ["Mokter", "Kamal", "Ratul"];
const isNameArray = Array.isArray(name);
console.log(isNameArray);
const isAgeArray = Array.isArray(age);
console.log(isAgeArray);
const isFriendsArray = Array.isArray(friends);
console.log(isFriendsArray);
