/* Number of total columns/semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff"];


window.courses = [
    0{ name: "Biologia Molecular", credits: 1, code: "BMH126", semester: 1},
    1{ name: "Embriologia", credits: 1, code: "BMH127", semester: 1},
    2{ name: "Bioquímica I", credits: 3, code: "BQM101", semester: 1},
    3{ name: "ICF", credits: 2, code: "FFC111", semester: 1},
    4{ name: "Metodologia Científica", credits: 2, code: "FFP111", semester: 1},
    5{ name: "Biofísica", credits: 3, code: "FFW112", semester: 1, corequirements: [1]},
    6{ name: "Química Geral I", credits: 4, code: "IQG114", semester: 1},
    7{ name: "Cálculo p/ Farmácia", credits: 3, code: "MAC108", semester: 1},
    8{ name: "PCI I ", credits: 8, code: "BMW203", semester: 2, requirements: [0, 2]},
    9{ name: "Bioquímica II", credits: 4, code: "BQM103", semester: 2, requirements: [2]},
    10{ name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},
    11{ name: "Química Orgânica I", credits: 4, code: "IQO120", semester: 2, requirements: [6]},
    12{ name: "Bioestatística", credits: 3, code: "MAD237", semester: 2},
    13{ name: "Atividades Acad. Optativas", credits: 2, semester: 2},
    14{ name: "PCI II", credits: 11, code: "BMW204", semester: 3, requirements: [8]},
    15{ name: "Química Analítica I", credits: 2, code: "IQA123", semester: 3, requirements: [6], corequirements: [15]},
    16{ name: "Química Analítica Exp. I", credits: 2, code: "IQA124", semester: 3, requirements: [6], corequirements: [14]},
    17{ name: "Físico-Química ", credits: 4, code: "IQF235", semester: 3, requirements:[7]},
    18{ name: "Química Orgânica II", credits: 3, code: "IQO230", semester: 3, requirements:[11]},
    19{ name: "Química Orgânica Exp. I", credits: 2, code: "IQO242", semester: 3, requirements: [10, 11]},
    20{ name: "Farmacobotânica", credits: 3, code: "FFP600", semester: 4},
    21{ name: "Iniciacao Científica", credits: 2, code: "FFP111", semester: 4, requirements: [4]},
    22{ name: "Química Analítica II", credits: 2,code: "IQA233", semester: 4, requirements: [15, 16], corequirements: [23]},
    23{ name: "Química Analítica Exp. II", credits: 2, code: "IQA234", semester: 4, requirements: [15, 16], corequirements: [22]},
    24{ name: "Bioinorgânica", credits: 4, code: "IQG234", semester: 4, requirements: [10]},
    25{ name: "Métodos Espectrométricos", credits: 3, code: "IQO220", semester: 4, requirements: [18, 19]},
    26{ name: "Química Orgânica III", credits: 3, code: "IQO240", semester: 4, requirements: [18]},
    27{ name: "Atividades Acad. Optativas", credits: 3, semester: 4},
    28{ name: "Farmacocinética e Farmacodinâmica", credits: 2, code: "BMF310", semester: 5, requirements: [9, 14]},
    29{ name: "Saúde Coletiva", credits: 2, code: "FFC303", semester: 5},
    30{ name: "Análises Farmacêuticas", credits: 5, code: "FFM302", semester: 5, requirements: [17, 22, 23]},
    31{ name: "Política de Saúde", credits: 2, code: "FFM311", semester: 5},
    32{ name: "Microbiologia e Imunologia", credits: 8, code: "IMW360", semester: 5, requirements: [2]},
    33{ name: "Química Orgânica Exp. II", credits: 2, code: "IQO251", semester: 5, requirements: [19, 25, 26]},
    34{ name: "Atividades Acad. Optativas", credits: 2, semester: 5},
    35{ name: "Farmacologia Neuroendócrina", credits: 4, code: "BFM320", semester:6, requirements: [13, 28]},
    36{ name: "Parasitologia", credits: 3, code: "CFP215", semester: 6, requirements: [13, 32]},
    37{ name: "Micro Imuno Clínica", credits: 3, code: "FFC480", semester: 6, requirements: [32]},
    38{ name: "Metabolismo Integrado", credits: 4, code: "FFI311", semester: 6, requirements: [9]},
    39{ name: "Farmacotécnica I", credits: 4, code: "FFM313", semester: 6, requirements: [28]},
    40{ name: "Farmacognosia I", credits: 3, code: "FFP313", semester: 6, requirements: [11, 26]},
    41{ name: "Química de Alimentos", credits: 3, code: "FFP324", semester: 6, requirements: [9, 22]},
    42{ name: "Farmacologia Cardio/Quimio", credits: 4, code: "BMF410", semester: 7, requirements: [14, 35]},
    43{ name: "Bioquímica Clínica", credits: 3, code: "FFC304", semester: 7, requirements: [9, 14]},
    44{ name: "Diagnóstico Clínico Laboratorial", credits: 2, code: "FFC321", semester: 7, requirements: [32, 36]},
    45{ name: "Hematologia", credits: 2, code: "FFC322", semester:7, requirements: [14]},
    46{ name: "Farmacotécnica II", credits: 4, code: "FFM323", semester: 7, requirements: [39]},
    47{ name: "Assist. e Atenção Farm.", credits: 2, code: "FFM481", semester: 7, requirements: [35, 39]},
    48{ name: "Estágio Sup. Farm. Comun.", credits: 2, code: "FFM481", semester: 7, requirements: [28, 39]},
    49{ name: "Farmacognosia II", credits: 3, code: "FFP323", semester: 7, requirements: [40]},
    50{ name: "Análises de Alimentos", credits: 3, code: "FFP403", semester: 7, requirements: [41]},
    51{ name: "Parasitologia e Micologia Clínica", credits: 3, code: "FFC406", semester: 8, requirements: [35]},
    52{ name: "Química Farm. Med.", credits: 5, code: "FFI401", semester: 8, requirements: [26, 42]},
    53{ name: "Farmácia Hospitalar", credits: 2, code: "FFM300", semester: 8, corequirements: [42, 46]},
    54{ name: "Deonto. e Legisl. Farmacêutica", credits: 2, code: "FFM301", semester: 8},
    55{ name: "Farmaco-epidemiologia", credits: 2, code: "FFM402", semester: 8, requirements: [12, 29]},
    56{ name: "Farmacotécnica Hospitalar", credits: 2, code: "FFM403", semester: 8, requirements: [42, 46]},
    57{ name: "Tecnologia Ind. Farm.", credits: 4, code: "FFM408", semester: 8, requirements: [10, 39]},
    58{ name: "Estág. Sup. Farm. Manip. Alopática", credits: 2, code: "FFMU07", semester: 8, requirements: [46], corequirements: [53]},
    59{ name: "Bromatologia em Saúde", credits: 3, code: "FFP402", semester: 8, requirements: [41]},
    60{ name: "Atividades Acad. Livre. Esc.", credits: 2, semester: 8},
    61{ name: "Atividades Acad. Optativas", credits: 2, semester: 8},
    62{ name: "Toxicologia Geral", credits: 3, code: "FFC314", semester: 9, requirements:[26, 28]},
    63{ name: "Con. Bio. Micro. Quali. Pro. Farma.", credits: 4, code: "FFI402", semester: 9, requirements:[28, 32]},
    64{ name: "Biofarmácia", credits: 2, code: "FFM405", semester: 9, requirements: [46]},
    65{ name: "Dermocosméticos", credits: 2, code: "FFM406", semester: 9, requirements: [39]},
    66{ name: "Biotecnologia Farmacêutica", credits: 3, code: "FFM426", semester: 9, requirements: [32]},
    67{ name: "Estágio Sup. Farmácia Hosp.", credits: 2, code: "FFMU08", semester: 9, requirements: [42, 45, 53]},
    68{ name: "TCC", credits: 0, code: "FFWK02", semester: 9, requirements: [21]},
    69{ name: "Economia e Adm, Empr. Farm.", credits: 3, code: "IEEE326", semester: 9},
    70{ name: "Atividades Acad. Livre. Esc.", credits: 3, semester: 9},
    71{ name: "Atividades Acad. Optativas", credits: 6, semester: 9, step: 1},
    72{ name: "Estágio Sup Especialidades", credits:8, code: "FFWU06", semester: 10},
]
