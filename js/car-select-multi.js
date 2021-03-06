let eS = document.getElementById('engine_start');

let slides = document.getElementsByClassName("your-class slider-down");
let slider = document.getElementById('slider');

let playerCarSelect = 0;

let scoreV = [50, 40, 30, 24, 19, 15, 12, 10, 8, 6, 5, 4, 3, 2, 1, 0];

let playerStartHeightPos = .7;

var moveD = 6;
var speed = 9.5
var turn_var = 35;

let lock_prius = 5500;
let lock_cbr = 2500;
let lock_scania = 3500;
let lock_volvo = 2000;
let lock_bmw_x5 = 5000;
let lock_f1 = 5000;
let lock_buggati = 4500;
let lock_fj = 1500;
let lock_enzo = 4000;
let lock_tesla = 3000;
let lock_i8 = 3500;
let lock_passat = 2000;
let lock_golf = 2500;
let lock_camry = 3000;
let lock_mazda = 4000;
let lock_cupra = 9000;
let lock_new_leon = 2500;

function locked_cars() {
    lock_cars.onclick = () => { main_theme.volume = .35; acces_denied.play(); setTimeout(() => main_theme.volume = 1, 2000) };
    prius_main.onclick = () => {
        moveD = 5.4545;
        speed = 10.45;
        if (localStorage.getItem('score') < lock_prius) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_prius} or more!`;
            $("#slider-down-prius").css("opacity", ".5");
            $("#slider-down-prius .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_prius) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-prius").css("opacity", "1");
            $("#slider-down-prius .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    panamera_main.onclick = () => {
        moveD = 4.444;
        speed = 12.825;
        turn_var = 25;
    }
    polestar_main.onclick = () => {
        moveD = 5.4545;
        speed = 10.45;
        turn_var = 23;
    }
    gtr_main.onclick = () => {
        moveD = 4.286;
        speed = 13.3;
        turn_var = 21;
    }
    i8_main.onclick = () => {
        moveD = 4.8;
        speed = 11.875;
        turn_var = 22;
        if (localStorage.getItem('score') < lock_i8) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_i8} or more!`;
            $("#slider-down-i8").css("opacity", ".5");
            $("#slider-down-i8 .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_i8) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-i8").css("opacity", "1");
            $("#slider-down-i8 .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    tesla_main.onclick = () => {
        moveD = 4.138;
        speed = 13.775;
        turn_var = 25;
        if (localStorage.getItem('score') < lock_tesla) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_tesla} or more!`;
            $("#slider-down-tesla").css("opacity", ".5");
            $("#slider-down-tesla .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_tesla) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-tesla").css("opacity", "1");
            $("#slider-down-tesla .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    scania_main.onclick = () => {
        moveD = 9;
        speed = 6.3333;
        turn_var = 50;
        if (localStorage.getItem('score') < lock_scania) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_scania} or more!`;
            $("#slider-down-scania").css("opacity", ".5");
            $("#slider-down-scania .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_scania) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-scania").css("opacity", "1");
            $("#slider-down-scania .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    cbr_main.onclick = () => {
        moveD = 3;
        speed = 19;
        turn_var = 18;
        if (localStorage.getItem('score') < lock_cbr) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_cbr} or more!`;
            $("#slider-down-cbr").css("opacity", ".5");
            $("#slider-down-cbr .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_cbr) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-cbr").css("opacity", "1");
            $("#slider-down-cbr .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    f1_main.onclick = () => {
        moveD = 3;
        speed = 19;
        turn_var = 15;
        if (localStorage.getItem('score') < lock_f1) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_f1} or more!`;
            $("#slider-down-f1").css("opacity", ".5");
            $("#slider-down-f1 .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_f1) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-f1").css("opacity", "1");
            $("#slider-down-f1 .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    bmw_x5_main.onclick = () => {
        moveD = 3.6363;
        speed = 15.675;
        turn_var = 27;
        if (localStorage.getItem('score') < lock_bmw_x5) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_bmw_x5} or more!`;
            $("#slider-down-bmw_x5").css("opacity", ".5");
            $("#slider-down-bmw_x5 .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_bmw_x5) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-bmw_x5").css("opacity", "1");
            $("#slider-down-bmw_x5 .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    volvo_main.onclick = () => {
        moveD = 4.138;
        speed = 13.775;
        turn_var = 29;
        if (localStorage.getItem('score') < lock_volvo) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_volvo} or more!`;
            $("#slider-down-volvo").css("opacity", ".5");
            $("#slider-down-volvo .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_volvo) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-volvo").css("opacity", "1");
            $("#slider-down-volvo .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    fj_main.onclick = () => {
        moveD = 5;
        speed = 11.4;
        turn_var = 40;
        if (localStorage.getItem('score') < lock_fj) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_fj} or more!`;
            $("#slider-down-fj").css("opacity", ".5");
            $("#slider-down-fj .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_fj) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-fj").css("opacity", "1");
            $("#slider-down-fj .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    buggati_main.onclick = () => {
        moveD = 2.7272;
        speed = 20.9;
        turn_var = 22;
        if (localStorage.getItem('score') < lock_buggati) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_buggati} or more!`;
            $("#slider-down-buggati").css("opacity", ".5");
            $("#slider-down-buggati .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_buggati) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-buggati").css("opacity", "1");
            $("#slider-down-buggati .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    enzo_main.onclick = () => {
        moveD = 3.333;
        speed = 17.1;
        turn_var = 21;
        if (localStorage.getItem('score') < lock_enzo) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_enzo} or more!`;
            $("#slider-down-enzo").css("opacity", ".5");
            $("#slider-down-enzo .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_enzo) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-enzo").css("opacity", "1");
            $("#slider-down-enzo .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    passat_main.onclick = () => {
        moveD = 5.4545;
        speed = 10.45;
        if (localStorage.getItem('score') < lock_passat) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_passat} or more!`;
            $("#slider-down-passat").css("opacity", ".5");
            $("#slider-down-passat .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_passat) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-passat").css("opacity", "1");
            $("#slider-down-passat .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    golf_main.onclick = () => {
        moveD = 5.4545;
        speed = 10.45;
        turn_var = 32;
        if (localStorage.getItem('score') < lock_golf) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_golf} or more!`;
            $("#slider-down-golf").css("opacity", ".5");
            $("#slider-down-golf .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_golf) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-golf").css("opacity", "1");
            $("#slider-down-golf .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    camry_main.onclick = () => {
        moveD = 5.4545;
        speed = 10.45;
        turn_var = 37;
        if (localStorage.getItem('score') < lock_camry) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_camry} or more!`;
            $("#slider-down-camry").css("opacity", ".5");
            $("#slider-down-camry .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_camry) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-camry").css("opacity", "1");
            $("#slider-down-camry .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    mazda_main.onclick = () => {
        moveD = 5;
        speed = 11.4;
        if (localStorage.getItem('score') < lock_mazda) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_mazda} or more!`;
            $("#slider-down-mazda").css("opacity", ".5");
            $("#slider-down-mazda .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_mazda) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-mazda").css("opacity", "1");
            $("#slider-down-mazda .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    cupra_main.onclick = () => {
        moveD = 3.333;
        speed = 17.1;
        turn_var = 19;
        if (localStorage.getItem('score') < lock_cupra) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_cupra} or more!`;
            $("#slider-down-cupra").css("opacity", ".5");
            $("#slider-down-cupra .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_cupra) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-cupra").css("opacity", "1");
            $("#slider-down-cupra .slick-list.draggable").css("pointer-events", "auto");
        }
    }
    new_leon_main.onclick = () => {
        turn_var = 31;
        if (localStorage.getItem('score') < lock_new_leon) {
            $("#lock_cars").addClass("active_lock");
            document.querySelector("#lock_cars p").innerText = `You may take score ${lock_new_leon} or more!`;
            $("#slider-down-new_leon").css("opacity", ".5");
            $("#slider-down-new_leon .slick-list.draggable").css("pointer-events", "none");
            $("#lock_cars").css("z-index", "2");
        }
        if (localStorage.getItem('score') >= lock_new_leon) {
            $("#lock_cars").css("z-index", "-1");
            $("#slider-down-new_leon").css("opacity", "1");
            $("#slider-down-new_leon .slick-list.draggable").css("pointer-events", "auto");
        }
    }
}

