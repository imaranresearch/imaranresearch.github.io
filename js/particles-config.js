// Configuration mimicking a DEM / Granular Flow simulation
particlesJS('simulation-canvas', {
    "particles": {
        "number": {
            "value": 45, // Number of spheres
            "density": {
                "enable": true,
                "value_area": 400
            }
        },
        "color": {
            // Using a mix of your brand blues and slate colors
            "value": ["#0ea5e9", "#0369a1", "#94a3b8"]
        },
        "shape": {
            "type": "circle", // Strict spheres
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 12, // Larger sizes to look like actual particles/powder
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false // Turned off to prevent the "web" look; we want independent spheres
        },
        "move": {
            "enable": true,
            "speed": 2, // Physical movement speed
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce", // Important: Makes them bounce off the walls of the div
            "bounce": true,       // Important: Makes them interact physically
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
                "mode": "repulse" // Mimics a physical force field when the mouse hovers
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Adds more particles on click
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 80,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
