/*
====================================
 BRASA ENERGY DRINK - V3
 Sistema de animações premium
====================================
*/


document.addEventListener("DOMContentLoaded", () => {


    /* =============================
        ENTRADA CINEMATOGRÁFICA
    ============================== */

    const elementos = [
        document.querySelector(".logo"),
        document.querySelector(".text"),
        document.querySelector(".product"),
        document.querySelector(".info"),
        document.querySelector(".scroll")
    ];


    elementos.forEach((item, index) => {


        if(item){

            item.style.opacity = "0";

            item.style.transform = 
            "translateY(35px)";


            setTimeout(() => {


                item.style.transition =
                "opacity 1s ease, transform 1s ease";


                item.style.opacity = "1";


                item.style.transform =
                "translateY(0)";


            }, 200 + (index * 250));

        }


    });


    /* =============================
          EFEITO DO MENU
    ============================== */


    const menu = document.querySelector(".menu");


    menu.addEventListener("click", () => {


        menu.style.transform =
        "scale(0.85) rotate(8deg)";


        setTimeout(() => {


            menu.style.transform =
            "scale(1) rotate(0deg)";


        }, 180);


    });


    /* =============================
          EFEITO DE PROFUNDIDADE
    ============================== */


    const lata = document.querySelector(".product");


    document.addEventListener("mousemove", (e) => {


        const eixoX =
        (e.clientX / window.innerWidth - 0.5) * 12;


        const eixoY =
        (e.clientY / window.innerHeight - 0.5) * 12;


        lata.style.transform =
        `translate(${eixoX}px, ${eixoY}px)`;


    });


    /* =============================
      PEQUENO BRILHO NA TELA
    ============================== */


    setInterval(() => {


        document.body.style.filter =
        "brightness(1.02)";


        setTimeout(() => {


            document.body.style.filter =
            "brightness(1)";


        }, 120);


    }, 6000);


});