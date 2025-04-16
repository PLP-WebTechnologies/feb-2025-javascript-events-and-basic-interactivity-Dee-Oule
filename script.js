
document.getElementById("changeColorBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = 
      document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
  });

  
  document.getElementById("myForm").addEventListener("submit", (event) => {
    const username = document.getElementById("username").value.trim();
    const errorMessage = document.getElementById("errorMessage");
  
    if (username === "") {
      event.preventDefault(); // Prevent form submission
      errorMessage.textContent = "Username cannot be empty.";
    } else {
      errorMessage.textContent = ""; // Clear error message
      alert("Form submitted successfully!");
    }
  });
   
  document.getElementById("toggleContentBtn").addEventListener("click", () => {
    const content = document.getElementById("content");
    content.style.display = content.style.display === "none" ? "block" : "none";
  });
  