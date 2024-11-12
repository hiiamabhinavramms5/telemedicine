// Function to log in
function login() {
    const username = document.getElementById("username").value;
    if (username) {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("dashboard-screen").style.display = "flex";
    } else {
      alert("Please enter your username.");
    }
  }
  
  // Function to start the video call
  function startVideoCall() {
    document.getElementById("dashboard-screen").style.display = "none";
    document.getElementById("video-call-screen").style.display = "flex";
  
    // Show "Connecting" message with a delay
    setTimeout(() => {
      document.getElementById("connecting-message").textContent = "We will connect you to the doctor as soon as possible.";
    }, 3000); // Delay of 3 seconds
  }
  