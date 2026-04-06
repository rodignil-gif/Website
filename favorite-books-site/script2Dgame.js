const atlasCanvas = document.getElementById("atlas-canvas");

if (atlasCanvas) {
    const ctx = atlasCanvas.getContext("2d");
    const islands = Array.from({ length: 6 }, (_, index) => ({
        x: 80 + index * 80,
        y: 110 + (index % 3) * 55,
        drift: 0.5 + Math.random()
    }));

    const draw = (time) => {
        ctx.clearRect(0, 0, atlasCanvas.width, atlasCanvas.height);

        const gradient = ctx.createLinearGradient(0, 0, 0, atlasCanvas.height);
        gradient.addColorStop(0, "#dfeeed");
        gradient.addColorStop(1, "#9ecac6");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, atlasCanvas.width, atlasCanvas.height);

        ctx.fillStyle = "rgba(255,255,255,0.35)";
        for (let i = 0; i < 5; i += 1) {
            ctx.beginPath();
            ctx.arc(80 + i * 110, 70 + Math.sin(time * 0.001 + i) * 8, 24, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.strokeStyle = "rgba(41, 82, 91, 0.25)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(40, 280);
        ctx.bezierCurveTo(120, 250, 180, 320, 280, 270);
        ctx.bezierCurveTo(360, 230, 430, 310, 520, 240);
        ctx.stroke();

        islands.forEach((island, index) => {
            const wobble = Math.sin(time * 0.0012 * island.drift + index) * 10;
            ctx.fillStyle = index % 2 === 0 ? "#d37d62" : "#5e8f8d";
            ctx.beginPath();
            ctx.moveTo(island.x, island.y + wobble);
            ctx.bezierCurveTo(island.x + 14, island.y - 28 + wobble, island.x + 56, island.y - 12 + wobble, island.x + 64, island.y + 18 + wobble);
            ctx.bezierCurveTo(island.x + 50, island.y + 40 + wobble, island.x + 12, island.y + 38 + wobble, island.x, island.y + wobble);
            ctx.fill();
        });

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
