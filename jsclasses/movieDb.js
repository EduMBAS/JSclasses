
const filmes = [
    {
      titulo: "O Poderoso Chefão",
      classificacao: "18+",
      hasWatched: true
    },
    {
      titulo: "Os Caçadores da Arca Perdida",
      classificacao: "12+",
      hasWatched: true
    },
    {
      titulo: "De Volta Para o Futuro",
      classificacao: "10+",
      hasWatched: false
    },
    {
      titulo: "Pulp Fiction",
      classificacao: "18+",
      hasWatched: true
    },
    {
      titulo: "O Senhor dos Anéis: A Sociedade do Anel",
      classificacao: "12+",
      hasWatched: true
    },
    {
      titulo: "Jurassic Park",
      classificacao: "10+",
      hasWatched: false
    }
  ];
  
  filmes.forEach(filme => {
    const mensagem = filme.hasWatched ? 
      `Você assistiu "${filme.titulo}" - 5 estrelas` : 
      `Você não viu "${filme.titulo}" - 4,5 estrelas`;
    console.log(mensagem);
  });