const resume = {

    "name": "Dhanasasidharan Dhanabal",
    "email": "ddsdharan@outlook.com",
    "phone": "+91 9677512061",
    "address": "A-33 Ramasamy Nagar, Udumalaipettai, Tiruppur(DT)",
    "summary": "Learning web development with a passion for creating user-friendly and visually appealing websites. Proficient in HTML, CSS, React-JS and JavaScript. Strong problem-solving and communication skills.",
    "education": [
      {
        "degree": "Bachelor of Technology",
        "university": "Anna University",
        "college": "Karpagam Institute of Technology",
        "location": "Coimbatore, Tamil Nadu",
        "year": "2014"
      },
      {
        "diploma": "Diploma in Electronics and Communication Engineering",
        "university": "Directorate of Technical Education",
        "location": "Chennai, Tamil Nadu",
        "college": "Murugesan Institute of Technology, Salem",
        "year": "2010"
      }
    ],
    "experience": [
      {
        "position": "Consultant",
        "company": "Sutherland Global Services",
        "location": "Chennai, Tamil Nadu",
        "startYear": "2014",
        "endYear": "2015",
        "responsibilities": [
          "Handling inbound emails, chat for US customers and solving the queries related to Kindle device and Fire OS",
          "Escalating the systemic issues",
          "Creating Trouble tickects for Technical issues",
          "Documenting the issues and the solution provided for the queries"
        ]
      },
      {
        "position": "Senoir-Consultant",
        "company": "Sitel India Pvt ltd",
        "location": "Chennai, Tamil Nadu",
        "startYear": "2016",
        "endYear": "2017",
        "responsibilities": [
          "Handling inbound chat for Canadaian customers and solving the queries related to Bell Internet connectivity issues, Routers, Wifi-issues",
          "Escalating the systemic issues",
          "Creating Trouble tickects for Technical issues",
          "Documenting the issues and the solution provided for the queries"
        ]
      },
      {
        "position": "Support-Lead",
        "company": "JMR Infotech, Bangalore",
        "location": "Chennai, Tamil Nadu",
        "startYear": "2017",
        "endYear": "2018",
        "responsibilities": [
          "Handling inbound technical queries regarding the product features",
          "Co-ordinating the devlopment team and Testing team to release the timely updates for the application",
          "Documentation of the queries and resolution provided to the end-users",
          "Collaborated with team members on various web development projects"
        ]
      }
    ],
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Bootstrap",
      "Responsive Web Design",
      "Version Control (Git)",
      "Problem Solving",
      "Communication"
    ]
  }
 
//   Using a for loop
 for (let key in resume) {
    console.log(resume[key]);
  }

//   Using a for - in loop:
  for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
      console.log(resume[key]);
    }
  }
  
//   Using for of loop:

  for (let [key, value] of Object.entries(resume)) {
    console.log(value);
  }
  
//   Using a forEach loop:

  Object.keys(resume).forEach(key => {
    console.log(resume[key]);
  });
  