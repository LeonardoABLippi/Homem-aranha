function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    // se campoPesquisa for igual vazio use return
    if (!campoPesquisa){
      section.innerHTML = "<p>Nada foi encontrado. Tente digitar algo.</p>"  
      return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      //  se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba mais sobre</a>
          </div>
      `; 
      }
    }
  
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML construído à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }