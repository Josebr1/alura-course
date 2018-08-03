//import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {

    Meteor.publish('tasks', function () {
        return Tasks.find({ user: this.userId });
    });

});