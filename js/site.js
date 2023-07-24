// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(function () {
    "use strict";
    $(window).load(function () {
        $("body").addClass("loaded");
    }),
        $("body").scrollspy({ target: ".sidebar" });
    var o = $("html,body");
    // $(".sidebar ul li a").on("click", function (a) {
    //     o.animate({ scrollTop: $(this.hash).offset().top }, 800, "easeInOutQuart"), a.preventDefault();
    // });
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
    // $("#mix-container").mixItUp(),
    // $(".lightbox").magnificPopup({ type: "inline", fixedContentPos: !1, removalDelay: 100, closeBtnInside: !0, preloader: !1, mainClass: "mfp-fade" }),
    // $("#testimonialSlider").owlCarousel({ loop: !0, items: 1, margin: 30, dotsSpeed: 500, autoplay: !0, autoplayHoverPause: !0, autoplayTimeout: 4e3, autoplaySpeed: 500 }),
    // $("#contactform").on("submit", function (o) {
    //     var a = $("#name").val(),
    //         e = $("#email").val(),
    //         s = $("#message").val();
    //     "" == a && $("#name").css("border-color", "rgba(255, 0, 0, 0.5)"),
    //         "" == e && $("#email").css("border-color", "rgba(255, 0, 0, 0.5)"),
    //         "" == s
    //             ? $("#message").css("border-color", "rgba(255, 0, 0, 0.5)")
    //             : $.ajax({
    //                   url: "contact_form.php",
    //                   data: $(this).serialize(),
    //                   type: "POST",
    //                   success: function (o) {
    //                       $("#success").show().fadeIn(1e3),
    //                           $("#contactform").each(function () {
    //                               this.reset();
    //                           });
    //                   },
    //                   error: function (o) {
    //                       $("#error").show().fadeIn(1e3);
    //                   },
    //               }),
    //         o.preventDefault();
    // });
    // var s = "images/marker.png",
    //     l = -37.812154,
    //     t = 144.954619,
    //     n = new GMaps({ el: "#map-canvas", lat: l, lng: t, zoom: 16, scrollwheel: !1 });
    // n.addMarker({ lat: l, lng: t, icon: s });
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

