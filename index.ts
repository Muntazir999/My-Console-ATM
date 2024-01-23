// Import necessary modules
import * as readlineSync from 'readline-sync';

// Generate random user data
const users = [
  { id: '1234', pin: '5678', balance: 1000 },
  // Add more users as needed
];

// Function to authenticate user
function authenticateUser(): { id: string, pin: string } | undefined {
  const userId = readlineSync.question('Enter User ID: ');
  const userPin = readlineSync.question('Enter PIN: ', { hideEchoBack: true });

  const user = users.find(u => u.id === userId && u.pin === userPin);
  return user ? { id: user.id, pin: user.pin } : undefined;
}

// ATM functionalities
function performTransaction(user: { id: string, pin: string }): void {
  // Implement your ATM functionalities here
  console.log(`Welcome, User ${user.id}!\n`);
  // Example: Display balance
  const userObj = users.find(u => u.id === user.id);
  console.log(`Your balance: $${userObj?.balance}`);
  // Implement withdrawal, deposit, or other operations
}

// Main application logic
function startATM(): void {
  console.log('Welcome to the ATM\n');

  // Authenticate user
  const authenticatedUser = authenticateUser();

  if (authenticatedUser) {
    // User authenticated, perform transactions
    performTransaction(authenticatedUser);
  } else {
    console.log('Authentication failed. Exiting...');
  }
}

// Run the ATM application
startATM();