function clearSlider() {
    slider.style.display = "none";
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}

function showSlider() {
    slider.style.display = "block";
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
}

function clearCarPreloadDOM() {
    if (document.getElementById('game_cars') != null) {
        document.getElementById('game_cars').remove();
    }
    if (document.getElementById('for_name') != null) {
        document.getElementById('for_name').remove();
    }
    if (document.getElementById('pervue') != null) {
        document.getElementById('pervue').remove();
    }
}

$(document).ready(function () {
    $(".slider-down").on("beforeChange", function () { spray.play() });
    $(".up_slider").on("beforeChange", function () { car_select.play(); });
});


function upSlider() {
    let sliderX = document.getElementsByClassName('your-class slider-down');
    for (let i = 0; i < sliderX.length; i++) { sliderX[i].style.top = '-110%'; }
}

$(document).ready(function () {
    $(".main_screen_cars_img").click(function () {
        moveD = 6;
        speed = 9.5;
        turn_var = 35;
        $("#lock_cars").removeClass("active_lock");
        locked_cars();
        upSlider();
        returnStartPos();
        document.getElementById(`slider-down-${this.name}`).style.top = '50%';
        $("#cbr_main").click(function () {
            setTimeout(() => { returnStartPosMoto() }, 1500)
        })
    });
});

