// Función para buscar términos
function search() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const terms = document.getElementsByClassName("term");

    for (let term of terms) {
        const termName = term.getElementsByTagName("h3")[0].innerText.toLowerCase();
        const termDescription = term.getElementsByTagName("p")[0].innerText.toLowerCase();

        if (termName.includes(searchTerm) || termDescription.includes(searchTerm)) {
            term.style.display = "block";
        } else {
            term.style.display = "none";
        }
    }
}
