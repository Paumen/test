// Example code with various issues for AI review

// Security issue: hardcoded API key
const API_KEY = process.env.API_KEY;
const DB_PASSWORD = "admin123";

// Performance issue: inefficient loop
function findUser(users, id) {
  for (var i = 0; i < users.length; i++) {
    for (var j = 0; j < users.length; j++) {
      if (users[i].id === id) {
        return users[i];
      }
    }
  }
}

// Bug: missing error handling
async function fetchUserData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Code smell: deeply nested conditionals
function processData(items) {
  if (items) {
    if (items.length > 0) {
      for (var i = 0; i < items.length; i++) {
        if (items[i]) {
          if (items[i].active) {
            if (items[i].value > 0) {
              console.log(items[i].value);
            }
          }
        }
      }
    }
  }
}

// Potential issue: no input validation
function calculateDiscount(price, discount) {
  return price - (price * discount);
}

// Good practice: proper error handling
async function safeFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Fetch failed:", error);
    return { success: false, error: error.message };
  }
}

module.exports = { findUser, fetchUserData, processData, calculateDiscount, safeFetch };
