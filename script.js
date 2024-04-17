const toggleBtn = document.querySelector(".toggle");
const cont = document.querySelector(".container");
let moon, star1, star2, star3, star4, star5, star6;

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    cont.classList.toggle("bg-active");

    if(cont.classList.contains("bg-active")) {
        const cloud1 = document.createElement("img");
        const sun = document.createElement("div");
        cloud1.src = "Images/cloud1.png";
        cloud1.classList.add("cloud1");
        cont.appendChild(cloud1);

        const cloud2 = document.createElement("img");
        cloud2.src = "Images/cloud2.png";
        cloud2.classList.add("cloud2");
        cont.appendChild(cloud2);

        const cloud3 = document.createElement("img");
        cloud3.src = "Images/cloud3.png";
        cloud3.classList.add("cloud3");
        cont.appendChild(cloud3);

        const cloud4 = document.createElement("img");
        cloud4.src = "Images/cloud4.png";
        cloud4.classList.add("cloud4");
        cont.appendChild(cloud4);

        sun.classList.add("sun");
        cont.appendChild(sun);

        moon = document.querySelector('.moon');
        star1 = document.querySelector('.star1');
        star2 = document.querySelector('.star2');
        star3 = document.querySelector('.star3');
        star4 = document.querySelector('.star4');
        star5 = document.querySelector('.star5');
        star6 = document.querySelector('.star6');

        // Remove the elements from the DOM
        moon.remove();
        star1.remove();
        star2.remove();
        star3.remove();
        star4.remove();
        star5.remove();
        star6.remove();
    }
    else {
        const clouds = cont.querySelectorAll(".cloud1, .cloud2, .cloud3, .cloud4, .sun");
        clouds.forEach(cloud => {
            cloud.remove();
        });

        cont.appendChild(moon);
        cont.appendChild(star1);
        cont.appendChild(star2);
        cont.appendChild(star3);
        cont.appendChild(star4);
        cont.appendChild(star5);
        cont.appendChild(star6);
    }
})