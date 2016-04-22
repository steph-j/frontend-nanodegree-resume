var formattedName = HTMLheaderName.replace("%data%", "Steph Jennings");

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Steph Jennings",
  "role": "Web Developer",
  "contacts": {
    "mobile": "022-318-2112",
    "email": "StephanieSJennings@gmail.com",
    "github": "steph-j",
    "location": "Auckland"
  },
  "welcomeMessage": "Howdie Folks. Welcome to my Resume",
  "skills": [
    "JavaScript", "HTML", "CSS", "Windows"
  ],
  "bioPic": "images/bioPic.jpg"
}

var education = {
  "schools": [{
    "name": "Enspiral Dev Academy",
    "location": "Auckland",
    "degree": "Web Development",
    "major": ["Web Development"],
    "dates": 2016
  }, {
    "name": "Crown Institute of Studies",
    "location": "Auckland",
    "degree": "Certificate in Travel, Tourism and Airline Studies",
    "major": ["Travel"],
    "dates": 2007
  }, {
    "name": "Rangitoto College",
    "location": "Auckland",
    "degree": "High School",
    "major": ["Text and information management", "History", "Japanese"],
    "dates": 2006
  }],
  "onlineCourses": [{
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": 2014,
    "url": "https://www.udacity.com/"
  }]
}

var work = {
  "jobs": [{
    "employer": "Insight Vacations",
    "title": "Reservations Consultant",
    "dates": "Oct 2012 – May 2015",
    "location": "Auckland",
    "description": "Insight Vacations is The Travel Corporations Premium and Luxury coach touring product.  Offering tours to visit 43 European countries as well as the US, India and Nepal."
  }, {
    "employer": "University of London",
    "title": "Assistant Bursur",
    "dates": "June 2011 – Aug  2012",
    "location": "London",
    "description": "The University of London has 8 Intercollegiate Halls of Residence available to full time students of the University. Also available is guest accommodation both throughout the academic year and during the summer. The Halls also have conference facilities."
  }, {
    "employer": "Gwynn Valley Camp",
    "title": "Administrative Assistant",
    "dates": "Apr 2010 – Aug 2010",
    "location": "Brevard",
    "description": "Helped with the running of this accredited kids summer camp. They have both day sessions and sessions that run for weeks. My duties included Data-entry, phone, email and mail correspondance."
  }]
}

var projects = {
  "projects": [{
    "title": "JS Racer",
    "dates": "13 Apr 2016",
    "description": "This is a 2 player game that uses different keys in JS to move your player across the screen to get to the finish line.",
    "images": [
      "https://pixabay.com/static/uploads/photo/2015/09/23/10/20/car-953357_960_720.png"
    ]
  }]
}

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart)

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
};

var displayWork = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};
displayWork()

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }
  for (onlineClass in education.onlineCourses) {
    $(".education-entry:last").append(HTMLonlineClasses);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);

    var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates);
    $(".education-entry:last").append(formattedDate);

    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url);
    $(".education-entry:last").append(formattedUrl);
  }
};
education.display();

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display()


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  console.log(logClicks(x, y));
});

$("#main").append(internationalizeButton)

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}


$("#mapDiv").append(googleMap);