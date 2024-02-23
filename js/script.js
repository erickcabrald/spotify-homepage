   const greetingElement = document.getElementById('greeting');

    // Obtém a hora atual do sistema
    const currentTime = new Date().getHours();

    // Define a saudação com base na hora do dia
    let greeting;
    if (currentTime >= 5 && currentTime < 12) {
        greeting = 'Bom Dia';
    } else if (currentTime >= 12 && currentTime < 18) {
        greeting = 'Boa Tarde';
    } else {
        greeting = 'Boa Noite';
    }

    // Define o texto como bom dia, boa tarde ou boa noite
    greetingElement.textContent = greeting;