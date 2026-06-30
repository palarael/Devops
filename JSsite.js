// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("contato");
    const mensagem = document.getElementById("mensagem");
    const botao = formulario.querySelector("button");

    // Cria contador de caracteres
    const contador = document.createElement("small");
    contador.style.display = "block";
    contador.style.marginTop = "8px";
    contador.style.color = "#666";
    contador.textContent = "0 / 500 caracteres";

    mensagem.after(contador);

    // Atualiza contador
    mensagem.addEventListener("input", () => {
        contador.textContent = `${mensagem.value.length} / 500 caracteres`;

        if (mensagem.value.length > 500) {
            contador.style.color = "red";
        } else {
            contador.style.color = "#666";
        }
    });

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const texto = mensagem.value.trim();

        // Validação do nome
        if (nome.length < 3) {
            alert("Digite um nome válido.");
            return;
        }

        // Validação do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Digite um e-mail válido.");
            return;
        }

        // Validação do telefone (opcional)
        if (telefone !== "") {

            const telefoneRegex = /^[0-9()\-\s+]{10,20}$/;

            if (!telefoneRegex.test(telefone)) {
                alert("Telefone inválido.");
                return;
            }
        }

        // Assunto
        if (assunto.length < 5) {
            alert("Informe um assunto.");
            return;
        }

        // Mensagem
        if (texto.length < 20) {
            alert("A mensagem deve conter pelo menos 20 caracteres.");
            return;
        }

        if (texto.length > 500) {
            alert("A mensagem pode ter no máximo 500 caracteres.");
            return;
        }

        // Simula envio
        botao.disabled = true;
        botao.innerHTML = "Enviando...";

        setTimeout(() => {

            alert(
`Mensagem enviada com sucesso!

Nome: ${nome}
Email: ${email}
Telefone: ${telefone || "Não informado"}
Assunto: ${assunto}

Obrigado pelo contato!`
            );

            formulario.reset();

            contador.textContent = "0 / 500 caracteres";

            botao.disabled = false;
            botao.innerHTML = "Enviar Mensagem";

        }, 2000);

    });

});