const dossierCanvas = document.getElementById("dossier-canvas");

if (dossierCanvas) {
    const ctx = dossierCanvas.getContext("2d");

    const draw = (time) => {
        ctx.clearRect(0, 0, dossierCanvas.width, dossierCanvas.height);
        ctx.fillStyle = "#efe6d4";
        ctx.fillRect(0, 0, dossierCanvas.width, dossierCanvas.height);

        for (let i = 0; i < 7; i += 1) {
            const height = 110 + Math.sin(time * 0.001 + i) * 22 + i * 14;
            ctx.fillStyle = i % 2 === 0 ? "#405a55" : "#9f2d2d";
            ctx.fillRect(50 + i * 60, dossierCanvas.height - height - 40, 38, height);
        }

        ctx.fillStyle = "rgba(35, 35, 35, 0.1)";
        ctx.fillRect(40, 330, 440, 12);

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
