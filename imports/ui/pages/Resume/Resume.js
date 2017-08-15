import { Template } from 'meteor/templating';
import { Resumes } from '../../../api/resumes';
import './Resume.html';

Template.Resume.events({
	'click [type=radio]'(event) {
		const whichRadio = $(event.target).attr('id');
		switch (whichRadio) {
			case 'fresher':
				$('.block-professional').hide();
				break;
			case 'professional':
				$('.block-professional').show();
				break;
		}
	},
	'keyup #first-name'(event) {
		if ($("#last-name").val() !== "") {
			$(".title").html($("#first-name").val() + " " + $("#last-name").val());
		} else {
			$(".title").html($("#first-name").val());
		}
	},
	'keyup #last-name'(event) {
		$(".title").html($("#first-name").val() + " " + $("#last-name").val());
	},
	'submit form'(event) {
		event.preventDefault();

		const firstName = $("#first-name").val().trim();
		const lastName = $("#last-name").val().trim();
		const address = $("#address").val().trim();
		const email = $("#email").val().trim();
		const phoneNumber = $("#phone-number").val().trim();
		const matricSchoolName = $("#matric-school-name").val().trim();
		const matricBoardName = $("#matric-board-name").val().trim();
		const matricPassingYear = $("#matric-passing-year").val().trim();
		const matricPercentage = $("#matric-percentage").val().trim();

		Resumes.insert({
			firstName,
			lastName,
			address,
			email,
			phoneNumber,
			matric: {
				matricSchoolName,
				matricBoardName,
				matricPassingYear,
				matricPercentage
			},
			userId: Meteor.userId()
		}, (error) => {
			if (error) {
				console.log(error.reason);
			} else {
				// Todo
			}
		});

		// Clear Form
		$("#first-name").val("");
	}
});