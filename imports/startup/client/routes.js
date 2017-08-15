import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Layouts
import '../../ui/layouts/MasterLayout/MasterLayout';
// Pages
import '../../ui/pages/Home/Home';
import '../../ui/pages/About/About';
import '../../ui/pages/Contact/Contact';
import '../../ui/pages/Register/Register';
import '../../ui/pages/Login/Login';
import '../../ui/pages/Resume/Resume';

FlowRouter.route('/', {
	name: 'Home',
	action() {
		BlazeLayout.render('MasterLayout', { content: 'Home' });
	}
});

FlowRouter.route('/about', {
	name: 'About',
	action() {
		BlazeLayout.render('MasterLayout', { content: 'About' });
	}
});

FlowRouter.route('/contact', {
	name: 'Contact',
	action() {
		BlazeLayout.render('MasterLayout', { content: 'Contact' });
	}
});

FlowRouter.route('/register', {
	name: 'Register',
	action() {
		BlazeLayout.render('MasterLayout', { content: 'Register' });
	}
});

FlowRouter.route('/login', {
	name: 'Login',
	action() {
		BlazeLayout.render('MasterLayout', { content: 'Login' });
	}
});

FlowRouter.route('/resume', {
	name: 'Resume',
	action() {
		if (Meteor.userId()) {
			BlazeLayout.render('MasterLayout', { content: 'Resume' });
		} else {
			FlowRouter.go('Login');
		}
	}
});