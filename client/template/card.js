Template.card.events({
    "click .close": function () {
        Cards.update(this._id, {$set: {open: false}});
    }
});