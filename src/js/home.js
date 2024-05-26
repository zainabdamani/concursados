document.addEventListener("DOMContentLoaded", function() {
    const comecarBtn = document.getElementById("comecarBtn");
  
    comecarBtn.addEventListener("click", function() {
      const nome = document.getElementById("nome").value;
      const sobrenome = document.getElementById("sobrenome").value;
  
      if (nome && sobrenome) {
        // Armazenar nome e sobrenome no localStorage
        localStorage.setItem("nome", nome);
        localStorage.setItem("sobrenome", sobrenome);
  
        // Redirecionar para landing-page.html
        window.location.href = "landing-page.html";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  });
  
  