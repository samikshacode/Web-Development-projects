


function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    
    
    if (!fullName) {
        alert("Full Name is required!");
        return false;
    }

    
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    if (age < 18) {
        alert("You must be at least 18 years old!");
        return false;
    }

    
    if (!gender) {
        alert("Please select your gender!");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    
    
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contact)) {
        alert("Please enter a valid 10-digit contact number!");
        return false;
    }

    
    if (!address) {
        alert("Address is required!");
        return false;
    }

    window.alert("Form submitted successfully!");
    return true;
}
