/* ============================================================
   DEV ELITE - Activities Data
   Dados das atividades por matéria e trimestre (ESTRUTURA PRESERVADA)
   ============================================================ */

const activitiesData = {
  matematica: {
    '1': [
      {
        subject: 'Álgebra Linear',
        description: 'Estudo de matrizes, sistemas lineares e suas aplicações na computação.',
        skills: ['Matrizes', 'Sistemas Lineares', 'Vetores'],
        preview: 'Implementação de algoritmos para resolução de sistemas'
      },
      {
        subject: 'Geometria Analítica',
        description: 'Análise de pontos, retas e planos no espaço bidimensional.',
        skills: ['Coordenadas', 'Distâncias', 'Equações'],
        preview: 'Visualização de formas geométricas'
      },
      {
        subject: 'Funções',
        description: 'Estudo de funções polinomiais, exponenciais e logarítmicas.',
        skills: ['Funções', 'Gráficos', 'Domínio e Imagem'],
        preview: 'Análise de comportamento de funções'
      }
    ],
    '2': [
      {
        subject: 'Trigonometria',
        description: 'Funções trigonométricas e suas aplicações em problemas reais.',
        skills: ['Seno', 'Cosseno', 'Tangente'],
        preview: 'Cálculo de distâncias e ângulos'
      },
      {
        subject: 'Progressões',
        description: 'Sequências numéricas: aritméticas e geométricas.',
        skills: ['PA', 'PG', 'Séries'],
        preview: 'Cálculo de termos e somas'
      },
      {
        subject: 'Estatística Básica',
        description: 'Análise de dados, medidas de tendência central e dispersão.',
        skills: ['Média', 'Mediana', 'Desvio Padrão'],
        preview: 'Análise de conjuntos de dados'
      }
    ],
    '3': [
      {
        subject: 'Cálculo Diferencial',
        description: 'Introdução ao conceito de derivada e suas aplicações.',
        skills: ['Derivadas', 'Limites', 'Taxas de Variação'],
        preview: 'Otimização de funções'
      },
      {
        subject: 'Cálculo Integral',
        description: 'Conceitos de integral e suas aplicações em física e engenharia.',
        skills: ['Integrais', 'Áreas', 'Volumes'],
        preview: 'Cálculo de áreas sob curvas'
      },
      {
        subject: 'Probabilidade',
        description: 'Cálculo de probabilidades e distribuições.',
        skills: ['Probabilidade', 'Distribuições', 'Combinatória'],
        preview: 'Análise de eventos aleatórios'
      }
    ]
  },
  natureza: {
    '1': [
      {
        subject: 'Biologia Celular',
        description: 'Estrutura e função das células e seus componentes.',
        skills: ['Células', 'Organelas', 'Divisão Celular'],
        preview: 'Microscopia celular'
      },
      {
        subject: 'Química da Vida',
        description: 'Biomoléculas essenciais para os seres vivos.',
        skills: ['Carboidratos', 'Proteínas', 'Lipídios'],
        preview: 'Análise de biomoléculas'
      },
      {
        subject: 'Física Mecânica',
        description: 'Leis de Newton e movimento dos corpos.',
        skills: ['Forças', 'Movimento', 'Trabalho'],
        preview: 'Análise de movimentos'
      }
    ],
    '2': [
      {
        subject: 'Genética',
        description: 'Hereditariedade e expressão gênica.',
        skills: ['DNA', 'RNA', 'Mutação'],
        preview: 'Análise de herança genética'
      },
      {
        subject: 'Química Orgânica',
        description: 'Compostos de carbono e suas reações.',
        skills: ['Hidrocarbonetos', 'Funções Orgânicas', 'Reações'],
        preview: 'Síntese de compostos'
      },
      {
        subject: 'Termodinâmica',
        description: 'Leis da termodinâmica e energia.',
        skills: ['Energia', 'Entropia', 'Calor'],
        preview: 'Análise de sistemas térmicos'
      }
    ],
    '3': [
      {
        subject: 'Ecologia',
        description: 'Relações entre organismos e ambiente.',
        skills: ['Ecossistemas', 'Cadeias Alimentares', 'Biodiversidade'],
        preview: 'Análise de ecossistemas'
      },
      {
        subject: 'Física Moderna',
        description: 'Relatividade e física quântica básica.',
        skills: ['Relatividade', 'Quântica', 'Partículas'],
        preview: 'Conceitos de física moderna'
      },
      {
        subject: 'Bioquímica',
        description: 'Processos químicos nos organismos vivos.',
        skills: ['Metabolismo', 'Enzimas', 'Vias Metabólicas'],
        preview: 'Análise de processos bioquímicos'
      }
    ]
  },
  humanas: {
    '1': [
      {
        subject: 'História Antiga',
        description: 'Civilizações antigas e suas contribuições.',
        skills: ['Egito', 'Grécia', 'Roma'],
        preview: 'Análise de civilizações'
      },
      {
        subject: 'Geografia Física',
        description: 'Relevo, clima e vegetação.',
        skills: ['Relevo', 'Clima', 'Biomas'],
        preview: 'Análise geográfica'
      },
      {
        subject: 'Filosofia Clássica',
        description: 'Pensadores gregos e seus conceitos fundamentais.',
        skills: ['Sócrates', 'Platão', 'Aristóteles'],
        preview: 'Análise filosófica'
      }
    ],
    '2': [
      {
        subject: 'História Medieval',
        description: 'Idade Média e suas transformações.',
        skills: ['Feudalismo', 'Cruzadas', 'Renascimento'],
        preview: 'Análise do período medieval'
      },
      {
        subject: 'Geografia Humana',
        description: 'População, urbanização e migração.',
        skills: ['Demografia', 'Urbanização', 'Migração'],
        preview: 'Análise demográfica'
      },
      {
        subject: 'Filosofia Moderna',
        description: 'Pensadores modernos e suas teorias.',
        skills: ['Descartes', 'Kant', 'Hume'],
        preview: 'Análise filosófica moderna'
      }
    ],
    '3': [
      {
        subject: 'História Contemporânea',
        description: 'Séculos XIX e XX e suas revoluções.',
        skills: ['Revolução Industrial', 'Guerras Mundiais', 'Guerra Fria'],
        preview: 'Análise histórica contemporânea'
      },
      {
        subject: 'Geografia Econômica',
        description: 'Atividades econômicas e globalização.',
        skills: ['Indústria', 'Comércio', 'Globalização'],
        preview: 'Análise econômica global'
      },
      {
        subject: 'Sociologia',
        description: 'Estrutura social e dinâmicas de grupo.',
        skills: ['Estrutura Social', 'Cultura', 'Instituições'],
        preview: 'Análise sociológica'
      }
    ]
  },
  linguagens: {
    '1': [
      {
        subject: 'Gramática Normativa',
        description: 'Regras gramaticais da língua portuguesa.',
        skills: ['Sintaxe', 'Morfologia', 'Pontuação'],
        preview: 'Análise gramatical'
      },
      {
        subject: 'Literatura Clássica',
        description: 'Obras literárias dos períodos clássicos.',
        skills: ['Classicismo', 'Arcadismo', 'Romantismo'],
        preview: 'Análise literária'
      },
      {
        subject: 'Artes Visuais',
        description: 'História da arte e técnicas artísticas.',
        skills: ['Pintura', 'Escultura', 'Arquitetura'],
        preview: 'Análise artística'
      }
    ],
    '2': [
      {
        subject: 'Interpretação de Texto',
        description: 'Leitura e análise de textos complexos.',
        skills: ['Leitura', 'Análise', 'Síntese'],
        preview: 'Compreensão textual'
      },
      {
        subject: 'Literatura Brasileira',
        description: 'Autores e obras da literatura brasileira.',
        skills: ['Realismo', 'Modernismo', 'Contemporâneo'],
        preview: 'Análise literária brasileira'
      },
      {
        subject: 'Artes Digitais',
        description: 'Arte e tecnologia na era digital.',
        skills: ['Design Digital', 'Arte Generativa', 'Mídias Digitais'],
        preview: 'Criação digital'
      }
    ],
    '3': [
      {
        subject: 'Produção Textual',
        description: 'Escrita de textos argumentativos e dissertativos.',
        skills: ['Argumentação', 'Coesão', 'Coerência'],
        preview: 'Produção de textos'
      },
      {
        subject: 'Literatura Portuguesa',
        description: 'Autores e obras da literatura portuguesa.',
        skills: ['Camões', 'Fernando Pessoa', 'Contemporâneo'],
        preview: 'Análise literária portuguesa'
      },
      {
        subject: 'Cultura e Sociedade',
        description: 'Relação entre cultura, arte e sociedade.',
        skills: ['Cultura', 'Sociedade', 'Identidade'],
        preview: 'Análise cultural'
      }
    ]
  },
  modelagem: {
    '1': [
      {
        subject: 'UML Básico',
        description: 'Diagramas de classes e casos de uso.',
        skills: ['Classes', 'Casos de Uso', 'Relacionamentos'],
        preview: 'Modelagem de sistemas'
      },
      {
        subject: 'Diagramas de Sequência',
        description: 'Representação de interações entre objetos.',
        skills: ['Sequência', 'Mensagens', 'Objetos'],
        preview: 'Modelagem de interações'
      },
      {
        subject: 'Padrões de Projeto',
        description: 'Padrões GoF e suas aplicações.',
        skills: ['Singleton', 'Factory', 'Observer'],
        preview: 'Implementação de padrões'
      }
    ],
    '2': [
      {
        subject: 'Diagramas de Atividade',
        description: 'Modelagem de processos de negócio.',
        skills: ['Atividades', 'Fluxos', 'Decisões'],
        preview: 'Modelagem de processos'
      },
      {
        subject: 'Diagramas de Estado',
        description: 'Representação de estados e transições.',
        skills: ['Estados', 'Transições', 'Eventos'],
        preview: 'Modelagem de estados'
      },
      {
        subject: 'Arquitetura de Software',
        description: 'Padrões arquiteturais e princípios.',
        skills: ['MVC', 'Layered', 'Microservices'],
        preview: 'Design arquitetural'
      }
    ],
    '3': [
      {
        subject: 'Diagramas de Componente',
        description: 'Estrutura de componentes e suas dependências.',
        skills: ['Componentes', 'Interfaces', 'Dependências'],
        preview: 'Modelagem de componentes'
      },
      {
        subject: 'Diagramas de Implantação',
        description: 'Arquitetura de implantação de sistemas.',
        skills: ['Servidores', 'Nós', 'Protocolos'],
        preview: 'Modelagem de implantação'
      },
      {
        subject: 'Documentação de Sistemas',
        description: 'Técnicas de documentação técnica.',
        skills: ['Especificações', 'Manuais', 'API Docs'],
        preview: 'Documentação técnica'
      }
    ]
  },
  bancoDeDados: {
    '1': [
      {
        subject: 'Modelagem Relacional',
        description: 'Conceitos de modelo relacional e normalização.',
        skills: ['Entidades', 'Relacionamentos', 'Normalização'],
        preview: 'Modelagem ER'
      },
      {
        subject: 'SQL Básico',
        description: 'Consultas e manipulação de dados.',
        skills: ['SELECT', 'INSERT', 'UPDATE'],
        preview: 'Consultas SQL'
      },
      {
        subject: 'Tipos de Dados',
        description: 'Tipos de dados SQL e suas aplicações.',
        skills: ['VARCHAR', 'INT', 'DATE'],
        preview: 'Definição de esquemas'
      }
    ],
    '2': [
      {
        subject: 'Índices e Performance',
        description: 'Otimização de consultas com índices.',
        skills: ['Índices', 'EXPLAIN', 'Performance'],
        preview: 'Otimização de queries'
      },
      {
        subject: 'Transações',
        description: 'ACID e gerenciamento de transações.',
        skills: ['BEGIN', 'COMMIT', 'ROLLBACK'],
        preview: 'Controle de transações'
      },
      {
        subject: 'Views e Stored Procedures',
        description: 'Abstração de dados com views e procedures.',
        skills: ['CREATE VIEW', 'CREATE PROCEDURE', 'Funções'],
        preview: 'Abstração de lógica'
      }
    ],
    '3': [
      {
        subject: 'Design Avançado',
        description: 'Design de bancos de dados complexos.',
        skills: ['Particionamento', 'Replicação', 'Sharding'],
        preview: 'Arquitetura de dados'
      },
      {
        subject: 'NoSQL',
        description: 'Bancos de dados não relacionais.',
        skills: ['MongoDB', 'Redis', 'Cassandra'],
        preview: 'Modelagem NoSQL'
      },
      {
        subject: 'Segurança de Dados',
        description: 'Proteção e controle de acesso.',
        skills: ['GRANT', 'REVOKE', 'ROLES'],
        preview: 'Controle de acesso'
      }
    ]
  },
  iot: {
    '1': [
      {
        subject: 'Introdução ao IoT',
        description: 'Conceitos fundamentais de Internet das Coisas.',
        skills: ['Sensores', 'Atuadores', 'Conectividade'],
        preview: 'Conceitos básicos'
      },
      {
        subject: 'Arduino Básico',
        description: 'Programação de microcontroladores Arduino.',
        skills: ['C++', 'Pinos', 'Bibliotecas'],
        preview: 'Projetos Arduino'
      },
      {
        subject: 'Sensores',
        description: 'Tipos de sensores e suas aplicações.',
        skills: ['Temperatura', 'Umidade', 'Movimento'],
        preview: 'Leitura de sensores'
      }
    ],
    '2': [
      {
        subject: 'Comunicação de Dados',
        description: 'Protocolos de comunicação IoT.',
        skills: ['MQTT', 'HTTP', 'WebSocket'],
        preview: 'Protocolos IoT'
      },
      {
        subject: 'ESP32',
        description: 'Programação avançada com ESP32.',
        skills: ['WiFi', 'Bluetooth', 'Deep Sleep'],
        preview: 'Projetos ESP32'
      },
      {
        subject: 'Cloud IoT',
        description: 'Plataformas cloud para IoT.',
        skills: ['AWS IoT', 'Azure IoT', 'Google Cloud'],
        preview: 'Integração cloud'
      }
    ],
    '3': [
      {
        subject: 'Edge Computing',
        description: 'Processamento de dados na borda.',
        skills: ['Edge AI', 'Processamento Local', 'Latência'],
        preview: 'Computação de borda'
      },
      {
        subject: 'Segurança IoT',
        description: 'Segurança em dispositivos IoT.',
        skills: ['Criptografia', 'Autenticação', 'Segurança Física'],
        preview: 'Hardening IoT'
      },
      {
        subject: 'Projetos Integradores',
        description: 'Projetos completos de IoT.',
        skills: ['Integração', 'Deploy', 'Monitoramento'],
        preview: 'Sistemas IoT completos'
      }
    ]
  }
};

// Get activities for a subject and trimester
export function getActivities(subject, trimester) {
  return activitiesData[subject]?.[trimester] || [];
}

// Get all activities for a subject
export function getAllActivities(subject) {
  const data = activitiesData[subject];
  if (!data) return [];
  
  return [
    ...data['1'] || [],
    ...data['2'] || [],
    ...data['3'] || []
  ];
}
