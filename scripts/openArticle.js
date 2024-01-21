function openArticle(filename) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (this.status == 200) {
            document.getElementById("article").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}
