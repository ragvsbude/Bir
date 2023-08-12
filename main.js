function generateMessage() {
    const name = document.getElementById("name-input").value;
    const birthdayDate = new Date(document.getElementById("birthday-input").value);
    const today = new Date();
    
    if (name === "" || isNaN(birthdayDate.getTime())) {
      document.getElementById("message").textContent = "Please enter valid information.";
    } else {
      const age = today.getFullYear() - birthdayDate.getFullYear();
      const message = `Happy ${age}th Birthday, ${name}! 🎉🎂`;
      document.getElementById("message").textContent = message;
    }
  }