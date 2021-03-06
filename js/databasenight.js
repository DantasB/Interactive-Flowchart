/* Number of total semesters: */
window.semesters = 12;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];


window.courses = [
    { name: "Biologia Molecular", credits: 1, code: "BMH126", semester: 1 },
{ name: "Embriologia", credits: 1, code: "BMH127", semester: 1 },
{ name: "Bioquímica I", credits: 3, code: "BQM101", semester: 1 },
{ name: "ICF", credits: 2, code: "FFC111", semester: 1 },
{ name: "Metodologia Científica", credits: 2, code: "FFP111", semester: 1 },
{ name: "Biofísica", credits: 3, code: "FFW112", semester: 1, corequirements: [1] },
{ name: "Química Geral I", credits: 4, code: "IQG114", semester: 1 },
{ name: "Cálculo p/ Farmácia", credits: 3, code: "MAC108", semester: 1 },
{ name: "Atividades Acad. Opt", credits: 2, semester: 1 },
{ name: "Bas Morf Bio Apl Far I ", credits: 8, code: "BMW203", semester: 2, requirements: [0, 2] },
{ name: "Bioquímica II", credits: 4, code: "BQM103", semester: 2, requirements: [2] },
{ name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6] },
{ name: "Química Orgânica I", credits: 4, code: "IQO120", semester: 2, requirements: [6] },
{ name: "Atividades Acad. Opt", credits: 3, semester: 2 },
{ name: "Bas Morf Bio Apl Far II", credits: 11, code: "BMW204", semester: 2, requirements: [9] },
{ name: "Físico-Química I", credits: 4, code: "IQF235", semester: 3, requirements: [7] },
{ name: "Quimica Orgânica II", credits: 3, code: "IQO230", semester: 3, requirements: [12] },
{ name: "Bioestatística", credits: 3, code: "MAD237", semester: 3 },
{ name: "Atividades Acad. Opt", credits: 2, semester: 3 },
{ name: "Saúde Coletiva", credits: 2, code: "FFC303", semester: 4 },
{ name: "Pesq Desenv (IC)", credits: 2, code: "FFWX02", semester: 4, requirements: [4] },
{ name: "Analítica Farm I", credits: 2, code: "IQA123", semester: 4, requirements: [6], corequirements: [22] },
{ name: "Analítica Farm  Exp I", credits: 2, code: "IQA124", semester: 4, requirements: [6], corequirements: [21] },
{ name: "Química Orgânica III", credits: 3, code: "IQO240", semester: 4, requirements: [16] },
{ name: "Química Org Exp I", credits: 2, code: "IQ0242", semester: 4, requirements: [11] },
{ name: "Política de Saúde", credits: 2, code: "FFM311", semester: 5 },
{ name: "Farmacobot", credits: 3, code: "FFP600", semester: 5 },
{ name: "Analítica Farm II", credits: 2, code: "IQA233", semester: 5, requirements: [21,22], corequirements: [28] },
{ name: "Analítica Farm Exp II", credits: 2, code: "IQA234", semester: 5, requirements: [21,22], corequirements: [27] },
{ name: "Bioinorgânica Ff", credits: 4, code: "IQG234", semester: 5, requirements: [11] },
{ name: "Métodos Espectro", credits: 3, code: "IQO220", semester: 5, requirements: [16,24] },
{ name: "Atividades Acad. Opt", semester: 5, credits: 2 },
{ name: "Farmacocin e Farmacodi", credits: 2, code: "BMF310", semester: 6, requirements: [10, 14] },
{ name: "Farmacognos I", credits: 2, code: "FFP313", semester: 6, requirements: [23,26] },
{ name: "Microbiologia e Imuno", credits: 8, code: "IMW360", semester: 6, requirements: [2] },
{ name: "Atividades Acad Livre", semester: 6, credits:  3},
{ name: "Farmacologia Neuroend", credits: 4, code: "BMF320", semester: 7, requirements: [14, 32] },
{ name: "Farmacotec I", credits: 4, code: "FFM313", semester: 7, requirements: [32] },
{ name: "Farmacognos II", credits: 3, code: "FFP323", semester: 7, requirements: [33] },
{ name: "Química Org Exp II", credits: 2, code: "IQO251", semester: 7, requirements: [23, 24, 30] },
{ name: "Parasitologia F", credits: 3, code: "CFP215", semester: 8, requirements: [14,34] },
{ name: "Metabolismo Integrado", credits: 4, code: "FFI311", semester: 8, requirements: [10] },
{ name: "Análises Farms", credits: 5, code: "FFM302", semester: 8, requirements: [15,27,28] },
{ name: "Ass e Aten Farm", credits: 2, code: "FFM481", semester: 8, requirements: [25, 36] },
{ name: "Est Sup Farm Comun", credits: 2, code: "FFMU00", semester: 8, requirements: [32,37] },
{ name: "Quimica de Alimentos", credits: 3, code: "FFP324", semester: 8, requirements: [10, 27] },
{ name: "Farm Card Qui", credits: 4, code: "BMF410", semester: 9, requirements: [14, 36] },
{ name: "Micro e Imuno Clinica", credits: 3, code: "FFC480", semester: 9, requirements: [34] },
{ name: "Farmacotec II", credits: 4, code: "FFM323", semester: 9, requirements: [37] },
{ name: "Est Sup Far Man Alop", credits: 2, code: "FFMU07", semester: 9, corequirements: [40,42] },
{ name: "Análises de Alimentos", credits: 3, code: "FFP403", semester: 9, requirements: [39] },
{ name: "Bioquímica Clínica", credits: 3, code: "FFC304", semester: 10, requirements: [10, 14] },
{ name: "Diagnóstico Clín Lab", credits: 2, code: "FFC321", semester: 10, requirements: [34, 38] },
{ name: "Hematologia", credits: 2, code: "FFC322", semester: 10, requirements: [14] },
{ name: "Con Biol Micr Qua Pro Far", credits: 4, code: "FFI402", semester: 10, requirements: [32,34] },
{ name: "Farmácia Hospitalar", credits: 2, code: "FFM300", semester: 10, corequirements: [40, 42] },
{ name: "Dermocosm", credits: 2, code: "FFM406", semester: 10, requirements: [37] },
{ name: "Química Farm Med", credits: 5, code: "FFM480", semester: 10, requirements: [23, 40] },
{ name: "Toxicologia Geral", credits: 3, code: "FFC314", semester: 11, corequirements: [23, 31] },
{ name: "Deont e Legisl Farm", credits: 2, code: "FFM301", semester: 11 },
{ name: "Farmacoepid", credits: 2, code: "FFM402", semester: 11, requirements: [17, 19] },
{ name: "Farmacotec Hosp", credits: 2, code: "FFM403", semester: 11, corequirements: [42, 49] },
{ name: "Tecnologia Indust Farm", credits: 4, code: "FFM408", semester: 11, requirements: [11, 37] },
{ name: "Biotecnologia Farm", credits: 3, code: "FFM426", semester: 11, requirements: [34, 39] },
{ name: "Est Sup Farm Hosp", credits: 2, code: "FFMU08", semester: 11, requirements: [40, 42, 49] },
{ name: "TCC", credits: 0, code: "FFWK02", semester: 11, requirements: [20] },
{ name: "Economia e Administ Emp Farm", credits: 3, code: "IEE326", semester: 11},
{ name: "Atividades Acad Livre", credits: 2, semester: 11 },
{ name: "Atividades Acad. Opt", credits: 3, semester: 11 },
{ name: "Parasito Mico Clin", credits: 3, code: "FFC406", semester: 12, requirements: [38] },
{ name: "Biofarmácia", credits: 2, code: "FFM405", semester: 12, requirements: [42] },
{ name: "Bromatologia em Saúde", credits: 3, code: "FFP402", semester: 12, requirements:[39] },
{ name: "Estágio Sup Espec", credits: 8, code: "FFWU06", semester: 12 },
{ name: "Atividades Acad. Opt", credits: 4, semester: 12 },
{ name: "Ativ. Complem.", credits: 180, semester: 12, step: 10},
]
