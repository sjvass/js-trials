// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.home = '510-867-5309';
phoneNumbers.mobile = '415-555-1212';
phoneNumbers.business = '415-552-2121';

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo (accountHolder, accountNumber, businessName) {
  console.log(`Account Holder Name: ${accountHolder}`);
  console.log(`Account Holder Number: ${accountNumber}`);
  console.log(`Business Name: ${businessName}`);
}

printAccountInfo(accountHolder, accountNumber, businessName);

// Add function to print all addresses, including a header
function showAddresses(list) {
  console.log('Addresses:');
  for(let address of list) {
    console.log(address);
  }
}

showAddresses(addresses);

// Add function to print phone types and numbers
function showPhoneNumbers(phoneMap) {
  console.log('Phone Numbers:');
  for(let [location, number] of Object.entries(phoneMap)) {

    console.log(`${location}: ${number}`);
  }
}


showPhoneNumbers(phoneNumbers);


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();

// Add function to add transactions

function addTransaction(trans_date, trans_amt) {
  transactions.set(trans_date, trans_amt);
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);

console.log(transactions);

// Add function to show balance status
function showBalanceStatus(balance) {
  if(balance < 0) {
    console.log('YOU ARE OVERDRAWN');
  }
  else if (balance < 20) {
    console.log('Warning: You are close to zero balance');
  }
  else {
    console.log(`balance: ${balance}`);
  }
}

showBalanceStatus(-1);
showBalanceStatus(15);
showBalanceStatus(50);


// Add function to show transactions
function showTransactions(trans_map, balance) {
  console.log(balance);
  for (let [trans_date, trans_amt] of Object.entries(trans_map)) {
    console.log(`${trans_date}`);
    if (trans_amt < 0) {
      console.log('Withdrawal');
    } else {
      console.log('Deposit');
    }
    console.log(balance - (balance + trans_amt));
    console.log(balance + trans_amt);
  }
}

showTransactions(transactions, 10000);

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




