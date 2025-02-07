export function handleTheme() {
    const themeToggle = document.getElementById("checkbox");
    const buttons = document.querySelectorAll(".calc_buttons button");

    // Load theme from localStorage
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("light-theme");
        localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    });

    // Ensure button events remain functional
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            console.log("Button Clicked:", event.target.value);
            // Your existing button logic here...
        });
    });



}

