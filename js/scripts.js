const nameForm = document.querySelector("#formulario");
const paginaContainer = document.querySelector("#pagina_pedido");
const logoutBtn = document.querySelector("#sair");

function checkUser() {
    const userName = localStorage.getItem("nome_usuario")
    

    if(userName) {

        nameForm.style.display = "none";
        paginaContainer.style.display = "block";

    }else {
        
        nameForm.style.display = "block";
        paginaContainer.style.display = " none";
    }
}

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#nome_usuario")

    localStorage.setItem("nome_usuario", nameInput.value)

    nameInput.value ="";

    checkUser();


});

logoutBtn.addEventListener("click", () => {
    
   window.location.href="confirma.html";


});


checkUser();



localStorage.setItem()



// FUNÇÃO ESCOLHE TAMANHO

function tamanho() {
    const Pequena = document.querySelector("#Pequena").value;
    localStorage.setItem("tamanho1", Pequena);

    const Media = document.querySelector("#Media").value;
    localStorage.setItem("tamanho2", Media);

    const Grande = document.querySelector("#Grande").value;
    localStorage.setItem("tamanho3", Grande);
  
  }


// FUNÇÃO ESCOLHE PIZZA

function pizza() {
    const Calabresa = document.querySelector("#Calabresa").value;
    localStorage.setItem("arquivo1", Calabresa);

    const Chocolate = document.querySelector("#Chocolate").value;
    localStorage.setItem("arquivo2", Chocolate);

    const Sorvete = document.querySelector("#Sorvete").value;
    localStorage.setItem("arquivo3", Sorvete);

    const Portuguesa = document.querySelector("#Portuguesa").value;
    localStorage.setItem("arquivo4", Portuguesa);

    const moda_da_casa = document.querySelector("#moda_da_casa").value;
    localStorage.setItem("arquivo5", moda_da_casa);

    const Mussarela = document.querySelector("#Mussarela").value;
    localStorage.setItem("arquivo6", Mussarela);

    const Marguerita = document.querySelector("#Marguerita").value;
    localStorage.setItem("arquivo6", Marguerita);

    const quatro_queijo = document.querySelector("#quatro_queijo").value;
    localStorage.setItem("arquivo6", quatro_queijo);

    const Frango_com_catupiry = document.querySelector("#Frango_com_catupiry").value;
    localStorage.setItem("arquivo6", Frango_com_catupiry);

    const Alcachofra = document.querySelector("#Alcachofra").value;
    localStorage.setItem("arquivo6", Alcachofra);

    const Mexicana = document.querySelector("#Mexicana").value;
    localStorage.setItem("arquivo6", Mexicana);

    const Napolitana = document.querySelector("#Napolitana").value;
    localStorage.setItem("arquivo6", Napolitana);
    
  };

// FUNÇÃO ESCOLHE ADICIONAL

  function adicionais() {
    const bordaRecheada = document.querySelector("#bordaRecheada").value;
    localStorage.setItem("adicional1", bordaRecheada);

    const maisQueijo = document.querySelector("#maisQueijo").value;
    localStorage.setItem("adicional2", maisQueijo);

    const maisChocolate = document.querySelector("#maisChocolate").value;
    localStorage.setItem("adicional3", maisChocolate);
  
  }

// FUNÇÃO ESCOLHE BEBIDA


  function bebidas() {
    const cocaCola = document.querySelector("#cocaCola").value;
    localStorage.setItem("bebida1", cocaCola);

    const sucodeLaranja = document.querySelector("#sucodeLaranja").value;
    localStorage.setItem("bebida2", sucodeLaranja);

    const fantaUva = document.querySelector("#fantaUva").value;
    localStorage.setItem("bebida3", fantaUva);

    const fantaLaranja = document.querySelector("#fantaLaranja").value;
    localStorage.setItem("bebida4", fantaLaranja);
  
  }
  

// FUNÇÃO ESCOLHE LOCAL DE RETIRADA


  function retirada() {
    const retirarnoBalcao = document.querySelector("#retirarnoBalcao").value;
    localStorage.setItem("retirada1", retirarnoBalcao);

    const entregarnaCasa = document.querySelector("#entregarnaCasa").value;
    localStorage.setItem("retirada2", entregarnaCasa);

  
  }
  
  
// FUNÇÃO CONFIRMAR MOSTRAR DADOS 
  function resultados_finais(){

    document.getElementById("joao").value = localStorage.nome_usuario;
    document.getElementById("joao@gmail.com").value = localStorage.email_usuario;
    document.getElementById("bordaRecheada").value = localStorage.adicional1;


    document.getElementById("909009009").value = localStorage.telefone_usuario;

    document.getElementById("Pequena").value = localStorage.tamanho1;
    document.getElementById("Chocolate").value = localStorage.arquivo2;
    document.getElementById("cocaCola").value = localStorage.bebida1;
    document.getElementById("retirarnoBalcao").value = localStorage.retirada1;
    document.getElementById("preco").value = localStorage.preco_final;





}

