Template.navCard.events({
    "click .destroy": function () {
        Cards.remove(this._id);
    },
    "click .cardSelector": function () {
        console.log(this.title);
        var status = !Cards.findOne(this._id).open;
        console.log(status);
        Cards.update(this._id, {$set: {"open": status}});
    }
});