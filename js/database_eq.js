/* Number of total semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];


window.courses = [{
        name: "Desenho Técnico",
        credits: 3,
        code: "EEG111",
        semester: 1
    },
    {
        name: "Introd. calculo de processos",
        credits: 3,
        code: "EQE112",
        semester: 1
    },
    {
        name: "Introd. Proc Quím Bioquímic",
        credits: 3,
        code: "EQW112",
        semester: 1
    },
    {
        name: "Química Geral",
        credits: 4,
        code: "IQG115",
        semester: 1
    },
    {
        name: "Cálculo I",
        credits: 6,
        code: "MAC118",
        semester: 1
    },
    {
        name: "Optativas",
        credits: 2,
        semester: 1,
        step: 1
    },
    {
        name: "Fisica Experimental",
        credits: 1,
        code: "FIS111",
        semester: 2
    },
    {
        name: "Fisica I",
        credits: 4,
        code: "FIT112",
        semester: 2
    },
    {
        name: "Química Analítica",
        credits: 4,
        code: "IQA121",
        semester: 2,
        requirements: [3]
    },
    {
        name: "Química Analítica Exp. I",
        credits: 2,
        code: "IQO128",
        semester: 2,
        requirements: [2]
    },
    {
        name: "Química Organica I",
        credits: 4,
        code: "IQO128",
        semester: 2,
        requirements: [2]
    },
    {
        name: "Química Orgânica Exp. I - EQ",
        credits: 2,
        code: "IQO130",
        semester: 2,
        requirements: [3]
    },
    {
        name: "Cálculo II",
        credits: 4,
        code: "MAC128",
        semester: 2,
        requirements: [4]
    },
    {
        name: "Fisica III",
        credits: 4,
        code: "FIM230",
        semester: 3,
        requirements: [12, 7]
    },
    {
        name: "Física Experimental III",
        credits: 1,
        code: "FIN231",
        semester: 3,
        requirements: [1]
    },
    {
        name: "Química Analítica Exp II",
        credits: 1,
        code: "IQA243",
        semester: 3,
        requirements: [8, 9]
    },
    {
        name: "Termodinâmica Clássica",
        credits: 4,
        code: "IQA123",
        semester: 3,
        requirements: [12]
    },
    {
        name: "Química Experimental",
        credits: 2,
        code: "IQG231",
        semester: 3,
        requirements: [3]
    },
    {
        name: "Química Orgânica II",
        credits: 4,
        code: "IQO235",
        semester: 3,
        requirements: [10]
    },
    {
        name: "Cálculo III",
        credits: 4,
        code: "MAC238",
        semester: 3,
        requirements: [12]
    },
    {
        name: "Bioquímica EQ",
        credits: 5,
        code: "IQB248",
        semester: 4,
        requirements: [16, 18]
    },
    {
        name: "Fenômeno de Superfície e Eletroq",
        credits: 4,
        code: "IQF351",
        semester: 4,
        requirements: [16]
    },
    {
        name: "Equi Fases Sist Multicompostos",
        credits: 2,
        code: "IQF353",
        semester: 4,
        requirements: [16]
    },
    {
        name: "Química Orgânica Exp Ii-eq",
        credits: 2,
        code: "IQO246",
        semester: 4,
        requirements: [10, 11]
    },
    {
        name: "Calculo IV",
        credits: 4,
        code: "MAC248",
        semester: 4,
        requirements: [12]
    },
    {
        name: "Álgebra Linear II - EQ",
        credits: 4,
        code: "MAE245",
        semester: 4,
        requirements: [12]
    },
    {
        name: "Microbiologia Industrial",
        credits: 3,
        code: "EQB353",
        semester: 5,
        requirements: [20]
    },
    {
        name: "Mecânica dos Fluídos",
        credits: 4,
        code: "EQE357",
        semester: 5
    },
    {
        name: "Métod Num Aplic aos Proc Quím",
        credits: 3,
        code: "EQE358",
        semester: 5
    },
    {
        name: "Termodinâmica",
        credits: 4,
        code: "EQE359",
        semester: 5
    },
    {
        name: "Introdução à Química Quântica",
        credits: 4,
        code: "IQF361",
        semester: 5,
        requirements: [12]
    },
    {
        name: "Físico-química Experimental/eq",
        credits: 1,
        code: "IQF367",
        semester: 5,
        requirements: [21]
    },
    {
        name: "Estatística",
        credits: 4,
        code: "MAD469",
        semester: 5,
        requirements: [12]
    },
    {
        name: "Fundam de Engen Bioquimica II",
        credits: 3,
        code: "EQB363",
        semester: 6,
        requirements: [16]
    },
    {
        name: "Ciências Soc e Introd à Econom",
        credits: 3,
        code: "EQE360",
        semester: 6
    },
    {
        name: "Cinética Química e Reatores",
        credits: 5,
        code: "EQE364",
        semester: 6
    },
    {
        name: "Transferência de Calor",
        credits: 4,
        code: "EQE368",
        semester: 6
    },
    {
        name: "Ciência dos Materiais",
        credits: 4,
        code: "EQI365",
        semester: 6,
        requirements: [3]
    },
    {
        name: "Análise Instrumental",
        credits: 2,
        code: "IQA364",
        semester: 6,
        requirements: [8, 9]
    },
    {
        name: "Química Inorgânica",
        credits: 4,
        code: "IQG244",
        semester: 6,
        requirements: [17]
    },
    {
        name: "Modelagem e Dinâmica de Proces",
        credits: 3,
        code: "EQE400",
        semester: 7
    },
    {
        name: "Admin.e Organização Industrial",
        credits: 3,
        code: "EQE470",
        semester: 7
    },
    {
        name: "Operações Unitárias I",
        credits: 4,
        code: "EQE473",
        semester: 7
    },
    {
        name: "Transferencia de Massa",
        credits: 3,
        code: "EQE476",
        semester: 7
    },
    {
        name: "Processos Inorgânicos I",
        credits: 4,
        code: "EQI471",
        semester: 7
    },
    {
        name: "Processos Inorgânicos - Exp.",
        credits: 2,
        code: "EQI472",
        semester: 7,
        requirements: [17]
    },
    {
        name: "Processos Orgânicos",
        credits: 4,
        code: "EQO475",
        semester: 7,
        requirements: [18]
    },
    {
        name: "Engenharia do Meio Ambiente",
        credits: 4,
        code: "EQB485",
        semester: 8,
        requirements: [26, 42]
    },
    {
        name: "Operações Unitárias II",
        credits: 5,
        code: "EQB482",
        semester: 8
    },
    {
        name: "Planej e Avaliação de Projetos",
        credits: 3,
        code: "EQE486",
        semester: 8
    },
    {
        name: "Control e Instrum de Processos",
        credits: 4,
        code: "EQE487",
        semester: 8
    },
    {
        name: "Engenharia de Processos",
        credits: 4,
        code: "EQE489",
        semester: 8
    },
    {
        name: "Optativas",
        credits: 4,
        semester: 8,
        step: 1
    },
    {
        name: "Segurança de Proc e Prev de Perdas",
        credits: 3,
        code: "EQB592",
        semester: 9,
        requirements: [32]
    },
    {
        name: "Tecnologia Orgânica experimental",
        credits: 2,
        code: "EQB595",
        semester: 9,
        requirements: [46]
    },
    {
        name: "Livre Escolha",
        credits: 4,
        semester: 9,
        step: 1
    },
    {
        name: "Optativas",
        credits: 4,
        semester: 9,
        step: 1
    },
    {
        name: "Optativas Grupo 2",
        credits: 3,
        semester: 9,
        step: 1
    },
    {
        name: "Optativas Grupo 3",
        credits: 2,
        semester: 9,
        step: 1
    },
    {
        name: "Laboratório de Engenharia Química",
        credits: 2,
        code: "EQE598",
        semester: 9
    },
    {
        name: "Estágio Superv em Eng de Alim",
        credits: 2,
        code: "EQWU95",
        semester: 10
    },
    {
        name: "Livre Escolha",
        credits: 4,
        semester: 10,
        step: 1
    },
    {
        name: "Optativas",
        credits: 4,
        semester: 10,
        step: 1
    },
    {
        name: "Laboratório de Engenharia Química",
        credits: 4,
        code: "EQE598",
        semester: 10
    }
]
