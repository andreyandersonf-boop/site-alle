
function abrirPagina(pagina) {
    window.location.href = pagina;
}

let passoAtual = 0;

function iniciarTutorial(passos) {
    passoAtual = 0;
    document.getElementById("conteudo").innerHTML = passos[passoAtual];
    document.getElementById("barra").style.width = (1 / passos.length) * 100 + "%";

    // Esconde apenas o botão de iniciar depois que o tutorial começa
    document.getElementById("iniciar-container").style.display = "none";
}

function proximoPasso(passos) {
    if (passoAtual < passos.length - 1) {
        passoAtual++;
        document.getElementById("conteudo").innerHTML = passos[passoAtual];
        let progresso = ((passoAtual + 1) / passos.length) * 100;
        document.getElementById("barra").style.width = progresso + "%";
    } else {
        document.getElementById("conteudo").innerHTML = "<p>Tutorial concluído! 🎉</p>";
        document.getElementById("barra").style.width = "100%";
    }
}

function voltarPasso(passos) {
    if (passoAtual > 0) {
        passoAtual--;
        document.getElementById("conteudo").innerHTML = passos[passoAtual];
        let progresso = ((passoAtual + 1) / passos.length) * 100;
        document.getElementById("barra").style.width = progresso + "%";
    }
}
