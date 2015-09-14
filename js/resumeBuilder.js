var bio = {
	name : 'Andy Nguyen',
	role : 'Designer and Web Developer',
	contacts : {
		mobile : '778-555-5555',
		email : 'nguyenandyh@gmail.com',
		github : 'hoanger',
		twitter : '@sockeyesteve',
		location : 'Vancouver, BC, Canada'
	},
	welcomeMessage : 'Welcome to my resume page built with HTML, CSS and JavaScript!',
	skills : [
		'design', 'coding', 'teaching', 'problem solving'
	],
	biopic : 'images/wolflogo200.png',
	display : function() {
		/* Place name and role in the header before topContacts */
		var selector = $('#header');
		prependItem(selector, HTMLheaderRole, this.role);
		prependItem(selector, HTMLheaderName, this.name);
		$( "#header > span" ).addClass('white-text');
		/* Place photo and welcome message after topContacts */
		appendItem(selector, HTMLbioPic, this.biopic);
		appendItem(selector, HTMLwelcomeMsg, this.welcomeMessage);
		/* Add skills to header if not empty */
		if (this.skills.length > 0){
			appendItem(selector, HTMLskillsStart); // Add the section title  and ul
			selector = $('#skills'); // change selector to the ul to place li items
			for (var i = 0; i < this.skills.length; i++) {
				appendItem(selector, HTMLskills, this.skills[i]);
			};
		}
		/* This function will place a contact item in both topContacts and footerContacts */
		var appendContacts = function(HTMLitem, value){
			var selector0 = $('#topContacts');
			var selector1 = $('#footerContacts');
			var selectorArray = [selector0, selector1];
			for (var i = 0; i < selectorArray.length; i++) {
				appendItem(selectorArray[i], HTMLitem, value);
			};
		}
		/* Place contact info into page */
		appendContacts(HTMLmobile, this.contacts.mobile);
		appendContacts(HTMLemail, this.contacts.email);
		appendContacts(HTMLtwitter, this.contacts.twitter);
		appendContacts(HTMLgithub, this.contacts.github);
		appendContacts(HTMLlocation, this.contacts.location);
	}
};
bio.display();


var education = {
	schools : [
		{
			name : 'MacEwan University',
			location : 'Edmonton, AB, Canada',
			degree : 'Digital Arts and Media Diploma',
			majors : [
				'Illustration', 'Motion Graphics', 'Video'
			],
			dates : 2006,
			url : 'http://www.macewan.ca/wcm/index.htm'
		}
	],
	onlineCourses : [
		{
			title : 'Front End Web Developer Nanodgree (In progress)',
			school : 'Udacity',
			date : 2016,
			url : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
			title : 'HTML & CSS',
			school : 'Codecademy',
			date : 2015,
			url : 'https://www.codecademy.com'
		},
		{
			title : 'JavaScript',
			school : 'Codecademy',
			date : 2015,
			url : 'https://www.codecademy.com'
		},
		{
			title : 'jQuery',
			school : 'Codecademy',
			date : 2015,
			url : 'https://www.codecademy.com'
		}
	],
	display : function() {
		var selector = $('#education');
		for (var i = 0; i < this.schools.length; i++) {
		 	appendItem(selector, HTMLschoolStart); // Start new .education-entry div
		 	var selectorTemp = $('.education-entry:last')
		 	var schoolAndUrl = HTMLschoolName.replace('#', this.schools[i].url); // Add url for href
		 	/* Combine html for schoolName and schoolDates */
		 	var HTMLschoolNameDegree = schoolAndUrl.replace('%data%', this.schools[i].name) + HTMLschoolDegree.replace('%data%', this.schools[i].degree);
		 	/* Add school info */
		 	appendItem(selectorTemp, HTMLschoolNameDegree);
		 	appendItem(selectorTemp, HTMLschoolDates, this.schools[i].dates);
		 	appendItem(selectorTemp, HTMLschoolLocation, this.schools[i].location);
		 	if (this.schools[i].majors.length > 0){ // Major is optional. Do not add section if no major
		 		/* Concatenate majors */
		 		var majors = this.schools[i].majors.join(', ');
		 		appendItem(selectorTemp, HTMLschoolMajor, majors);
		 	};
		 };
		 appendItem(selector, HTMLonlineClasses);
		 for (var i = 0; i < this.onlineCourses.length; i++) {
		 	appendItem(selector, HTMLschoolStart); // Start new .education-entry div
		 	var selectorTemp = $('.education-entry:last')
		 	var titleAndUrl = HTMLonlineTitle.replace('#', this.onlineCourses[i].url); // Add url for href
		 	/* Combine html for schoolName and schoolDates */
		 	var HTMLtitleSchool = titleAndUrl.replace('%data%', this.onlineCourses[i].title) + HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
		 	/* Add school info */
		 	appendItem(selectorTemp, HTMLtitleSchool);
		 	appendItem(selectorTemp, HTMLonlineDates, this.onlineCourses[i].date);
		 	/* Make URL linked */
		 	titleAndUrl = HTMLonlineURL.replace('#', this.onlineCourses[i].url);
		 	titleAndUrl = titleAndUrl.replace('%data%', this.onlineCourses[i].url);
		 	appendItem(selectorTemp, titleAndUrl);
		 };
	}
};
education.display();

