//Selecciona tots els elements que tenen la classe "votacions_resposta"
const respostes = document.querySelectorAll(".votacions_resposta");
//Recorre totes les respostes trobades
respostes.forEach(resposta => {
    //Afegeix un event listener perquè detecti quan l’usuari fa clic
    resposta.addEventListener("click", () => {
        //Guarda el contenidor pare de la resposta clicada
        const grup = resposta.parentElement;
        //Selecciona totes les respostes dins del mateix grup
        const totesRespostes = grup.querySelectorAll(".votacions_resposta");
        //Recorre totes les respostes del grup
        totesRespostes.forEach(r => {
            //Elimina la classe "activa" de totes les respostes
            r.classList.remove("activa");
        });
        //Afegeix la classe "activa" només a la resposta clicada
        //Això canvia l’estil visual i marca la resposta com seleccionada
        resposta.classList.add("activa");
    });

});

//Selecciona tots els elements que tenen la classe "calendari_total_dies"
const contenidorDies = document.querySelector(".calendari_total_dies");
//Bucle que genera els dies del mes (de l’1 al 31)
for(let i = 1; i <= 31; i++){
    //Crea un nou element <div> per representar un dia del calendari
    const dia = document.createElement("div");
    //Afegeix la classe que defineix l’estil visual dels dies
    //Això permet aplicar-li estils CSS
    dia.classList.add("calendari_dies");
    //Insereix el número del dia dins del div
    dia.innerHTML = `<p>${i}</p>`;
    //Insereix el div creat dins del contenidor del calendari
    contenidorDies.appendChild(dia);
}