/*
transaction
withdraw
deposit
balance
*/

'use strict';


function Account() {
  this.INITIAL_BALANCE = 100;
  this.MINIMUM_BALANCE = 0;
  this.balance = 0;
}

Account.prototype.setInitialBalance = function() {
  this.balance += this.INITIAL_BALANCE;
}

Account.prototype.getBalance = function() {
  return.thisBalance;
}

function Deposit(amount) {
  this.balance += amount;
}

function Withdraw(amount) {
  this.balance -= amount;
}

function Transaction() {
  this.
}