function setPosY() {
    return () => {player.y = canvas.height - (player.image.height * scale) - 50; player2.y = canvas.height - (player.image.height * scale) - 50;}
}

var isPolice = false;

$(document).ready(function () {
    $("#slick-slide77").click(function () {
        prius_function();
        return isPolice = true;
    })
    $(".cars_img").click(function () {
        setScreen();
        isPolice = false;
        eS.play();
        $(`#slider-down-${this.name}`)[0].style.top = '-110%';
        document.getElementById('slider').style.top = '-110%';
        document.getElementById('timer').style.color = 'orange';
        setTimeout(start, 500);
        sessionStorage.setItem('last down slider', document.getElementById(`slider-down-${this.name}`).id);
        sessionStorage.setItem('current car', this.alt);
        player.image.src = `./images/Smooth_models/${this.alt}.png`;

        let car_count = document.querySelectorAll(`#slider-down-${this.name}`)[0].children[1].children[0].childElementCount; 
        let car_number = getRandomIntInclusive(1, car_count);
        let str = this.alt;
        str = str.slice(0, -1); 
        player2.image.src = `./images/Smooth_models/${str}${car_number}.png`;
        if (this.alt == "bmw_x5_1") player2.image.src = `./images/Smooth_models/bmw_x5_3.png`;
        if (this.alt == "celica_1") player2.image.src = `./images/Smooth_models/celica_2.png`;
        if (this.alt == "golf_1") player2.image.src = `./images/Smooth_models/golf_2.png`;
        if (this.alt == "mazda_1") player2.image.src = `./images/Smooth_models/mazda_2.png`;
        if (this.alt == "superb_1") player2.image.src = `./images/Smooth_models/superb_2.png`;
        if (this.alt == "camry_1") player2.image.src = `./images/Smooth_models/camry_2.png`;
    });
});

