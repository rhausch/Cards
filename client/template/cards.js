Template.cards.helpers({
    cards: function () {
        console.log("Testing!");
        return Cards.find({open: true});
    }
});