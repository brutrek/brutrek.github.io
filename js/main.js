function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);
	if(age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
	console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	$('h2').text(firstName + ' is ' + age + ' years old!');

	if(firstName.toLowerCase() === 'general' && lastName.toLowerCase !== 'assembly') {
		console.log('Greetings, General ' + lastName +'!');
	}

	var faveColour = prompt('What is your favorite colour?').toLowerCase();

	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {
		$('h1').css('color', faveColour);
	}

}


// When the page loads
$(function() {

	$('img').on('click', askQuestions);

	// When the user clicks on a heading
	$('h3').on('click', function() {

		// Hide the content after the heading 
		$(this).next().slideToggle(2000);

	});

});

	