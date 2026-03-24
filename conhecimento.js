// ==========================================
// 🧠 BANCO DE CONHECIMENTO DO RVO AGROBOT
// Arquivo exclusivo para armazenar centenas de respostas da IA.
// ==========================================

const bancoDeConhecimento = [
    // --- 📊 ESTIMATIVAS E COLHEITA ---
    {
        palavras: ["produtividade", "sacas", "estimativa", "colher", "rendimento"],
        resposta: "Analisando a biometria do Talhão 250, a projeção atual para a Zona de Alto Vigor é de 72 sc/ha. A estimativa total está próxima de 7.995 sacas."
    },
    {
        palavras: ["perda", "máquina", "telemetria", "colheitadeira", "plataforma"],
        resposta: "Se o cálculo de perdas passar de 60 kg/ha, o sistema entra em alerta amarelo (ATENÇÃO). Geralmente, perdas à frente da barra de corte indicam a necessidade de ajustar o molinete."
    },
    {
        palavras: ["umidade", "grão", "seco", "úmido"],
        resposta: "A umidade ideal para colheita da soja é entre 13% e 15%. Grãos muito secos (abaixo de 12%) sofrem dano mecânico e quebra na máquina. Grãos muito úmidos (acima de 15%) terão desconto no silo por secagem."
    },

    // --- 🌧️ CLIMA E PLUVIOMETRIA ---
    {
        palavras: ["chuva", "clima", "pluviômetro", "água", "choveu"],
        resposta: "Notei um volume recente acumulado. Se a umidade do grão passar do ponto ideal, podemos ter problemas de perda na colheitadeira. Mantenha o avanço entre 5 e 6,5 km/h."
    },
    {
        palavras: ["seca", "estiagem", "falta de água", "estresse hídrico"],
        resposta: "Em caso de veranico forte, as plantas em V4 a V6 podem paralisar o crescimento. O pior cenário é a seca na fase R3 a R5 (enchimento de grão), que derruba drasticamente as sacas por hectare. O uso de bioestimulantes via foliar pode ajudar na mitigação de estresse."
    },

    // --- 🧪 NUTRIÇÃO E SOLO ---
    {
        palavras: ["calcário", "gesso", "calagem", "correção", "alumínio", "ph"],
        resposta: "A correção de base é fundamental. Áreas de baixo vigor no mapa de NDVI geralmente apresentam alta saturação de alumínio ou falta de cálcio em profundidade. O gesso agrícola é excelente para descer o cálcio para o perfil do solo."
    },
    {
        palavras: ["fósforo", "potássio", "npk", "adubo", "adubação"],
        resposta: "A exportação de Potássio (K) pela soja é muito alta (cerca de 20kg por tonelada de grão). Garanta que a sua adubação de base ou cobertura reponha essa extração para não empobrecer o talhão para a próxima safra."
    },
    {
        palavras: ["boro", "cobalto", "molibdênio", "foliar", "micronutrientes"],
        resposta: "A aplicação de CoMo (Cobalto e Molibdênio) é crucial junto ou logo após a inoculação para garantir o funcionamento dos nódulos nas raízes. O Boro foliar no pré-florescimento ajuda muito no pegamento das flores e evita abortamento de vagens."
    },

    // --- 🐛 SANIDADE (MIP) - PRAGAS E DOENÇAS ---
    {
        palavras: ["ferrugem", "doença", "fungicida", "asiática"],
        resposta: "A Ferrugem Asiática (Phakopsora pachyrhizi) é a doença mais severa. A aplicação zero deve ocorrer no fechamento do dossel ou preventivamente. Monitore o microclima: umidade na folha e noites amenas são o estopim."
    },
    {
        palavras: ["percevejo", "marrom", "fedor", "sugador"],
        resposta: "O percevejo-marrom e o percevejo-pequeno atacam diretamente a vagem, causando grãos chochos ou com manchas, além de reter folhas. O nível de ação é de 2 percevejos vivos por pano de batida."
    },
    {
        palavras: ["lagarta", "helicoverpa", "falsa medideira", "inseticida"],
        resposta: "A desfolha no período vegetativo pode chegar até 30% sem perda severa de rendimento, mas no período reprodutivo (R1 a R6), o limite crítico cai para 15%. Fique de olho na Helicoverpa, que pode atacar direto as vagens."
    },
    {
        palavras: ["buva", "amargoso", "daninhas", "mato", "dessecação"],
        resposta: "Capim-amargoso e Buva são os maiores inimigos hoje por causa da resistência ao glifosato. Recomendo o uso de sequencial na dessecação pré-plantio e monitoramento intensivo. Não deixe mato maturar e soltar sementes."
    },

    // --- 🛰️ AGRICULTURA DE PRECISÃO ---
    {
        palavras: ["ndvi", "satélite", "mapa", "imagem", "vigor", "espectral"],
        resposta: "As imagens do satélite classificaram o talhão em 3 zonas. 78% da área apresenta vigor alto. Utilize as imagens RGB para validar falhas de estande ou sombreamento por nuvens nas áreas de baixo vigor (7%)."
    },
    {
        palavras: ["drone", "pulverização", "voo"],
        resposta: "A aplicação por drone é excelente para áreas de difícil acesso ou para aplicações localizadas (catarata de reboleiras) em cima de manchas de baixo vigor identificadas no NDVI. O rendimento é menor, mas a precisão é cirúrgica."
    },

    // --- 🌱 PLANTIO E CICLO ---
    {
        palavras: ["semente", "plantio", "cultivar", "estande", "população"],
        resposta: "Um estande ideal para cultivares modernas gira em torno de 260 a 300 mil plantas por hectare, dependendo da época de semeadura. Não esqueça de conferir a qualidade do leito de semeadura (profundidade de 3 a 5 cm)."
    },
    {
        palavras: ["inoculação", "bactéria", "bradyrhizobium", "nitrogênio"],
        resposta: "A soja não precisa de adubação com ureia! A fixação biológica de nitrogênio (FBN) pelas bactérias Bradyrhizobium nos nódulos fornece todo o N necessário. Faça uma boa inoculação e economize milhares de reais em adubo nitrogenado."
    },

    // --- 💻 INFRAESTRUTURA E TECNOLOGIA DA FAZENDA ---
    {
        palavras: ["rede", "internet", "cisco", "switch", "conexão", "servidor", "ubuntu", "backup"],
        resposta: "📡 Sistema Operacional: Ubuntu 22.04 LTS ativo. Os backups dos arquivos de configuração dos switches Cisco série 9300 da fazenda via VSFTP e TFTP foram realizados com sucesso. A telemetria das máquinas tem tráfego garantido e rede estável!"
    },
    {
        palavras: ["tocar", "musica", "rádio", "som", "banda"],
        resposta: "🚜 No trator, a melhor pedida para focar no trabalho e não dar sono na reta é colocar um som do Nirvana, Queens of the Stone Age ou do Dave Grohl para animar o plantio! Apenas certifique-se de manter os olhos no painel de telemetria da RVO Tech."
    },
    
    // --- 🤝 SAUDAÇÕES ---
    {
        palavras: ["olá", "oi", "bom dia", "boa tarde", "boa noite", "tudo bem"],
        resposta: "Olá! Tudo excelente por aqui. Os sistemas da RVO Tech estão operando a 100%. Como posso ajudar a aumentar a produtividade da fazenda hoje?"
    },
    {
        palavras: ["obrigado", "valeu", "show", "perfeito", "ajudou"],
        resposta: "Por nada, Renato! Estou sempre aqui monitorando os dados no servidor para garantir a máxima eficiência da lavoura. Mais alguma dúvida?"
    }

    // ⬇️ PARA CHEGAR A 500, É SÓ IR COPIANDO ESTE BLOCO ABAIXO E COLANDO AQUI! ⬇️
    /*
    ,
    {
        palavras: ["palavra1", "palavra2"],
        resposta: "Sua resposta maravilhosa e técnica."
    }
    */
];
