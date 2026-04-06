const mapCanvas = document.getElementById("map-canvas");

if (mapCanvas) {
    const ctx = mapCanvas.getContext("2d");

    const draw = (time) => {
        ctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
        ctx.fillStyle = "#f0dfc0";
        ctx.fillRect(0, 0, mapCanvas.width, mapCanvas.height);

        ctx.strokeStyle = "rgba(94, 117, 115, 0.3)";
        ctx.lineWidth = 2;
        for (let i = 0; i < 7; i += 1) {
            ctx.beginPath();
            ctx.moveTo(20, 60 + i * 50);
            ctx.bezierCurveTo(180, 30 + i * 55, 340, 90 + i * 45, 600, 50 + i * 52);
            ctx.stroke();
        }

        ctx.fillStyle = "#bb5c33";
        const pulse = Math.sin(time * 0.002) * 8;
        ctx.beginPath();
        ctx.arc(120, 120, 10 + pulse, 0, Math.PI * 2);
        ctx.arc(320, 220, 10 - pulse * 0.4, 0, Math.PI * 2);
        ctx.arc(500, 150, 10 + pulse * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#bb5c33";
        ctx.beginPath();
        ctx.moveTo(120, 120);
        ctx.lineTo(320, 220);
        ctx.lineTo(500, 150);
        ctx.stroke();

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
