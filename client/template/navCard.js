Template.navCard.events({
    "click .destroy": function () {
        Cards.remove(this._id);
    },
    "click .cardSelector": function (event) {
        console.log(event.target);
        console.log(this._id);
        console.log(this.title);
        
    }
})