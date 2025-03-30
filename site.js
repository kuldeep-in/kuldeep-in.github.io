
var badgeObjects = "";
var visitorCountJson = "";
var skillsList = [

    { text: "Enterprise Application Architecture" },
    { text: "Cloud / Digital transformation" },
    { text: "Data transformation and migration" },
    { text: "Project Management" },
    { text: "Solution Design" },
    { text: "Agile / Scrum" },
    { text: "Microsoft Azure Cloud" },
    { text: "Sustainability Cloud" },
    { text: "Azure Web/ Compute" },
    { text: "Azure SQL" },
    { text: "Cosmos DB" },
    { text: "Azure Storage" },
    { text: "Azure Data Factory" },
    { text: "Azure Synapse" },
    { text: "Azure Databrick" },
    { text: "Data Warehouse" },
    { text: "Eventing and Messaging" },
    { text: "Application Monitoring" },
    { text: "Azure Automation" },
    { text: "Azure DevOps" },
    { text: "Power Platform" },
    { text: "Power BI / Power Apps" }
];

var experienceList = [
     {
        company: "Databricks",
        jobTitle: "Solutions Architect",
        date: "Dec 2023 - Present",
        location: "London, UK",
        imageSrc: "images/Company/5-databricks.jpg"
    },
    {
        company: "PwC UK",
        jobTitle: "Cloud Solutions Architect / Manager",
        date: "June 2022 - Nov 2023",
        location: "London, UK",
        imageSrc: "images/Company/4-pwc.png"
    },
    {
        company: "Microsoft",
        jobTitle: "Cloud Solutions Architect - Engineering",
        date: "July 2019 - May 2022",
        location: "London, UK",
        imageSrc: "images/Company/3-msft.png"
    },
    {
        company: "Microsoft",
        jobTitle: "Cloud Consultant",
        date: "Jan 2016 - July 2019",
        location: "Hyderabad, India",
        imageSrc: "images/Company/3-msft.png"
    },
    {
        company: "Aon Hewitt",
        jobTitle: "Software Engineer",
        date: "Aug 2015 - Jan 2016",
        location: "Gurgoan, India",
        imageSrc: "images/Company/2-aon.png"
    }
];

var nevbarMobile = [
     {
        itemhref: "https://www.linkedin.com/in/kuldeep-in",
        itemclass: "fs-5 bi-linkedin",
        itemText: "Linkedin"
    },
    {
        itemhref: "https://github.com/kuldeep-in/",
        itemclass: "fs-5 bi-github",
        itemText: "Github"
    },
    {
        itemhref: "https://kuldeepsingh-in.medium.com/",
        itemclass: "fs-5 bi-medium",
        itemText: "Blogs"
    },
    {
        itemhref: "https://stackoverflow.com/users/2496782/kuldeep/",
        itemclass: "fs-5 bi-stack-overflow",
        itemText: "Stackoverflow"
    },
    {
        itemhref: "KuldeepSingh-Resume.pdf",
        itemclass: "fs-5 bi-download",
        itemText: "Resume"
    }
];

// URL of the JSON file
const url = 'https://raw.githubusercontent.com/kuldeepsingh-in/kuldeepsingh-in.github.io/main/badgeData.json';
const statsURL = 'https://api.visitorbadge.io/api/status?path=https%3A%2F%2Fgithub.com%2Fkuldeepsingh-in%2Fkuldeepsingh-in'

// Function to handle fallback image loading
function createFallbackImageHandler(fallbackImageUrl) {
    return function () {
        this.src = fallbackImageUrl;
    };
}

//const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//    target: '#navbar-example3'
//})

// Fetch visitor count from api
function fetchStatus() {
    fetch(statsURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // JSON data has been successfully parsed
            visitorCountJson = data;
            // Create visitor label
            var countTet = visitorCountJson.total.toLocaleString();
            document.getElementById("visitorCount").innerHTML = countTet;
            document.getElementById("visitorCount1").innerHTML = countTet;
            //window.alert(countTet);
        });
}

window.addEventListener('load', fetchStatus);
//window.addEventListener('load', function () {
//    // Your document is loaded.
//    var fetchInterval = 50000; // 5 seconds.

//    // Invoke the request every 5 seconds.
//    setInterval(fetchStatus, fetchInterval);
//});

// Technologies
// Get the container element
var skillsContainer = document.getElementById("dynamicSkills");
// Loop through the labels array
for (var i = 0; i < skillsList.length; i++) {
    var label = document.createElement("label");
    label.textContent = skillsList[i].text;
    label.classList.add("skill-label");
    skillsContainer.appendChild(label);
}

var experienceContainer = document.getElementById("dynamicexperience");

