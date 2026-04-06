const arcadeCanvas = document.getElementById("arcade-canvas");

if (arcadeCanvas) {
    const ctx = arcadeCanvas.getContext("2d");
    const bars = Array.from({ length: 28 }, (_, index) => ({ index, height: 20 }));

    const draw = (time) => {
        ctx.clearRect(0, 0, arcadeCanvas.width, arcadeCanvas.height);
        ctx.fillStyle = "#050508";
        ctx.fillRect(0, 0, arcadeCanvas.width, arcadeCanvas.height);

        bars.forEach((bar) => {
            bar.height = 30 + Math.abs(Math.sin(time * 0.003 + bar.index * 0.5)) * 180;
            ctx.fillStyle = bar.index % 3 === 0 ? "#d5ff2f" : bar.index % 3 === 1 ? "#ff2ec7" : "#37e3ff";
            ctx.fillRect(18 + bar.index * 26, arcadeCanvas.height - bar.height - 34, 18, bar.height);
        });

        ctx.fillStyle = "#ffef5e";
        ctx.fillRect(arcadeCanvas.width / 2 - 28, 120 + Math.sin(time * 0.004) * 16, 56, 56);

        requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
}
