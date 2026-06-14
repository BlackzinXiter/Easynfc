/*
===================================
BRASA ENERGY DRINK - V2
Sistema de animações
===================================
*/


document.addEventListener("DOMContentLoaded", () => {


    // ===== ANIMAÇÃO DE ENTRADA =====

    const elementos = [
        document.querySelector(".marca"),
        document.querySelector(".texto"),
        document.querySelector(".imagem"),
        document.querySelector(".scroll")
    ];


    elementos.forEach((item, index) => {


        if(item){

            item.style.opacity = "0";

            item.style.transform = "translateY(40px)";


            setTimeout(() => {


                item.style.transition =
                "opacity 1s ease, transform 1s ease";


                item.style.opacity = "1";

                item.style.transform =
                "translateY(0)";


            }, 300 + (index * 250));


        }


    });


    // ===== EFEITO DO MENU =====

    const menu = document.querySelector(".menu");


    menu.addEventListener("click", () => {


        menu.style.transform = "scale(0.85)";


        setTimeout(() => {


            menu.style.transform = "scale(1)";


        }, 150);


    });



    // ===== EFEITO DE PROFUNDIDADE =====
    // Faz a imagem se mover levemente
    // acompanhando o movimento do mouse


    const imagem = document.querySelector(".imagem");


    document.addEventListener("mousemove", (e) => {


        const x =
        (e.clientX / window.innerWidth - 0.5) * 15;


        const y =
        (e.clientY / window.innerHeight - 0.5) * 15;


        imagem.style.transform =
        `translate(${x}px, ${y}px)`;


    });



});