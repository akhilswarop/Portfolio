document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");

    const r = new rive.Rive({
        src: "loading.riv",
        canvas: canvas,
        autoplay: true,
        stateMachines: "State Machine 1",
        onLoad: () => {
            r.resizeDrawingSurfaceToCanvas();
        },
        onError: (error) => {
            console.error("Error loading Rive animation:", error);
        }
    });

    setTimeout(() => {
        document.querySelector('.container').remove();
        window.location.replace('landing.html') // Reset background color if needed
    }, 7350);
});

