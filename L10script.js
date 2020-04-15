function getGh() {
    const gh = new XMLHttpRequest();
    gh.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            document.getElementById("gh1").innerHTML = "Repo Name: " + obj[0].name;
            document.getElementById("gh2").innerHTML = obj[0].html_url;
            document.getElementById("gh3").innerHTML = "Repo Name: " + obj[1].name;
            document.getElementById("gh4").innerHTML = obj[1].html_url;
        };
    };
    gh.open("GET", "https://api.github.com/users/michealskinner/repos", true);
    gh.send();
};


$(".skill").hover(function () {
    $(this).css("color", "red");
}, function () {
    $(this).css("color", "lightblue");
});


$(".img").hover(function () {
    $(this).css("max-width", "75px");
}, function () {
    $(this).css("max-width", "50px")
});

