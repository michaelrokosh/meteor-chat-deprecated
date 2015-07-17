Template.ChatMessage.helpers({
  author: function () {
    return Meteor.users.findOne({ _id: this.userId });
  },
  timeFromNow: function () {
    return moment(this.createdAt).fromNow();
  }
});