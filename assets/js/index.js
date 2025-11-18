const imgPaths = {
    light: ["/assets/img/profile-pic/light-mode/formal-pose.svg", "/assets/img/profile-pic/light-mode/shy-pose.svg"],
    dark:  ["/assets/img/profile-pic/dark-mode/formal-pose.svg",  "/assets/img/profile-pic/dark-mode/shy-pose.svg"]
};

let theme = "light";
const $img = $("#profile-img");

// Show More Button
$("#show-more-btn").click(function() {
    $("#extra-content").slideToggle(250);
    $(this).text($(this).text() === "Show More" ? "Show Less" : "Show More");
});

// Theme Toggle + image update
$("#theme-toggle-btn").click(function() {
    $("body").toggleClass("dark-theme");
    theme = theme === "light" ? "dark" : "light";
    $img.attr("src", imgPaths[theme][0]);
});

// Hover swap
$img.hover(
    () => $img.attr("src", imgPaths[theme][1]),
    () => $img.attr("src", imgPaths[theme][0])
);
