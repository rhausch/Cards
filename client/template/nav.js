Template.nav.helpers({
  cards: function () {
      console.log(this);
    return Cards.find({});
  }
});

Template.nav.events({
    "submit .newCard": function (event) {
        console.log("On Submit:");
        console.log(event.target.newCardTitle.value);
        Cards.insert({
            title: event.target.newCardTitle.value,
            createdAt: new Date(),
            open: false
        });
        event.target.newCardTitle.value = '';
        return false;
    },
    "submit .test": function (event) {
        var title = event.target.newCardTitle.value;
        Cards.insert({
            title: title,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
        console.log("Submit!");
        return false;
    }
});