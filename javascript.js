document.addEventListener("DOMContentLoaded", function() {
    const buttonClear = document.querySelector(".buttonClear");
    buttonClear.addEventListener("click", function() {
        const lada = document.querySelector(".input")
        lada.value = "";
    });
    const buttonSubmit = document.querySelector(".buttonSubmit");
    buttonSubmit.addEventListener("click", function() {
        
        const inputs = document.querySelector(".input");

        // la valeur de input il faut la mettre dans table
        inputs.value = inputs.value.trim();
        // Sélectionne le paragraphe avec le texte "bonjour"
        const paragraph = document.querySelector(".list");

        // Crée un nouvel élément de paragraphe
        const newParagraph = document.createElement("p");

        // Ajoute la valeur de l'input au paragraphe
        newParagraph.innerHTML = inputs.value;
        
        // Insère le nouveau paragraphe après le paragraphe existant
        paragraph.insertAdjacentElement('beforeend', newParagraph);

        
        // Vide l'input
        inputs.value = "";
    });
});