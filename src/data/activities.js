/* ============================================================
   Portfolio — Activities Data
   Dados por matéria e trimestre (ESTRUTURA PRESERVADA)
   ============================================================ */

const activitiesData = {
  matematica: {
    '1': [
      {
        subject: 'Jogo Quebrando a Banca',
        description: 'Nesta atividade, criamos um jogo inspirado no filme Quebrando a Banca, utilizando conceitos de probabilidade e análise combinatória. O trabalho foi dinâmico e ajudou a aplicar a matemática na prática, desenvolvendo o raciocínio lógico de forma criativa.',
        habilidades: ['C5: Aplicar o pensamento probabilístico para quantificar e fazer previsões em situações aplicadas a diferentes áreas do conhecimento e da vida cotidiana.', 'H30: Identificar dados, regularidades e relações numa situação que envolva o raciocínio combinatório, utilizando os processos de contagem.', 'H31: Reconhecer fenômenos e eventos (naturais, científicos, tecnológicos e/ou  sociais) de caráter aleatório, compreendendo o significado e a importância da  probabilidade como meio de prever resultados.'],
        preview: {
          text: 'Jogo interativo baseado no filme Quebrando a Banca',
          image: '/imagens/matematica/jogoQuebrandoABanca.png',
          link: 'https://jogo-quebrando-a-banca.netlify.app/'
        }
      },
      {
        subject: 'Atividade: Filme Quebrando a Banca',
        description: 'Nesta atividade, analisamos o filme Quebrando a Banca, relacionando matemática e probabilidade com situações reais de jogo. O filme mostra como o uso de estratégias, como a contagem de cartas, pode influenciar resultados e decisões. Foi uma atividade interessante que conectou teoria e prática de forma dinâmica.',
        habilidades: ['H31- Reconhecer fenômenos e eventos (naturais, científicos, tecnológicos e/ou sociais) de caráter aleatório, compreendendo o significado e a importância da probabilidade como meio de prever resultados.', 'H32- Identificar em diferentes áreas científicas e outras atividades práticas modelos e problemas que fazem uso de estatísticas e probabilidades.'],
        preview: {
          text: 'Visualização de formas geométricas',
          image: 'imagens/matematica/quebrandoABanca.png',
          link: 'https://docs.google.com/document/d/1pqG_mWFm3sJ7JL8XGYJNEtfC4I5zZB1ZKaMYFit6rVw/edit?tab=t.0#heading=h.gjdgxs'
        }
      },
    ],
    '2': [
      {
        subject: 'Trigonometria',
        description: 'Funções trigonométricas e suas aplicações em problemas reais.',
        habilidades: ['Seno', 'Cosseno', 'Tangente'],
        preview: {
          text: 'Cálculo de distâncias e ângulos',
          image: null,
          link: null
        }
      },
      {
        subject: 'Progressões',
        description: 'Sequências numéricas: aritméticas e geométricas.',
        habilidades: ['PA', 'PG', 'Séries'],
        preview: {
          text: 'Cálculo de termos e somas',
          image: null,
          link: null
        }
      },
      {
        subject: 'Estatística Básica',
        description: 'Análise de dados, medidas de tendência central e dispersão.',
        habilidades: ['Média', 'Mediana', 'Desvio Padrão'],
        preview: {
          text: 'Análise de conjuntos de dados',
          image: null,
          link: null
        }
      }
    ],
    '3': [
      {
        subject: 'Cálculo Diferencial',
        description: 'Introdução ao conceito de derivada e suas aplicações.',
        habilidades: ['Derivadas', 'Limites', 'Taxas de Variação'],
        preview: {
          text: 'Otimização de funções',
          image: null,
          link: null
        }
      },
      {
        subject: 'Cálculo Integral',
        description: 'Conceitos de integral e suas aplicações em física e engenharia.',
        habilidades: ['Integrais', 'Áreas', 'Volumes'],
        preview: {
          text: 'Cálculo de áreas sob curvas',
          image: null,
          link: null
        }
      },
      {
        subject: 'Probabilidade',
        description: 'Cálculo de probabilidades e distribuições.',
        habilidades: ['Probabilidade', 'Distribuições', 'Combinatória'],
        preview: {
          text: 'Análise de eventos aleatórios',
          image: null,
          link: null
        }
      }
    ]
  },
  natureza: {
    '1': [
      {
        subject: 'Meme Sobre Evolucionismo',
        description: 'Nessa atividade, eu criei um meme sobre evolução, inspirado nas ideias de Charles Darwin. No meme, representei a evolução humana de forma crítica e bem-humorada, mostrando não apenas as mudanças físicas ao longo do tempo, mas também uma possível “regressão” no comportamento atual, como a dependência da tecnologia. A atividade ajudou a relacionar o conteúdo estudado com situações do cotidiano de maneira criativa.',
        habilidades: ['C3 - Determinar os impactos das ações humanas nos ambientes, identificando suas causas e propondo soluções para a sua redução', 'H15 - Comparar propostas de intervenção ambiental aplicando conhecimentos científicos e tecnológicos, observando os riscos e benefícios de sua implementação', 'H18 - Identificar situações de risco ambiental na cidade onde reside.'],
        preview: {
          text: 'Meme Sobre Evolucionismo',
          image: 'imagens/natureza/memeEvolucionismo.png',
          link: null
        }
      },
      {
        subject: 'Dependência Energética',
        description: 'Nessa atividade, meu grupo analisou os impactos dos combustíveis fósseis, como a emissão de CO₂ na combustão e seus efeitos no meio ambiente. Também discutimos quem é mais responsável pela poluição e concluímos que a solução depende tanto da sociedade quanto das indústrias e governos.',
        habilidades: ['C1 - Entender a ciência e a tecnologia como construções humanas', 'C2 - Aplicar conceitos científicos para explicar fenômenos do cotidiano', 'H9 - Compreender energia e suas transformações', 'H11 - Investigar, levantar hipóteses e tirar conclusões', 'H1 - Interpretar diferentes formas de informação (textos, gráficos, dados)'],
        preview: {
          text: 'Dependência Energética',
          image: 'imagens/natureza/dependenciaEnergetica.png',
          link: 'https://canva.link/1w5rzrvnicdc1j4'
        }
      },
      {
        subject: 'Atividade Prática Disputa de Eletricidade.',
        description: 'O objetivo da atividade foi compreender, na prática, como ocorre a eletrização por atrito, observando a transferência de elétrons entre diferentes materiais quando são esfregados. Além disso, buscou-se analisar como os corpos ficam eletrizados com cargas de sinais opostos e como isso influencia fenômenos como a atração entre objetos, permitindo relacionar a teoria estudada em sala com a observação experimental.',
        habilidades: ['C1 - Compreender as ciências naturais e as tecnologias como construções humanas associadas à cultura dos povos e suas visões de mundo.', 'H1 - Interpretar informações apresentadas em diferentes linguagens usadas nas Ciências, como texto discursivo, gráficos, tabelas, relações matemáticas, diagramas ou representação simbólica.', 'C2 - Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.','H7 - Compreender os conceitos relacionados à Química nos seus diferentes ramos: Fisico-química, Química orgânica e Química Geral.','H9 - Explicar os conceitos de energia, matéria, vida e transformação para explicar fenômenos naturais e procedimentos tecnológicos.','H11 - Empregar procedimentos e práticas de observação, levantamento de hipótese, experimentação, coleta de dados e conclusões para resolução de problemas relacionados às Ciências da Natureza.','H12 - Relacionar informações para construir modelos em ciência e tecnologia.'],
        preview: {
          text: 'Relatorio',
          image: 'imagens/natureza/eletrizacao.png',
          link: 'https://docs.google.com/document/d/1-B0JUfEMyaCoHxIaDVscOM6IEmAXIJpdg4JQez0CEaA/edit?usp=sharing'
        }
      }
    ],
    '2': [
      {
        subject: 'Genética',
        description: 'Hereditariedade e expressão gênica.',
        habilidades: ['DNA', 'RNA', 'Mutação'],
        preview: {
          text: 'Análise de herança genética',
          image: null,
          link: null
        }
      },
      {
        subject: 'Química Orgânica',
        description: 'Compostos de carbono e suas reações.',
        habilidades: ['Hidrocarbonetos', 'Funções Orgânicas', 'Reações'],
        preview: {
          text: 'Síntese de compostos',
          image: null,
          link: null
        }
      },
      {
        subject: 'Termodinâmica',
        description: 'Leis da termodinâmica e energia.',
        habilidades: ['Energia', 'Entropia', 'Calor'],
        preview: {
          text: 'Análise de sistemas térmicos',
          image: null,
          link: null
        }
      }
    ],
    '3': [
      {
        subject: 'Ecologia',
        description: 'Relações entre organismos e ambiente.',
        habilidades: ['Ecossistemas', 'Cadeias Alimentares', 'Biodiversidade'],
        preview: {
          text: 'Análise de ecossistemas',
          image: null,
          link: null
        }
      },
      {
        subject: 'Física Moderna',
        description: 'Relatividade e física quântica básica.',
        habilidades: ['Relatividade', 'Quântica', 'Partículas'],
        preview: {
          text: 'Conceitos de física moderna',
          image: null,
          link: null
        }
      },
      {
        subject: 'Bioquímica',
        description: 'Processos químicos nos organismos vivos.',
        habilidades: ['Metabolismo', 'Enzimas', 'Vias Metabólicas'],
        preview: {
          text: 'Análise de processos bioquímicos',
          image: null,
          link: null
        }
      }
    ]
  },
  humanas: {
    '1': [
      {
        subject: 'Debate Analítico com Estudo de Caso: O mundo é realmente multipolar?',
        description: 'Consolidar o conceito de multipolaridade e Nova Ordem Mundial por meio da análise de um caso geopolítico atual, articulando teoria e realidade.',
        habilidades: ['C2 - H10'],
        preview: {
          text: 'mundoBipolar',
          image: 'imagens/humanas/mundoBipolar.png',
          link: 'https://docs.google.com/document/d/1Y5QqAEIkiJ4PVFnwvEGnwlXmSZfSU0FHhqEvDkwBUpk/edit?tab=t.0#heading=h.kr0xrajq5ab8'
        }
      },
      {
        subject: 'Imperialismo no séc. XIX (Neocolonialismo)',
        description: 'Relacionar a Segunda Revolução Industrial à expansão das potências econômicas. Compreender o processo que levou à exploração dos países asiáticos nos séculos XIX e XX. Compreender o processo de partilha do continente africano e suas consequências para as nações envolvidas.',
        habilidades: ['C2', 'H8', 'H10', 'H12'],
        preview: {
          text: 'imperialismo',
          image: 'imagens/humanas/imperialismo.png',
          link: 'https://docs.google.com/document/d/1Y7lgxTTD7IJ-Dw7OjTYlw8g50xappS96y1-SiuW3mL0/edit?tab=t.0#heading=h.oexnsvyfls32'
        }
      },
      {
        subject: 'Jornal - A Grande Guerra',
        description: 'Trabalho em que eu e meu grupo assumimos o papel de um jornalista do início do século XX para produzir a capa de um jornal de época. Desenvolvemos uma matéria principal e duas secundárias sobre a Primeira Guerra Mundial e a Revolução Russa, com base em fatos históricos, e organizamos tudo em um layout seguindo o estilo, formato e padrões dos jornais da época.',
        habilidades: ['C3 - H15, H16, H20', 'C6 - H39'],
        preview: {
          text: 'Jornal da Grande Guerra',
          image: 'imagens/humanas/jornal.png',
          link: 'https://canva.link/wd4ivl4jw0wi3wv'
        }
      }
    ],
    '2': [
      {
        subject: 'História Medieval',
        description: 'Idade Média e suas transformações.',
        habilidades: ['Feudalismo', 'Cruzadas', 'Renascimento'],
        preview: {
          text: 'Análise do período medieval',
          image: null,
          link: null
        }
      },
      {
        subject: 'Geografia Humana',
        description: 'População, urbanização e migração.',
        habilidades: ['Demografia', 'Urbanização', 'Migração'],
        preview: {
          text: 'Análise demográfica',
          image: null,
          link: null
        }
      },
      {
        subject: 'Filosofia Moderna',
        description: 'Pensadores modernos e suas teorias.',
        habilidades: ['Descartes', 'Kant', 'Hume'],
        preview: {
          text: 'Análise filosófica moderna',
          image: null,
          link: null
        }
      }
    ],
    '3': [
      {
        subject: 'História Contemporânea',
        description: 'Séculos XIX e XX e suas revoluções.',
        habilidades: ['Revolução Industrial', 'Guerras Mundiais', 'Guerra Fria'],
        preview: {
          text: 'Análise histórica contemporânea',
          image: null,
          link: null
        }
      },
      {
        subject: 'Geografia Econômica',
        description: 'Atividades econômicas e globalização.',
        habilidades: ['Indústria', 'Comércio', 'Globalização'],
        preview: {
          text: 'Análise econômica global',
          image: null,
          link: null
        }
      },
      {
        subject: 'Sociologia',
        description: 'Estrutura social e dinâmicas de grupo.',
        habilidades: ['Estrutura Social', 'Cultura', 'Instituições'],
        preview: {
          text: 'Análise sociológica',
          image: null,
          link: null
        }
      }
    ]
  },
  linguagens: {
    '1': [
      {
        subject: 'A paixão segundo G.H',
        description: 'Foi um trabalho em grupo sobre A Paixão Segundo G.H., no qual analisamos a experiência da personagem a partir de diferentes áreas do conhecimento para entender se ela poderia ser explicada pela ciência ou pela sociedade. Também apresentei uma mini aula com o grupo e produzi um mapa conceitual individual relacionando os conceitos com a obra.',
        habilidades: ['H4', 'H22'],
        preview: {
          text: 'Análise gramatical',
          image: 'imagens/linguagens/gh.png',
          link: 'https://drive.google.com/file/d/18NO-vxr_UoI5TOHgqoUCdt4XOivSfbes/view?usp=sharing'
        }
      },
      {
        subject: 'Game literário – Das origens ao Simbolismo',
        description: 'Nesta atividade, criamos um jogo no Wordwall sobre o Barroco, revisando suas principais características de forma interativa. O trabalho em grupo ajudou na organização e tornou a atividade mais dinâmica e criativa.',
        habilidades: ['H4', 'H14'],
        preview: {
          text: 'Análise literária',
          image: 'imagens/linguagens/gameLiterario.png',
          link: 'https://canva.link/9p24lvjrtr10vu6'
        }
      },

    ],
    '2': [
      {
        subject: 'Interpretação de Texto',
        description: 'Leitura e análise de textos complexos.',
        habilidades: ['Leitura', 'Análise', 'Síntese'],
        preview: {
          text: 'Compreensão textual',
          image: null,
          link: null
        }
      },
      {
        subject: 'Literatura Brasileira',
        description: 'Autores e obras da literatura brasileira.',
        habilidades: ['Realismo', 'Modernismo', 'Contemporâneo'],
        preview: {
          text: 'Análise literária brasileira',
          image: null,
          link: null
        }
      },
      {
        subject: 'Artes Digitais',
        description: 'Arte e tecnologia na era digital.',
        habilidades: ['Design Digital', 'Arte Generativa', 'Mídias Digitais'],
        preview: {
          text: 'Criação digital',
          image: null,
          link: null
        }
      }
    ],
    '3': [
      {
        subject: 'Produção Textual',
        description: 'Escrita de textos argumentativos e dissertativos.',
        habilidades: ['Argumentação', 'Coesão', 'Coerência'],
        preview: {
          text: 'Produção de textos',
          image: null,
          link: null
        }
      },
      {
        subject: 'Literatura Portuguesa',
        description: 'Autores e obras da literatura portuguesa.',
        habilidades: ['Camões', 'Fernando Pessoa', 'Contemporâneo'],
        preview: {
          text: 'Análise literária portuguesa',
          image: null,
          link: null
        }
      },
      {
        subject: 'Cultura e Sociedade',
        description: 'Relação entre cultura, arte e sociedade.',
        habilidades: ['Cultura', 'Sociedade', 'Identidade'],
        preview: {
          text: 'Análise cultural',
          image: null,
          link: null
        }
      }
    ]
  },
  modelagem: {
    '1': [
      {
        subject: 'SA - TaskSync',
        description: 'Eu e meu grupo desenvolvemos essa atividade em grupo criando a ideia de um sistema de gestão de tarefas chamado TaskSync. Pensamos em como ele funcionaria, quem usaria e quais problemas ele resolveria. Organizamos regras, funcionalidades e até a parte visual do sistema. Fizemos isso para entender melhor como criar um sistema desde o começo. Aprendemos sobre organização de projetos, lógica de sistemas e como transformar uma ideia em algo mais estruturado.',
        habilidades: ['Classes', 'Casos de Uso', 'Relacionamentos'],
        preview: {
          text: 'Modelagem de sistemas',
          image: 'imagens/modelagem/sa.png',
          link: 'https://satasksync.netlify.app/' 
        }
      },
    ],
    '2': [
      {
        subject: 'Arquitetura MVC',
        description: 'Model-View-Controller pattern.',
        habilidades: ['MVC', 'Camadas', 'Separação'],
        preview: {
          text: 'Arquitetura em camadas',
          image: null,
          link: null
        }
      },
      {
        subject: 'API REST',
        description: 'Design de APIs RESTful.',
        habilidades: ['REST', 'HTTP', 'JSON'],
        preview: {
          text: 'Construção de APIs',
          image: null,
          link: null
        }
      },
    ],
  },
  programacao: {
    '1': [
      {
        subject: 'Lógica de Programação',
        description: 'Fundamentos de lógica e algoritmos.',
        habilidades: ['Algoritmos', 'Estruturas', 'Fluxo'],
        preview: {
          text: 'Conceitos básicos',
          image: null,
          link: null
        }
      },
      {
        subject: 'Estruturas de Dados',
        description: 'Listas, pilhas, filas e árvores.',
        habilidades: ['Listas', 'Pilhas', 'Árvores'],
        preview: {
          text: 'Organização de dados',
          image: null,
          link: null
        }
      },
    ],
    '2': [
      {
        subject: 'POO',
        description: 'Programação Orientada a Objetos.',
        habilidades: ['Classes', 'Herança', 'Polimorfismo'],
        preview: {
          text: 'Conceitos de POO',
          image: null,
          link: null
        }
      },
      {
        subject: 'Desenvolvimento Web',
        description: 'HTML, CSS e JavaScript.',
        habilidades: ['Frontend', 'Backend', 'Fullstack'],
        preview: {
          text: 'Desenvolvimento web',
          image: null,
          link: null
        }
      },
    ],
  },
  bancoDeDados: {
    '1': [],
    '2': [],
    '3': []
  },
  iot: {
    '1': [],
    '2': [],
    '3': []
  }
};

export function getActivities(subject, trimester) {
  return activitiesData[subject]?.[trimester] || [];
}

export function getAllActivities(subject) {
  const data = activitiesData[subject];
  if (!data) return [];
  return [...(data['1'] || []), ...(data['2'] || []), ...(data['3'] || [])];
}
