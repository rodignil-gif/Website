const maskCanvas = document.getElementById("mask-canvas");

if (maskCanvas) {
    const ctx = maskCanvas.getContext("2d");

    const draw = (time) => {
        ctx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
        ctx.fillStyle = "#f5efe2";
        ctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

        const cx = maskCanvas.width / 2;
        const cy = maskCanvas.height / 2;

        ctx.strokeStyle = "rgba(196, 134, 60, 0.28)";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(cx, cy, 180, 0, Math.PI * 2);
        ctx.stroke();

        for (let i = 0; i < 7; i += 1) {
            const angle = time * 0.0002 + (Math.PI * 2 * i) / 7;
            const x = cx + Math.cos(angle) * 170;
            const y = cy + Math.sin(angle) * 170;
            ctx.fillStyle = i % 2 === 0 ? "#d48d46" : "#1d4f7a";
            ctx.beginPath();
            ctx.ellipse(x, y, 34, 48, angle, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = "rgba(255,255,255,0.75)";
        ctx.beginPath();
        ctx.ellipse(cx, cy, 70, 92, 0, 0, Math.PI * 2);
        ctx.fill();

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
