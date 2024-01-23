"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
const readlineSync = __importStar(require("readline-sync"));
// Generate random user data
const users = [
    { id: '1234', pin: '5678', balance: 1000 },
    // Add more users as needed
];
// Function to authenticate user
function authenticateUser() {
    const userId = readlineSync.question('Enter User ID: ');
    const userPin = readlineSync.question('Enter PIN: ', { hideEchoBack: true });
    const user = users.find(u => u.id === userId && u.pin === userPin);
    return user ? { id: user.id, pin: user.pin } : undefined;
}
// ATM functionalities
function performTransaction(user) {
    // Implement your ATM functionalities here
    console.log(`Welcome, User ${user.id}!\n`);
    // Example: Display balance
    const userObj = users.find(u => u.id === user.id);
    console.log(`Your balance: $${userObj === null || userObj === void 0 ? void 0 : userObj.balance}`);
    // Implement withdrawal, deposit, or other operations
}
// Main application logic
function startATM() {
    console.log('Welcome to the ATM\n');
    // Authenticate user
    const authenticatedUser = authenticateUser();
    if (authenticatedUser) {
        // User authenticated, perform transactions
        performTransaction(authenticatedUser);
    }
    else {
        console.log('Authentication failed. Exiting...');
    }
}
// Run the ATM application
startATM();
