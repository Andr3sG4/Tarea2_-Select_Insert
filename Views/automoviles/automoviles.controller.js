function init() {
    $("#form_automoviles_Automoviles").on("submit", function (e) {
        guardaryeditar(e);
    });
}

$().ready(() => {
    
    todos_controlador();
});

var todos_controlador = () => {
    var todos = new Automoviles_Automoviles_Model("", "", "", "", "", "", "", "", "", "todos");
    todos.todos();
}

var guardaryeditar = (e) => {
    e.preventDefault();
    var formData = new FormData($("#form_automoviles_Automoviles")[0]);
    var automoviles = new Automoviles_Automoviles_Model('', '', '', '', '', '', '', '', formData, 'insertar');
    automoviles.insertar();
}

    ; init();
