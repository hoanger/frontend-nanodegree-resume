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
	welcomeMesage : 'Hello, there!',
	skills : [
		'design', 'coding', 'teaching'
	],
	biopic : 'images/wolflogo200.png',
	display : function(){
		//Place name and role in the header
		//var formattedName = HTMLheaderName.replace('%data%', bio.name);
		//var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		//$('#header').append(formattedName);
		//$('#header').append(formattedRole);


//if (bio.skills.length > 0){
//	var formattedSkills = HTMLskills.replace('%data%', bio.skills);
//	$('#header').append(HTMLskillsStart);
//	$('#header').append(formattedSkills);
	}
};

var education = {
	schools : [
		{
			name : 'MacEwan University',
			location : 'Edmonton, AB, Canada',
			degree : 'Digital Arts and Media Diploma',
			majors : [
				'Illustration', 'Motion Graphics','Video'
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
	//display: function(){}
};

var work = {
	jobs : [
		{
			employer : 'Hyperwallet Systems Inc.',
			title : 'Business Analyst, Operational Intelligence',
			location : 'Vancouver, BC, Canada',
			dates : 'April 2015 - Present',
			description : '-Business analysis with focus in operations\n
			-Process and tools analysis and improvement'
		},
		{
			employer : 'Hyperwallet Systems Inc.',
			title : 'Production Support Specialist',
			location : 'Vancouver, BC, Canada',
			dates : 'September 2014 - March 2015',
			description : '-Technical support and application monitoring for clients\n
			-Client training for applications'
		},
		{
			employer : 'Tom Harris Cellular',
			title : 'Manager Retail Sales/Training',
			location : 'Vancouver, BC, Canada',
			dates : 'March 2013 - September 2014',
			description : '-Recruiting, training and management of sales teams\n
			-Top 10 Sales in 2013 - President\'s Club'

		}
	],
	//display: function(){}
};

var projects = {
	projects : [
		{
			title : 'Responsive Design: Portfolio Website',
			dates : 'September 2015',
			description : 'This project is a website that demonstrates responsive design. Through the use of Media
			queries, srcset and Bootstrap CSS, the format of the page adjusts to various sizes of the browser window.',
			images : [
				'images/P1-full.jpg', 'images/P1-mobile1.jpg', 'images/P1-mobile2.jpg.jpg'
			]
		}
	],
	//display: function(){}
};



//--------test area
//var formattedName = HTMLheaderName.replace('%data%', bio.name);
//var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

//$('#header').append(formattedName);
//$('#header').append(formattedRole);
//if (bio.skills.length > 0){
//	var formattedSkills = HTMLskills.replace('%data%', bio.skills);
//	$('#header').append(HTMLskillsStart);
//	$('#header').append(formattedSkills);
}



