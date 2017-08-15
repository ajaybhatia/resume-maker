import { Template } from 'meteor/templating';
import './Register.html';

Template.Register.events({
	'submit form'(event) {
		event.preventDefault();

		// const username = event.target.username.value;
		// const password = event.target.password.value;
		const username = $('#username').val().trim();
		const password = $('#password').val().trim();

		Accounts.createUser({
			username: username,
			password: password
		}, (error) => {
			if (error) {
				console.log(error.reason);
			} else {
				FlowRouter.go('/resume');
			}
		});
	}
});