Template.new.events({
    'submit form': (e, template) => {
        e.preventDefault();

        let input = $('#task');
        let name = input.val();

        // Tasks.insert({ name: name, date: new Date() });
        Meteor.call('add', { name: name });
        input.val('');
    }
});