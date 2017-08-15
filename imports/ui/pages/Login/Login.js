import { Template } from 'meteor/templating';
import './Login.html';

Template.Login.events({
	'submit form'(event) {
		event.preventDefault();

		const username = $('#username').val().trim();
		const password = $('#password').val().trim();

		Meteor.loginWithPassword(username, password, (error) => {
			if (error) {
				if(error.reason.includes("User")) {
					$(".username-error").html(error.reason);
				} else if (error.reason.includes("password")) {
					$(".password-error").html(error.reason);
				}
			} else {
				FlowRouter.go('/resume');
			}
		});
	},
	'keyup #username'(event) {
		if ($("#username").val() === "") {
			$(".username-error").html("");
		}
	},
	'keyup #password'(event) {
		if ($("#password").val() === "") {
			$(".password-error").html("");
		}
	}
});