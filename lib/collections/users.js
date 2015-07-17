if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    user.color = getRandomColor();
    return user;
  });
}