function returnStartPosMoto() {
    player.x = (canvas.width / 2) - (176 * scale / 2);
    player.y = canvas.height * .82;
    player2.x = (canvas.width / 2) - (176 * scale / 2);
    player2.y = canvas.height * .82;
}
function returnStartPos() {
    player.x = 262;
    player2.x = 349;
}

function sgu() {
    if (sessionStorage.getItem('current car') == 'prius_police') {
        document.getElementById('sgu_sound').play();
        for (let i = 0; i < objects.length; i++) {
            if (((player.x - objects[i].x) <= 17) && ((player.x - objects[i].x) >= -17)) {
                if (objects[i].image.outerHTML != "<img src=\"images/Smooth_models/road_work.png\">" && objects[i].image.outerHTML != "<img src=\"images/Smooth_models/road_barrier_2.png\">" && objects[i].image.outerHTML != "<img src=\"images/Smooth_models/road_barrier_3.png\">" && objects[i].image.outerHTML != "<img src=\"images/Smooth_models/road_barrier_4.png\">") {
                    if (objects[i].y > 0) {
                        if (objects[i].x >= 340 && objects[i].x <= canvas.width) {
                            let move = setInterval(() => {
                                objects[i].x -= 8.3
                            }, 35);
                            setTimeout(() => { clearInterval(move); }, 350);
                        }
                        if (objects[i].x < 340 && objects[i].x >= 0) {
                            let move = setInterval(() => {
                                objects[i].x += 8.3
                            }, 35);
                            setTimeout(() => { clearInterval(move); }, 350);
                        }
                    }
                }
            }
            if (((player2.x - objects[i].x) <= 17) && ((player2.x - objects[i].x) >= -17)) {
                if (objects[i].image.outerHTML != "<img src=\"images/Smooth_models/road_work.png\">" && objects[i].image.outerHTML != "<img src=\"images/Smooth_models/road_barrier_2.png\">" && objects[i].image.outerHTML != "<img src=\"images/Smooth_models/road_barrier_3.png\">" && objects[i].image.outerHTML != "<img src=\"images/Smooth_models/road_barrier_4.png\">") {
                    if (objects[i].y > 0) {
                        if (objects[i].x >= 340 && objects[i].x <= canvas.width) {
                            let move = setInterval(() => {
                                objects[i].x -= 8.3
                            }, 35);
                            setTimeout(() => { clearInterval(move); }, 350);
                        }
                        if (objects[i].x < 340 && objects[i].x >= 0) {
                            let move = setInterval(() => {
                                objects[i].x += 8.3
                            }, 35);
                            setTimeout(() => { clearInterval(move); }, 350);
                        }
                    }
                }
            }
        }
    }
}

function siren() {
    document.getElementById('siren_sound').play();
}

function prius_function() {
    eS.play();
    upSlider();
    document.getElementById('timer').style.color = 'aqua';
    document.getElementById('slider').style.top = '-110%';
    sessionStorage.setItem('last down slider', 'slider-down-prius');
    sessionStorage.setItem('current car', 'prius_police');
    setTimeout(start, 500);
    let indexP = 0;
    let policeSrc = `./images/gif/1.png`;

    setInterval(changeImageRed, 100);
    function changeImageRed() {
        if (!isPolice) {
            return "";
        }

        let images = ['1', '6', '1', '12'];
        indexP = (indexP + 1) % (images.length);
        return policeSrc = `./images/gif/${images[indexP]}.png`;
    }

    setInterval(srcPolice, 40);
    function srcPolice() {
        if (!isPolice) {
            return;
        }

        player.image.src = policeSrc;
        player2.image.src = policeSrc;
    }

    document.addEventListener('keydown', function (event) {
        if (event.shiftKey) {
            if (sessionStorage.getItem('current car') == 'prius_police') {
                siren();
            }
        }
        if (event.ctrlKey) {
            sgu();
        }
    });
}

$("#siren")[0].onclick = siren;
$("#sgu")[0].onclick = sgu;
