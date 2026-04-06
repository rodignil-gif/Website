const carnivalCanvas = document.getElementById("carnival-canvas");

if (carnivalCanvas) {
    const ctx = carnivalCanvas.getContext("2d");

    const draw = (time) => {
        ctx.clearRect(0, 0, carnivalCanvas.width, carnivalCanvas.height);
        ctx.fillStyle = "#160d0d";
        ctx.fillRect(0, 0, carnivalCanvas.width, carnivalCanvas.height);

        ctx.fillStyle = "rgba(255, 244, 224, 0.06)";
        ctx.fillRect(60, 40, 400, 500);

        const swing = Math.sin(time * 0.002) * 80;
        ctx.strokeStyle = "#f0d2a4";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(carnivalCanvas.width / 2, 0);
        ctx.lineTo(carnivalCanvas.width / 2 + swing, 220);
        ctx.stroke();

        ctx.fillStyle = "#c6372b";
        ctx.beginPath();
        ctx.arc(carnivalCanvas.width / 2 + swing, 250, 26, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255, 207, 120, 0.7)";
        for (let i = 0; i < 8; i += 1) {
            ctx.beginPath();
            ctx.arc(70 + i * 55, 70 + Math.sin(time * 0.002 + i) * 6, 5, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
