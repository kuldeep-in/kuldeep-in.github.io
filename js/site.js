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
    { text: "ower BI / Power Apps" }
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