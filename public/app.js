const dados = {
  "noticias": [
    {
      "id": 1,
      "titulo": "Inscrições Abertas para Oficina de Teatro",
      "descricao": "Participe da nossa nova oficina de teatro para iniciantes. Vagas limitadas!",
      "conteudo": "A Escola Livre de Artes - Arena da Cultura está com inscrições abertas para a Oficina de Iniciação Teatral. As aulas acontecerão todas as terças e quintas, das 19h às 22h, no Núcleo de Formação e Criação Artística e Cultural (NUFAC). O curso é voltado para maiores de 16 anos e não exige experiência prévia. Venha desenvolver sua expressividade e criatividade conosco!",
      "imagem": "/public/images/teatro-NUFAC-ELA.jpg"
    },
    {
      "id": 2,
      "titulo": "Exposição de Artes Visuais 'Cores da Cidade'",
      "descricao": "Alunos da ELA apresentam trabalhos inspirados na paisagem urbana de Belo Horizonte.",
      "conteudo": "A exposição 'Cores da Cidade' reúne pinturas, desenhos e fotografias produzidos pelos alunos do curso de Artes Visuais da Escola Livre de Artes. A mostra está em cartaz no Centro Cultural da Pampulha e pode ser visitada gratuitamente de segunda a sábado, das 9h às 18h.",
      "imagem": "/public/images/Artes-Visuais-ELA.jpg"
    }
  ],
  "eventos": [
    {
      "id": 3,
      "titulo": "Show da banda 'Arena Rock'",
      "data": "20/10/2025",
      "descricao": "Apresentação especial da banda formada por professores e alunos da ELA.",
      "local": "Praça da Liberdade",
      "imagem": "/public/images/Arena-Rock.jpg"
    },
    {
      "id": 4,
      "titulo": "Sarau de Poesia 'Vozes da Periferia'",
      "data": "25/10/2025",
      "descricao": "Microfone aberto para poetas e artistas locais mostrarem seu talento.",
      "local": "Arena da Cultura",
      "imagem": "/public/images/Sarau-Poesia.jpg"
    },
    {
      "id": 5,
      "titulo": "Mostra de Dança Contemporânea",
      "data": "30/10/2025",
      "descricao": "Espetáculo de encerramento do semestre dos alunos de dança.",
      "local": "Teatro Francisco Nunes",
      "imagem": "/public/images/banner4.jpg"
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
    const feedNoticias = document.getElementById('feed-noticias');
    const agendaEventos = document.getElementById('agenda-eventos');

    // Renderiza as notícias
    if (feedNoticias) {
        dados.noticias.forEach(noticia => {
            const card = `
                <div class="card shadow-sm border-start border-4 border-warning p-3">
                    <h5 class="card-title">${noticia.titulo}</h5>
                    <p class="card-text">${noticia.descricao}</p>
                    <a href="#" class="btn btn-primary btn-sm">Leia mais</a>
                </div>
            `;
            feedNoticias.innerHTML += card;
        });
    }

    // Renderiza os eventos
    if (agendaEventos) {
        dados.eventos.forEach(evento => {
            const card = `
                <div class="card shadow-sm border-start border-4 border-primary p-3 text-center">
                    <h5 class="card-title">${evento.titulo}</h5>
                    <p class="card-text">Data: ${evento.data}<br>${evento.descricao}</p>
                    <a href="#" class="btn btn-outline-primary btn-sm">Detalhes</a>
                </div>
            `;
            agendaEventos.innerHTML += card;
        });
    }
});