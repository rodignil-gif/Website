const moonCanvas = document.getElementById("moon-canvas");

if (moonCanvas) {
    const ctx = moonCanvas.getContext("2d");
    const fireflies = Array.from({ length: 28 }, () => ({
        x: Math.random() * moonCanvas.width,
        y: Math.random() * moonCanvas.height,
        size: 1 + Math.random() * 3
    }));

    const draw = (time) => {
        ctx.clearRect(0, 0, moonCanvas.width, moonCanvas.height);
        const gradient = ctx.createLinearGradient(0, 0, 0, moonCanvas.height);
        gradient.addColorStop(0, "#10203d");
        gradient.addColorStop(1, "#07111f");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, moonCanvas.width, moonCanvas.height);

        ctx.fillStyle = "#e8ecff";
        ctx.beginPath();
        ctx.arc(130, 90, 44, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(248, 186, 84, 0.75)";
        ctx.beginPath();
        ctx.arc(560, 70, 28, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#172b3a";
        ctx.beginPath();
        ctx.moveTo(0, 280);
        ctx.lineTo(120, 200);
        ctx.lineTo(260, 250);
        ctx.lineTo(420, 180);
        ctx.lineTo(720, 280);
        ctx.lineTo(720, 360);
        ctx.lineTo(0, 360);
        ctx.closePath();
        ctx.fill();

        fireflies.forEach((fly, index) => {
            ctx.fillStyle = `rgba(255, 223, 132, ${0.4 + Math.sin(time * 0.002 + index) * 0.3})`;
            ctx.beginPath();
            ctx.arc(fly.x + Math.sin(time * 0.001 + index) * 10, fly.y + Math.cos(time * 0.0012 + index) * 8, fly.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
