// Configuration mimicking an agitated Granular Flow / DEM simulation
particlesJS('simulation-canvas', {
    "particles": {
        "number": {
            "value": 80, // Increased density for a realistic powder/fluid look
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            // Bright cyan, white, and soft blue to contrast against the dark background
            "value": ["#38bdf8", "#ffffff", "#bae6fd", "#0ea5e9"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.9,
            "random": true, // Gives a sense of depth (some particles look further back)
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": false
            }
        },
        "size": {
            "value": 8, // Varying sizes typical of polydisperse granular media
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false // No web lines, just pure physical spheres
        },
        "move": {
            "enable": true,
            "speed": 3, // Slightly faster, agitated movement
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce", // They will bounce off the invisible edges of the div
            "bounce": true,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Particles aggressively dodge the user's cursor
            },
            "onclick": {
                "enable": true,
                "mode": "bubble" // Clicking causes a localized "explosion" of particle sizes
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "bubble": {
                "distance": 150,
                "size": 15,
                "duration": 0.2,
                "opacity": 1,
                "speed": 3
            }
        }
    },
    "retina_detect": true
});
