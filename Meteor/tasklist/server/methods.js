import { Meteor } from 'meteor/meteor';

Meteor.methods({
    add: function (object) {
        console.log(object);
        Tasks.insert({ name: object.name, date: new Date(), user: this.userId });
    },
    remove: function (id) {
        Tasks.remove({ _id: id, user: this.userId });
    }
})