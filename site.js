
var visitorCountJson = "";

// Not in use
var linkedinURL = "https://www.linkedin.com/in/kuldeep-in";
var githubURL = "https://github.com/kuldeep-in/";
var mediumURL = "https://kuldeep-in.medium.com/";
var emailAddress = "in.singhkuldeep@gmail.com";


// URL of the JSON file
const configURL = 'https://raw.githubusercontent.com/kuldeepsingh-in/kuldeepsingh-in.github.io/main/userConfig.json';
const statsURL = 'https://api.visitorbadge.io/api/status?path=https%3A%2F%2Fgithub.com%2Fkuldeepsingh-in%2Fkuldeepsingh-in'

// Function to handle fallback image loading
function createFallbackImageHandler(fallbackImageUrl) {
    return function () {
        this.src = fallbackImageUrl;
    };
}

// Load Top NavBar Mobile
function loadNavBarMobile(itemList) {
    var navBarContainer = document.getElementById("mobileNavBar");
    itemList.forEach(item => {
         const listItem = document.createElement('li');
         listItem.classList.add('nav-item');
     
         const link = document.createElement('a');
         link.href = item.itemhref;
         link.target = "_new";
         link.classList.add('nav-link');
     
         const icon = document.createElement('i');
         icon.classList.add('fs-5', item.icon);
     
         const textSpan = document.createElement('span');
         textSpan.classList.add('ms-1', 'd-none', 'd-sm-inline');
         textSpan.textContent = item.itemText;
     
         link.appendChild(icon);
         link.appendChild(textSpan);
         listItem.appendChild(link);
         navBarContainer.appendChild(listItem);
  });
}

// Load Left NavBar Web
function loadNavBarWeb(itemList) {
    var navBarDivWeb = document.getElementById('webNavBar');
    itemList.forEach(item => {
             const div = document.createElement('div');

            if (item.isLink) {
                const link = document.createElement('a');
                link.href = item.href;
                link.target = "_new";
        
                const icon = document.createElement('i');
                icon.classList.add('fs-5', item.icon);
        
                const textSpan = document.createElement('span');
                textSpan.style.paddingLeft = '5px';
                textSpan.textContent = item.text;
        
                link.appendChild(icon);
                link.appendChild(textSpan);
                div.appendChild(link);
            } else {
                const icon = document.createElement('i');
                icon.classList.add('fs-5', item.icon);
        
                const textSpan = document.createElement('span');
                textSpan.style.paddingLeft = '5px';
                textSpan.textContent = item.text;
        
                div.appendChild(icon);
                div.appendChild(textSpan);
            }
            navBarDivWeb.appendChild(div);
        });
}

// Load Skills
function loadSkills(skillsList) {
    var skillsContainer = document.getElementById("dynamicSkills");
    skillsList.forEach(item => {
        var label = document.createElement("label");
        label.textContent = item.text;
        label.classList.add("skill-label");
        skillsContainer.appendChild(label);
  });
}

// Load Badges
function loadBadges(badgeObjects) {
    var badgeContainer = document.getElementById("dynamicBadges");
    // Loop to create the HTML structure dynamically
    badgeObjects.forEach(item => {
        var badgeCard = document.createElement("div");
        badgeCard.classList.add("badgeCard");

        if (item.webOnly) {
            badgeCard.classList.add("webOnly");
        }

        var badgeImage = document.createElement("img");
        badgeImage.classList.add("badge-img");
        badgeImage.src = item.imageUrl;
        badgeImage.alt = item.altText;
        badgeImage.onerror = createFallbackImageHandler(item.fallbackImageUrl);

        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.classList.add("webOnly");

        var badgeTitle = document.createElement("p");
        badgeTitle.classList.add("badgeTitle");
        badgeTitle.textContent = item.title;

        var lineDiv = document.createElement("div");
        lineDiv.classList.add("line");
        lineDiv.classList.add("webOnly");

        cardBody.appendChild(badgeTitle);
        badgeCard.appendChild(badgeImage);
        badgeCard.appendChild(lineDiv);
        badgeCard.appendChild(cardBody);

        badgeContainer.appendChild(badgeCard);
  });
}

// Load Experience
function loadExperience(experienceList) {
    var experienceContainer = document.getElementById("dynamicexperience");
    experienceList.forEach(item => {
        var resumeBox = document.createElement("div");
        resumeBox.className = "resume-box row";

        // Create the first inner div with the class "col-xs-3 col-sm-3 col-md-2"
        var col1 = document.createElement("div");
        col1.className = "col-3 col-sm-3 col-md-2";
        
        // Create the image element
        var img = document.createElement("img");
        img.className = "company-pic";
        img.src = item.imageSrc;
        img.alt = "";
        
        col1.appendChild(img);
        
        var col2 = document.createElement("div");
        col2.className = "col-9 col-sm-9 col-md-6 text-left";
        
        // Create the heading element
        var heading = document.createElement("h4");
        heading.textContent = item.company;
        
        // Create the span element for job title
        var jobTitle = document.createElement("h5");
        jobTitle.textContent = item.jobTitle;
        
        col2.appendChild(heading);
        col2.appendChild(jobTitle);
        
        var col3 = document.createElement("div");
        col3.className = "col-9 col-sm-9 col-md-4 pull-right text-right";
        
        // Create the date heading element
        var dateHeading = document.createElement("span");
        dateHeading.textContent = item.date;
        
        // Create the span element for location
        var locationSpan = document.createElement("span");
        locationSpan.textContent = item.location;
        
        var lineBreak = document.createElement("br");
        col3.appendChild(dateHeading);
        col3.appendChild(lineBreak);
        col3.appendChild(locationSpan);
        
        resumeBox.appendChild(col1);
        resumeBox.appendChild(col2);
        resumeBox.appendChild(col3);
        
        experienceContainer.appendChild(resumeBox);
    });
}

// Fetch the JSON data
fetch(configURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
      // Destructure lists from the JSON object
      //const { list1, list2, list3 } = data;
      loadNavBarMobile(data.navbarMobileConfig);
      loadNavBarWeb(data.navbarWebConfig);
      loadSkills(data.skillsConfig);
      loadBadges(data.badgeConfig);
      loadExperience(data.experienceConfig);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

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

/*
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