var work = {
	jobs : [
		{
			employer : 'Hyperwallet Systems Inc.',
			title : 'Business Analyst, Operational Intelligence',
			location : 'Vancouver, BC, Canada',
			dates : 'April 2015 - Present',
			description : 'Business analysis with focus in operations processes and tools'
		},
		{
			employer : 'Hyperwallet Systems Inc.',
			title : 'Production Support Specialist',
			location : 'Vancouver, BC, Canada',
			dates : 'September 2014 - March 2015',
			description : 'Technical support, application monitoring and training for clients'
		},
		{
			employer : 'Tom Harris Cellular',
			title : 'Manager Retail Sales/Training',
			location : 'Vancouver, BC, Canada',
			dates : 'March 2013 - September 2014',
			description : 'Recruiting, training and management of sales teams acheiving Top 10 in Sales in 2013'

		}
	],
	display: function() {
		var selector = $('#workExperience');
		for (var i = 0; i < this.jobs.length; i++) {
		 	appendItem(selector, HTMLworkStart); // Start new .work-entry div
		 	var selectorTemp = $('.work-entry:last')
		 	/* Combine html for workEmployer and workTitle */
		 	var HTMLemployerTitle = HTMLworkEmployer.replace('%data%', this.jobs[i].employer) + HTMLworkTitle.replace('%data%', this.jobs[i].title);
		 	/* Add work info */
		 	appendItem(selectorTemp, HTMLemployerTitle);
		 	appendItem(selectorTemp, HTMLworkDates, this.jobs[i].dates);
		 	appendItem(selectorTemp, HTMLschoolLocation, this.jobs[i].location);
		 	appendItem(selectorTemp, HTMLworkDescription, this.jobs[i].description);
		 };
	}
};
work.display();

var projects = {
	projects : [
		{
			title : 'Responsive Design: Portfolio Website',
			dates : 'September 2015',
			description : 'This project is a website that demonstrates responsive design. Through the use of media queries, srcset and Bootstrap CSS, the format of the page adjusts to various sizes of the browser window.',
			images : [
				'images/P1-full.jpg', 'images/P1-mobile1.jpg'
			]
		}
	],
	display : function() {
		var selector = $('#projects');
		for (var i = 0; i < this.projects.length; i++) {
		 	appendItem(selector, HTMLprojectStart); // Start new .project-entry div
		 	var selectorTemp = $('.project-entry:last')
		 	/* Add project info */
		 	appendItem(selectorTemp, HTMLprojectTitle, this.projects[i].title);
		 	appendItem(selectorTemp, HTMLprojectDates, this.projects[i].dates);
		 	appendItem(selectorTemp, HTMLprojectDescription, this.projects[i].description);
		 	/* Add images */
		 	for (var j = 0; j < this.projects[i].images.length; j++) {
		 		appendItem(selectorTemp, HTMLprojectImage, this.projects[i].images[j])
		 	};
		 };
	}
};
projects.display();

/* Add interactive map item */
var selector = $('#mapDiv');
appendItem(selector, googleMap);

/*
The functions below, 'prependItem() and 'appendItem()' add items to HTML.
If no 'value' argument is passed, there will not be any replacement of %data%.
Tester can then render the page and search for %data% to debug and find missing info.
*/
function prependItem(selector, HTMLitem, value){
	if (value) selector.prepend(HTMLitem.replace('%data%', value));
	else selector.prepend(HTMLitem);
};

function appendItem(selector, HTMLitem, value){
	if (value) selector.append(HTMLitem.replace('%data%', value));
	else selector.append(HTMLitem);
};



