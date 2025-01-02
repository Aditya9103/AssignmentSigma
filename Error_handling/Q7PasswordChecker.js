class User {
    constructor(username, password) {
        this.username = username;
        this._password = password; // _password is used to store the actual password
    }

    // Getter for password, returns the password as asterisks
    get password() {
        return "*".repeat(this._password.length);
    }

    // Setter for password with validation checks
    set password(newPassword) {
        // Validate password: at least 8 characters, contains at least one number and one uppercase letter
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        
        if (passwordRegex.test(newPassword)) {
            this._password = newPassword; // Set the new password if valid
        } else {
            console.log("Error: Password must be at least 8 characters long, contain at least one number, and one uppercase letter.");
        }
    }
}

// Example usage
const user1 = new User("john_doe", "Password123");

// Get the password (will show asterisks)
console.log(user1.password);  // Should return "***********"

// Attempt to set a valid password
user1.password = "NewPassword123"; // Valid password, should change
console.log(user1.password); // Should return "***************"

// Attempt to set an invalid password (no uppercase)
user1.password = "short123"; // Invalid password, should show an error message

// Attempt to set another invalid password (no number)
user1.password = "PasswordABC"; // Invalid password, should show an error message
