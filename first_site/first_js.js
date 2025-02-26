document.getElementById("submitBtn").addEventListener("click", function() {
    let inputText = document.getElementById("userInput").value.trim().toUpperCase();      
    if (inputText === "ECHOES") {
        window.location.href = "https://scavengerhunt3031.github.io/en-US/"; 
    } else {
        alert("Incorrect code. Try again!");
    }
});

