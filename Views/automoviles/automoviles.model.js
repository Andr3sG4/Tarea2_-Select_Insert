class Automoviles_Automoviles_Model {
    constructor(
        Id_Automoviles,
        Marca,
        Modelo,
        Año,
        Color,
        Transmisión,
        Tipo_Combustible,
        Num_Puertas,
        Precio,
        Ruta
    ) {
        this.Id_Automoviles = Id_Automoviles;
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Año = Año;
        this.Color = Color;
        this.Transmisión = Transmisión;
        this.Tipo_Combustible = Tipo_Combustible;
        this.Num_Puertas = Num_Puertas;
        this.Precio = Precio;
        this.Ruta = Ruta;
    }
    todos() {
        var html = "";
        $.get("../../Controllers/automoviles.controller.php?op=" + this.Ruta, (res) => {
            res = JSON.parse(res);
            $.each(res, (index, valor) => {
                html += `<tr>
                  <td>${index + 1}</td>
                  <td>${valor.Marca}</td>
                  <td>${valor.Modelo}</td>
                  <td>${valor.Año}</td>
                  <td>${valor.Color}</td>
                  <td>${valor.Transmisión}</td>
                  <td>${valor.Tipo_Combustible}</td>
                  <td>${valor.Num_Puertas}</td>
                  <td>${valor.Precio}</td>
              <td>
              <button class='btn btn-success' onclick='editar(${valor.Id_Automoviles
                    })'>Editar</button>
              <button class='btn btn-danger' onclick='eliminar(${valor.Id_Automoviles
                    })'>Eliminar</button>
              <button class='btn btn-info' onclick='ver(${valor.Id_Automoviles
                    })'>Ver</button>
              </td></tr>
                  `;
            });
            $("#tabla_automoviles_Automoviles").html(html);
        });
    }

    insertar() {
        var dato = new FormData();
        dato = this.Precio;
        $.ajax({
            url: "../../Controllers/automoviles.controller.php?op=insertar",
            type: "POST",
            data: dato,
            contentType: false,
            processData: false,
            success: function (res) {
                res = JSON.parse(res);
                if (res === "ok") {
                    Swal.fire("automoviles", "Automóvil Registrado Exitosamente", "success");
                    todos_controlador();
                } else {
                    Swal.fire("Error", res, "error");
                }
            }
        });
        this.limpia_Cajas();
    }

    limpia_Cajas() {
        document.getElementById("Marca").value = "";
        document.getElementById("Modelo").value = "";
        document.getElementById("Año").value = "";
        document.getElementById("Color").value = "";
        document.getElementById("Transmisión").value = "";
        document.getElementById("Tipo_Combustible").value = "";
        document.getElementById("Num_Puertas").value = "";
        document.getElementById("Precio").value = "";
        $("#Modal_automoviles_Automoviles").modal("hide");
    }
}
