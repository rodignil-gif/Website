const pollenCanvas = document.getElementById("pollen-canvas");

if (pollenCanvas) {
    const ctx = pollenCanvas.getContext("2d");
    const spores = Array.from({ length: 48 }, () => ({
        x: Math.random() * pollenCanvas.width,
        y: Math.random() * pollenCanvas.height,
        radius: 2 + Math.random() * 8,
        speed: 0.2 + Math.random() * 0.8
    }));

    const draw = (time) => {
        ctx.clearRect(0, 0, pollenCanvas.width, pollenCanvas.height);
        ctx.fillStyle = "rgba(245, 238, 228, 0.1)";
        ctx.fillRect(0, 0, pollenCanvas.width, pollenCanvas.height);

        for (let i = 0; i < 3; i += 1) {
            const pulse = 24 + Math.sin(time * 0.001 + i) * 16;
            ctx.fillStyle = i === 1 ? "rgba(153, 188, 84, 0.22)" : "rgba(108, 62, 83, 0.18)";
            ctx.beginPath();
            ctx.ellipse(140 + i * 120, 220 + Math.sin(time * 0.0015 + i) * 10, 80 + pulse, 60 + pulse * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        spores.forEach((spore) => {
            spore.y -= spore.speed;
            if (spore.y < -12) {
                spore.y = pollenCanvas.height + 12;
                spore.x = Math.random() * pollenCanvas.width;
            }

            ctx.fillStyle = "rgba(205, 240, 129, 0.6)";
            ctx.beginPath();
            ctx.arc(spore.x + Math.sin(time * 0.001 + spore.x) * 2, spore.y, spore.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
