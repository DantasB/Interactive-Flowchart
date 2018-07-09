/* Number of total columns/semesters: */
window.semesters = 10;

// Order of courses matters: do not swap positions. Append at the end.
window.courses = [
	{ name: "Computação I", credits: 5, code: "EEL170", semester: 1},
    	{ name: "Física Experimental I", credits: 1, code: "FIS111", semester: 1},
    	{ name: "Física I", credits: 4, code: "FIT112", semester: 1},
	{ name: "Química EE", credits: 4, code: "IQG111", semester: 1},
    	{ name: "Cálculo I", credits: 6, code: "MAC118", semester: 1},
	{ name: "Atividades Acad. Optativas", credits: 2, semester: 1, step: 1},
	{ name: "Engenharia e Meio Ambiente", credits: 2, code: "EEH210", semester: 2},
	{ name: "Computação II", credits: 5, code: "EEL270", semester: 2},
    	{ name: "Circuitos Lógicos", credits: 5, code: "EEL280", semester: 2},
    	{ name: "Física II", credits: 4, code: "FIT122", semester: 2, requirements: [2,4]},
    	{ name: "Física Experimental II", credits: 1, code: "FIS121", semester: 2, requirements: [1]},
    	{ name: "Cálculo II", credits: 4, code: "MAC128", semester: 2, requirements: [4]},
    	{ name: "Álgebra Linear II", credits: 4, code: "MAE125", semester: 2},
	{ name: "Sistemas Projetivos", credits: 4, code: "EEG105", semester: 3},
	{ name: "Sistemas Lineares I", credits: 5, code: "EEL350", semester: 3, requirements: [4]},
	{ name: "Métodos Mat. em Eng. Eletrônica", credits: 4, code: "EEL356", semester: 3, requirements: [4]},
    	{ name: "Física III", credits: 4, code: "FIM230", semester: 3, requirements: [4, 9]},
    	{ name: "Física Experimental III", credits: 1, code: "FIN231", semester: 3, requirements: [10]},
    	{ name: "Cálculo III", credits: 4, code: "MAC238", semester: 3, requirements: [11]},
	{ name: "Eletrônica I", credits: 3, code: "EEL315", semester: 4},
	{ name: "Circuitos Elétricos I", credits: 5, code: "EEL420", semester: 4, requirements: [14]},
    	{ name: "Algoritmos e Estrut. de Dados", credits: 5, code: "EEL470", semester: 4},
    	{ name: "Sistemas Digitais", credits: 5, code: "EEL480", semester: 4, requirements: [8]},
    	{ name: "Física IV", credits: 4, code: "FIM240", semester: 4, requirements: [16, 18]},
    	{ name: "Física Experimental IV", credits: 1, code: "FIN241", semester: 4, requirements: [16, 17]},
	{ name: "Eletrônica II", credits: 5, code: "EEL410", semester: 5, requirements: [19]},
	{ name: "Circuitos Elétricos II", credits: 5, code: "EEL525", semester: 5, requirements: [20]},
	{ name: "Teoria Eletromagnética II", credits: 5, code: "EEL535", semester: 5, requirements: [16, 17]},
	{ name: "Sistemas Lineares II", credits: 5, code: "EEL555", semester: 5, requirements: [14]},
	{ name: "Arquitetura de Computadores", credits: 5, code: "EEL580", semester: 5},
	{ name: "Eletrônica III", credits: 5, code: "EEL515", semester: 6, requirements: [25]},
	{ name: "Modelos Probabilísticos Eng.", credits: 4, code: "EEL630", semester: 6, requirements: [14, 15]},
	{ name: "Comunicações Analógicas", credits: 5, code: "EEL640", semester: 6, requirements: [14]},
	{ name: "Controle Linear I A", credits: 5, code: "EEL660", semester: 6, requirements: [14]},
	{ name: "Linguagens de Programação", credits: 5, code: "EEL670", semester: 6},
	{ name: "Eletrônica IV", credits: 5, code: "EEL615", semester: 7, requirements: [30]},
	{ name: "Processamento de Sinais", credits: 5, code: "EEL711", semester: 7, requirements: [26, 28]},
	{ name: "Comunicações Digitais", credits: 5, code: "EEL740", semester: 7, requirements: [32]},
	{ name: "Controle Linear II-A", credits: 5, code: "EEL760", semester: 7, requirements: [33]},
	{ name: "Sistemas Operacionais", credits: 5, code: "EEL770", semester: 7},
	{ name: "Projeto Integrado", credits: 1, code: "EELX00", semester: 7},
	{ name: "Conversão de Energia", credits: 5, code: "EEE387", semester: 8, requirements: [16,17]},
	{ name: "Instrum. e Técnicas de Medidas", credits: 5, code: "EEL710", semester: 8, requirements: [30]},
	{ name: "Projeto de Graduação", credits: 4, code: "EEWX00", semester: 8},
	{ name: "Atividades Acad. Optativas", credits: 20, semester: 8, step: 1},
	{ name: "Economia A", credits: 4, code: "EEI312", semester: 9},
	{ name: "Atividades Acad. Livre Escolha", credits: 4, semester: 9, step: 1},
	{ name: "Atividades Acad. Optativas", credits: 12, semester: 9, step: 1},
	{ name: "Organização das Indústrias", credits: 4, code: "EEI321", semester: 10},
	{ name: "Estágio Obrigatório", credits: 160, code: "EEWU00", semester: 10},
	{ name: "Atividades Acad. Livre Escolha", credits: 4, semester: 10, step: 1},
	{ name: "Atividades Acad. Optativas", credits: 2, semester: 10, step: 1},
	{ name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15}

    // { name: "Algoritmos e Programação", credits: 5, semester: 1},
    // { name: "Int. a Eng. Comp. e Informação", credits: 2, semester: 1},
    // { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 2},
    // { name: "Teoria da Computação", credits: 4, semester: 3},
    // { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 3},
    // { name: "Teoria dos Grafos", credits: 4, semester: 4, requirements: [13]},
    // { name: "Estatística e Mod. Probabilísticos", credits: 4, semester: 4},
    // { name: "Computadores e Sociedade", credits: 4, semester: 4},
    // { name: "Cálculo IV", credits: 4, semester: 4, requirements: [9]},
    // { name: "Banco de Dados", credits: 4, semester: 5},
    // { name: "Lógica Matemática", credits: 4, semester: 5},
    // { name: "Álg. Linear Computacional", credits: 4, semester: 5, requirements: [7, 16]},
    // { name: "Redes de Computadores I", credits: 4, semester: 5},
    // { name: "Química Experimental", credits: 2, semester: 5},
    // { name: "Otimização", credits: 4, semester: 6, requirements: [0, 16]},
    // { name: "Inteligência Computacional", credits: 4, semester: 6},
    // { name: "Engenharia de Software", credits: 4, semester: 6},
    // { name: "Redes de Computadores II", credits: 4, semester: 6},
    // { name: "Telecomunic.", credits: 4, semester: 6},
    // { name: "Computação Gráfica", credits: 4, semester: 6},
    // { name: "Programação Avançada", credits: 4, semester: 7, requirements: [13, 6]},
    // { name: "Computação de Alto Desempenho", credits: 3, semester: 7},
    // { name: "Sistemas Distribuídos", credits: 4, semester: 7},
    // { name: "Gestão do Conhecimento", credits: 4, semester: 7},
    // { name: "Atividades Acad. Optativas", credits: 8, semester: 7, step: 1},
    // { name: "Construção de Banco de Dados", credits: 4, semester: 8, requirements: [26]},
    // { name: "Empreend. I", credits: 4, semester: 8},
    // { name: "Qualidade de Software", credits: 4, semester: 8, requirements: [34]},
    // { name: "Projeto de Graduação", credits: 4, semester: 8},
    // { name: "Atividades Acad. Optativas", credits: 8, semester: 8, step: 1},
    // { name: "Estágio Obrigatório", credits: 160, semester: 9},
    // { name: "Atividades Acad. Optativas", credits: 16, semester: 9, step: 1},
    // { name: "Atividades Acad. Optativas", credits: 8, semester: 10, step: 1},
    // { name: "Atividades Acad. Livre Escolha", credits: 8, semester: 10, step: 1},
    // { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15},
]
