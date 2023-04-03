let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

let lightThemeImgUrl = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)";
let darkThemeImgUrl = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)";

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInput.value;

        if (themeUserInputVal === "Light") {
            bgContainer.style.backgroundImage = lightThemeImgUrl;
            heading.style.color = "#014d40";
        } else if (themeUserInputVal === "Dark") {
            bgContainer.style.backgroundImage = darkThemeImgUrl;
            heading.style.color = "white";
        } else {
            alert("Enter the valid theme");
        }
    }
}



themeUserInput.addEventListener("keydown", changeTheme)