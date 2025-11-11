
// A function that returns a Promise
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // try changing to false to test reject
      if (success) {
        resolve({ id: 1, name: "Nandani", role: "Developer" });
      } else {
        reject("Failed to fetch user data!");
      }
    }, 2000); // simulating API delay
  });
}

// Using Promise .then() and .catch()
getUserData()
  .then((data) => {
    console.log("Promise resolved:", data);
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
  });

// Using Async/Await syntax
async function showUserData() {
  try {
    const user = await getUserData();
    console.log("Async/Await result:", user);
  } catch (error) {
    console.error("Async/Await error:", error);
  }
}

showUserData();

//promise.all example
// Three promises simulating API calls
const getUser = new Promise((resolve) => {
  setTimeout(() => resolve("👩 User data loaded"), 1000);
});

const getPosts = new Promise((resolve) => {
  setTimeout(() => resolve("📝 Posts loaded"), 2000);
});

const getComments = new Promise((resolve, reject) => {
  setTimeout(() => resolve("💬 Comments loaded"), 1500);
});

// Using Promise.all to run all promises together
Promise.all([getUser, getPosts, getComments])
  .then((results) => {
    console.log("✅ All data loaded:");
    console.log(results); // array of resolved values
  })
  .catch((error) => {
    console.error("❌ One of the promises failed:", error);
  });

  //rejectTimeout example



  //resolveTimeout example