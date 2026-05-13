function switchTheme() {
    document.body.classList.toggle("coffeeTheme");

    if(document.body.classList.contains("coffeeTheme")) {
        localStorage.setItem("theme", "coffeeTheme");
    } else {
        localStorage.removeItem("theme");
    }
}

if(localStorage.getItem("theme") === "coffeeTheme") {
    document.body.classList.add("coffeeTheme");
}
