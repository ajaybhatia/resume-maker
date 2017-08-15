import { Template } from 'meteor/templating';
import './Navigation.html';

Template.Navigation.events({
	'click #logout'(event) {
		Meteor.logout((error) => {
			if (error) {
				console.log(error.reason);
			} else {
				FlowRouter.go('/login');
			}
		});
	}
});