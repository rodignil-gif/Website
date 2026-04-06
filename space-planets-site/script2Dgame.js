const orbitCanvas = document.getElementById("orbit-canvas");

if (orbitCanvas) {
    const ctx = orbitCanvas.getContext("2d");
    const stars = Array.from({ length: 90 }, () => ({
        x: Math.random() * orbitCanvas.width,
        y: Math.random() * orbitCanvas.height,
        size: Math.random() * 2 + 0.6
    }));

    const draw = (time) => {
        ctx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
        ctx.fillStyle = "#08111f";
        ctx.fillRect(0, 0, orbitCanvas.width, orbitCanvas.height);

        stars.forEach((star, index) => {
            ctx.fillStyle = `rgba(208, 234, 255, ${0.3 + Math.sin(time * 0.001 + index) * 0.2})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });

        const centerX = orbitCanvas.width / 2;
        const centerY = orbitCanvas.height / 2;

        for (let ring = 0; ring < 4; ring += 1) {
            ctx.strokeStyle = ring % 2 === 0 ? "rgba(88, 200, 255, 0.35)" : "rgba(255, 166, 92, 0.28)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, 100 + ring * 38, 90 + ring * 28, time * 0.0002 + ring, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.fillStyle = "rgba(255,255,255,0.08)";
        ctx.beginPath();
        ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
        ctx.fill();

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
