// Fonction pour avoir des conteneur avec boutons pour la faq


var boutons = document.getElementsByClassName("faqboutons");
var i;
// Vérifie la longeur du boutons et fait en sorte que la boite de texte suit la longeur et sois hidden et shown quand on clique dessu
for (i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", function() {
        this.classList.toggle("faqactive");
        var panneau = this.nextElementSibling;
        if (panneau.style.display === "block") {
            panneau.style.display = "none";
        } else {
            panneau.style.display = "block";
        }
    });
}