// Loop through the list and create divs dynamically
for (var i = 0; i < experienceList.length; i++) {
    // Create the outer div with the class "resume-box" and "row"
    var resumeBox = document.createElement("div");
    resumeBox.className = "resume-box row";

    // Create the first inner div with the class "col-xs-3 col-sm-3 col-md-2"
    var col1 = document.createElement("div");
    col1.className = "col-xs-3 col-sm-3 col-md-2";

    // Create the image element
    var img = document.createElement("img");
    img.className = "company-pic";
    img.src = experienceList[i].imageSrc;
    img.alt = "";

    // Append the image to the first inner div
    col1.appendChild(img);

    // Create the second inner div with the class "col-xs-6 col-sm-6 col-md-6 text-left"
    var col2 = document.createElement("div");
    col2.className = "col-xs-9 col-sm-9 col-md-6 text-left";

    // Create the heading element
    var heading = document.createElement("h4");
    //heading.className = "";
    heading.textContent = experienceList[i].company;

    // Create the span element for job title
    var jobTitle = document.createElement("h5");
    //jobTitle.className = "";
    jobTitle.textContent = experienceList[i].jobTitle;

    // Append the heading and job title to the second inner div
    col2.appendChild(heading);
    col2.appendChild(jobTitle);

    // Create the third inner div with the class "col-xs-6 col-sm-6 col-md-4 pull-right text-right"
    var col3 = document.createElement("div");
    col3.className = "col-xs-9 col-sm-9 col-md-4 pull-right text-right";

    // Create the date heading element
    var dateHeading = document.createElement("span");
    //dateHeading.className = "";
    dateHeading.textContent = experienceList[i].date;

    // Create the span element for location
    var locationSpan = document.createElement("span");
    //locationSpan.className = "";
    locationSpan.textContent = experienceList[i].location;

    var lineBreak = document.createElement("br");
    // Append the date heading and location span to the third inner div
    col3.appendChild(dateHeading);
    col3.appendChild(lineBreak);
    col3.appendChild(locationSpan);

    // Append the three inner divs to the outer div
    resumeBox.appendChild(col1);
    resumeBox.appendChild(col2);
    resumeBox.appendChild(col3);

    // Append the outer div to the parent element
    experienceContainer.appendChild(resumeBox);
}


// Fetch the JSON data from the URL
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        // JSON data has been successfully parsed
        badgeObjects = data;
        var badgeContainer = document.getElementById("dynamicBadges");
        // Loop to create the HTML structure dynamically
        for (var j = 0; j < badgeObjects.length; j++) {
            var badgeCard = document.createElement("div");
            badgeCard.classList.add("badgeCard");

            if (badgeObjects[j].webOnly) {
                badgeCard.classList.add("webOnly");
            }

            var badgeImage = document.createElement("img");
            badgeImage.classList.add("badge-img");
            badgeImage.src = badgeObjects[j].imageUrl;
            badgeImage.alt = badgeObjects[j].altText;
            badgeImage.onerror = createFallbackImageHandler(badgeObjects[j].fallbackImageUrl);

            var cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardBody.classList.add("webOnly");

            var badgeTitle = document.createElement("p");
            badgeTitle.classList.add("badgeTitle");
            badgeTitle.textContent = badgeObjects[j].title;

            var lineDiv = document.createElement("div");
            lineDiv.classList.add("line");
            lineDiv.classList.add("webOnly");

            cardBody.appendChild(badgeTitle);
            badgeCard.appendChild(badgeImage);
            badgeCard.appendChild(lineDiv);
            badgeCard.appendChild(cardBody);

            badgeContainer.appendChild(badgeCard);
        }
    });

/*
Removed Badges

//{
//  "imageUrl": "https://images.credly.com/images/2b47d3a8-9633-4a91-8c45-a58c84a070ac/LODS_Classes_Delivered_Badges_Role-01.png",
//  "fallbackImageUrl": "images/Badges/Badge_Fallback.png",
//  "altText": "Skillable - First Class Delivered",
//  "title": "Skillable - First Class Delivered",
//  "webOnly": false
//},
//{
//  "imageUrl": "https://images.credly.com/images/c66ddfa8-4e9d-41e4-bf98-244a4d55a14e/exam-az300-600x600.png",
//  "fallbackImageUrl": "images/Badges/Badge_Fallback.png",
//  "altText": "AZ-300 Microsoft Azure Architect Technologies",
//  "title": "AZ-300 Microsoft Azure Architect Technologies",
//  "webOnly": true
//},
//{
//  "imageUrl": "images/Badges/adf.png",
//  "fallbackImageUrl": "images/Badges/Badge_Fallback.png",
//  "altText": "Accredited: Azure Data Factory",
//  "title": "Accredited - Azure Data Factory",
//  "webOnly": true
//}

//{
//  "imageUrl": "https://images.credly.com/images/c4671de2-68f7-4219-952d-2e955e25f453/exam-dp201-600x600.png",
//  "fallbackImageUrl": "images/Badges/Badge_Fallback.png",
//  "altText": "DP-201 Designing an Azure Data Solution",
//  "title": "DP-201 Designing an Azure Data Solution",
//  "webOnly": true
//},
//{
//  "imageUrl": "https://images.credly.com/images/39062840-39ce-47d5-9847-77cb60ccf5e9/LODS_Students_Reached_Badges_Role-03.png",
//  "fallbackImageUrl": "images/Badges/Badge_Fallback.png",
//  "altText": "Skillable - 25 Students Reached",
//  "title": "Skillable - 25 Students Reached",
//  "webOnly": true
//},

*/
