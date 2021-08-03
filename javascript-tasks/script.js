var users = [];

function addUser(name, id, balance) {
  users.push({
    name: name,
    id: id,
    balance: balance,
  });
}

function editBalanceByid(userId, newBalance) {
  var user = users.find((user) => user.id == userId);
  user.balance = newBalance;
}

function deleteUserById(userId) {
  var numId = users.findIndex((user) => user.id == userId);
  users.splice(numId, 1);
}
showUsers = function () {
  console.table(users);
};

addUser("Muhammad", 29, 4000);
addUser("Bassma", 22, 2000);
addUser("Ahmed", 25, 1000);
addUser("Mai", 20, 3000);

editBalanceByid(20, 3500);
deleteUserById(25);
showUsers();