var badgeObjects = [
    {
        imageUrl: "https://images.credly.com/images/987adb7e-49be-4e24-b67e-55986bd3fe66/azure-solutions-architect-expert-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Azure Solutions Architect Expert",
        title: "Azure Solutions Architect Expert",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/c3ab66f8-5d59-4afa-a6c2-0ba30a1989ca/CERT-Expert-DevOps-Engineer-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: DevOps Engineer Expert",
        title: "DevOps Engineer Expert",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/452203ac-9ce5-40b6-a136-5fee18544a89/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Customer Data Platform Specialty",
        title: "Customer Data Platform Specialty",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/515fa1dc-ac4a-4f08-ac73-6fd9694124cb/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Azure Cosmos DB Developer Specialty",
        title: "Azure Cosmos DB Developer Specialty",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/61542181-0e8d-496c-a17c-3d4bf590eda1/azure-data-engineer-associate-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Azure Data Engineer Associate",
        title: "Azure Data Engineer Associate",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/edc0b0d8-55ec-4dfe-9353-22c1bc4e07e8/azure-database-administrator-associate-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Azure Database Administrator Associate",
        title: "Azure Database Administrator Associate",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/619f60f8-4f63-4772-910e-dc31c6f2f7e8/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Power BI Data Analyst Associate",
        title: "Power BI Data Analyst Associate",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/1ad16b6f-2c71-4a2e-ae74-ec69c4766039/azure-security-engineer-associate600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Azure Security Engineer Associate",
        title: "Azure Security Engineer Associate",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Azure Administrator Associate",
        title: "Azure Administrator Associate",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified: Azure Developer Associate",
        title: "Azure Developer Associate",
        webOnly: false
    },
    {
        imageUrl: "images/Badges/Databricks Fundamentals.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Databricks Lakehouse Fundamentals",
        title: "Databricks Lakehouse Fundamentals",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/fd6bb2af-2f05-4d9b-a23e-39f8e309a82d/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified Trainer 2023-2024",
        title: "Microsoft Certified Trainer 2023-2024",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/bb4156e4-c2e1-4399-b03c-af6feb7a6cc4/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified Trainer 2022-2023",
        title: "Microsoft Certified Trainer 2022-2023",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/a6ea4416-4f34-4a85-bc24-eb3fe32fd241/MCT-Microsoft_Certified_Trainer-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Microsoft Certified Trainer 2021-2022",
        title: "Microsoft Certified Trainer 2021-2022",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/3c27bae0-76fa-4b69-b7ac-907b4dfcf382/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "OpenHack: Modern Data Warehousing",
        title: "OpenHack: Modern Data Warehousing",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/79b22d1d-cb2d-471e-add7-bbe2e1672f61/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Kusto Detective Agency - S2E4",
        title: "Kusto Detective Agency - S2E4",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/27c40e7b-98b2-4312-b52c-4454f6c90c52/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Kusto Detective Agency - S2E3",
        title: "Kusto Detective Agency - S2E3",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/8fc10fee-7b05-4b86-8504-01abf614bcac/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Kusto Detective Agency - S2E2",
        title: "Kusto Detective Agency - S2E2",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/304d7409-3dd5-40b6-ab20-88d3ec012eb1/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Kusto Detective Agency - S2E1",
        title: "Kusto Detective Agency - S2E1",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/63873eba-9e8c-41a9-8a35-9d23adee14cb/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Azure Data Explorer In-A-Day",
        title: "Azure Data Explorer In-A-Day",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/6726e724-5ce8-477e-93f5-6b39d6933273/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Kusto Detective Agency - 2022",
        title: "Kusto Detective Agency - 2022",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/43b452c6-89f2-4649-bb84-19f3166a833e/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Kusto Detective Agency - S1E5",
        title: "Kusto Detective Agency - S1E5",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/e7522dc8-886b-4a5b-9436-535e1adaa5c5/image.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Kusto Detective Agency - S1E4",
        title: "Kusto Detective Agency - S1E4",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/6c7fb568-a3cb-4868-9563-34c31ba3e347/Valuable-Contributor-Silver.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Valuable Contributor Silver",
        title: "Valuable Contributor Silver",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/c081877f-08c1-4b72-bb79-8dd795daadff/Valuable-Contributor-Gold.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Valuable Contributor Gold",
        title: "Valuable Contributor Gold",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/e9bba6ed-6850-4c95-bc14-77886a88efc9/Onboarding-Buddy-Gold.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Onboarding Buddy Gold",
        title: "Onboarding Buddy Gold",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/5a009304-bf5b-4570-a58a-84eab2e05085/Mentor-Silver.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Mentor Silver",
        title: "Mentor Silver",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/01334c2e-86a5-49ee-8c11-2e12a482a122/Mentor-Gold.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Mentor Gold",
        title: "Mentor Gold",
        webOnly: false
    },
    {
        imageUrl: "images/Badges/CosmosDB_Mentor.jpg",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Mentor: Azure Cosmos DB",
        title: "Mentor: Azure Cosmos DB",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/d807abc0-9201-41a8-ad25-90ed4a69ee51/Acc_Badge_v4.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Accessibility in Action",
        title: "Accessibility in Action",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/2b47d3a8-9633-4a91-8c45-a58c84a070ac/LODS_Classes_Delivered_Badges_Role-01.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Skillable - First Class Delivered",
        title: "Skillable - First Class Delivered",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/28c9f5d8-5dce-4ac7-ba72-68652b57648e/LODS_Classes_Delivered_Badges_Role-02.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Skillable - 10 Classes Delivered",
        title: "Skillable - 10 Classes Delivered"
    },
    {
        imageUrl: "https://images.credly.com/images/39062840-39ce-47d5-9847-77cb60ccf5e9/LODS_Students_Reached_Badges_Role-03.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Skillable - 25 Students Reached",
        title: "Skillable - 25 Students Reached",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/0db940b3-280d-4adc-a753-6c854c75bf33/LODS_Students_Reached_Badges_Role-04.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Skillable - 50 Students Reached",
        title: "Skillable - 50 Students Reached",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/741ca87d-39d8-45aa-9e1b-f61f049af625/LODS_Students_Reached_Badges_Role-05.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Skillable - 75 Students Reached",
        title: "Skillable - 75 Students Reached",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/f4ad1de8-5729-4760-8aa4-ab7a2bf55ea0/LODS_Students_Reached_Badges_Role-06.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Skillable - 100 Students Reached",
        title: "Skillable - 100 Students Reached",
        webOnly: false
    },
    {
        imageUrl: "https://images.credly.com/images/8c6dbe49-15cf-4982-9406-ec65b75a4576/Microsoft_Exam534.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Exam 534: Architecting Microsoft Azure Solutions",
        title: "Architecting Microsoft Azure Solutions",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/c4671de2-68f7-4219-952d-2e955e25f453/exam-dp201-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "DP-201 Designing an Azure Data Solution",
        title: "DP-201 Designing an Azure Data Solution",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/af626bbe-ed13-472f-9e72-d4808474acb5/exam-dp200-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "DP-200 Implementing an Azure Data Solution",
        title: "DP-200 Implementing an Azure Data Solution",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/107e2eb6-f394-40eb-83d2-d8c9b7d34555/exam-az400-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
        title: "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/28004779-9175-4fc8-be6f-448663c9422b/exam-az301-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "AZ-301 Microsoft Azure Architect Design",
        title: "AZ-301 Microsoft Azure Architect Design",
        webOnly: true
    },
    {
        imageUrl: "https://images.credly.com/images/c66ddfa8-4e9d-41e4-bf98-244a4d55a14e/exam-az300-600x600.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "AZ-300 Microsoft Azure Architect Technologies",
        title: "AZ-300 Microsoft Azure Architect Technologies",
        webOnly: true
    },
    {
        imageUrl: "images/Badges/adf.png",
        fallbackImageUrl: "images/Badges/Badge_Fallback.png",
        altText: "Accredited: Azure Data Factory",
        title: "Accredited: Azure Data Factory",
        webOnly: true
    }
];

var badgeContainer = document.getElementById("dynamicBadges");
// Loop to create the HTML structure dynamically
for (var j = 0; j < badgeObjects.length; j++) {
    var badgeCard = document.createElement("div");
    badgeCard.classList.add("badgeCard");

    if (badgeObjects[j].webOnly) {
        badgeCard.classList.add("webOnly");
    }
    //else {
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
