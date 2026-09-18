function crearFlores() {

    for (let i = 0; i < 25; i++) {

        const flor = document.createElement("div");

        flor.classList.add("flor");

        flor.innerHTML = "🌻";

        flor.style.left = Math.random() * 100 + "%";

        flor.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        flor.style.fontSize =
            (20 + Math.random() * 30) + "px";

        document.getElementById("flores").appendChild(flor);

        setTimeout(() => {
            flor.remove();
        }, 7000);
    }
}