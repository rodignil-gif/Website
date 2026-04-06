const bellCanvas = document.getElementById("bell-canvas");

if (bellCanvas) {
    const context = bellCanvas.getContext("2d");
    const sparks = Array.from({ length: 80 }, () => ({
        x: Math.random() * bellCanvas.width,
        y: Math.random() * bellCanvas.height,
        speed: 0.5 + Math.random() * 1.8,
        radius: 0.8 + Math.random() * 2.2
    }));

    const renderBell = (time) => {
        context.clearRect(0, 0, bellCanvas.width, bellCanvas.height);
        const pulse = Math.sin(time * 0.0012) * 14;
        const centerX = bellCanvas.width / 2;
        const centerY = bellCanvas.height / 2;

        context.fillStyle = "rgba(255, 168, 92, 0.08)";
        context.beginPath();
        context.arc(centerX, centerY, 170 + pulse * 0.25, 0, Math.PI * 2);
        context.fill();

        context.strokeStyle = "rgba(242, 196, 129, 0.75)";
        context.lineWidth = 6;
        context.beginPath();
        context.moveTo(centerX - 110, centerY - 100);
        context.quadraticCurveTo(centerX, centerY - 190 - pulse, centerX + 110, centerY - 100);
        context.lineTo(centerX + 130, centerY + 90);
        context.quadraticCurveTo(centerX, centerY + 165 + pulse * 0.4, centerX - 130, centerY + 90);
        context.closePath();
        context.stroke();

        context.fillStyle = "rgba(217, 143, 72, 0.3)";
        context.fill();

        context.strokeStyle = "rgba(255, 215, 155, 0.32)";
        context.beginPath();
        context.arc(centerX, centerY, 212 + pulse * 0.15, 0, Math.PI * 2);
        context.stroke();

        context.beginPath();
        context.moveTo(centerX, centerY - 70);
        context.lineTo(centerX, centerY + 110);
        context.stroke();

        sparks.forEach((spark) => {
            spark.y -= spark.speed;
            if (spark.y < -10) {
                spark.y = bellCanvas.height + 10;
                spark.x = Math.random() * bellCanvas.width;
            }

            context.fillStyle = "rgba(255, 177, 110, 0.85)";
            context.beginPath();
            context.arc(spark.x + Math.sin(time * 0.001 + spark.x) * 1.5, spark.y, spark.radius, 0, Math.PI * 2);
            context.fill();
        });

        requestAnimationFrame(renderBell);
    };

    requestAnimationFrame(renderBell);
}
