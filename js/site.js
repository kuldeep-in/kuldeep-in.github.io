// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var badgeObjects = "";
var visitorCountJson = "";

jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 580) {
            // Get the div
            const div = document.getElementById("left-social");

            // Get all anchor tags inside the div 
            const anchors = div.getElementsByTagName("a");

            // Loop through the anchors
            for (let i = 0; i < anchors.length; i++) {

                // Get the i tag inside
                const icon = anchors[i].getElementsByTagName("i")[0];

                // Remove the class
                icon.classList.remove("fa-2x");

            }
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});

$(document).ready(function () {
    "use strict";

    // 1. Attach an event handler to the window's "load" event
    $(window).load(function () {
        $("body").addClass("loaded");
        $("body").scrollspy({ target: ".sidebar", offset: 50 });
    });

    var o = $("html,body");
    var a = $(".nav"),
        e = $(".toggle-btn");
    e.on("click", function (o) {
        a.hasClass("show-nav") ? a.removeClass("show-nav") : a.addClass("show-nav"), o.stopPropagation();
    }),
        e.on("click", function () {
            e.hasClass("toggle-close") ? e.removeClass("toggle-close") : e.addClass("toggle-close");
        }),
        $(document).on("click", function () {
            a.hasClass("show-nav") && a.removeClass("show-nav"), e.hasClass("toggle-close") && e.removeClass("toggle-close");
        }),
        $(window).on("load resize", function () {
            var o = $(".toggle-btn").offset().top;
            $(window).on("scroll", function () {
                var s = $(window).scrollTop();
                s >= o ? (e.addClass("fixed"), a.addClass("stickyNav")) : (e.removeClass("fixed"), a.removeClass("stickyNav"));
            });
        }),
        $(window).on("load resize", function () {
            $(window).width() < 768 && (e.wrap('<div class="toggle-placeholder"></div>'), $(".toggle-placeholder").height(e.outerHeight()));
        });


    // URL of the JSON file
    const url = 'https://raw.githubusercontent.com/kuldeepsingh-in/kuldeepsingh-in.github.io/main/badgeData.json';
    const statsURL = 'https://api.visitorbadge.io/api/status?path=https%3A%2F%2Fgithub.com%2Fkuldeepsingh-in%2Fkuldeepsingh-in'

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

                cardBody.appendChild(badgeTitle);
                badgeCard.appendChild(badgeImage);
                badgeCard.appendChild(lineDiv);
                badgeCard.appendChild(cardBody);

                badgeContainer.appendChild(badgeCard);
            }
        });

    // Fetch visitor count from api
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
            var badgeContainer = document.getElementById("dynamicBadges");
            // Create visitor label
            var countTet = 'Visitors: ' + ' ' + visitorCountJson.total.toLocaleString();
            document.getElementById("visitorCount").innerHTML = countTet;
            //window.alert(countTet);

        });
});

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

// Function to handle fallback image loading
function createFallbackImageHandler(fallbackImageUrl) {
    return function () {
        this.src = fallbackImageUrl;
    };
}

var experienceList = [
    {
        company: "PwC UK",
        jobTitle: "Manager / Cloud Solution Architect",
        date: "June 2022 - Present",
        location: "London, UK",
        imageSrc: "images/Company/4-pwc.png"
    },
    {
        company: "Microsoft",
        jobTitle: "Cloud Solution Architect - Engineering",
        date: "July 2019 - May2022",
        location: "London, UK",
        imageSrc: "images/Company/3-msft.png"
    },
    {
        company: "Microsoft",
        jobTitle: "Consultant",
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
    },
    {
        company: "Icertis",
        jobTitle: "Software Analyst – Cloud Technologies",
        date: "Aug 2012 - Jul 2015",
        location: "Pune, India",
        imageSrc: "images/Company/1-icertis.png"
    }
];

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
    var heading = document.createElement("h5");
    //heading.className = "";
    heading.textContent = experienceList[i].company;

    // Create the span element for job title
    var jobTitle = document.createElement("h3");
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
