function init() {
    const alumnosJSON = `[{"nombre": "Juan","apellidos": "González Pérez","fecha_de_nacimiento": "1999-05-15","dni": "12345678A","telefono": "123456789","mail": "juan@example.com","notam2": 7.5,"notam3": 8,"notam4": 6.5,"notam5": 9,"notam6": 7,"notam9": 8},
    {"nombre": "María","apellidos": "López García","fecha_de_nacimiento": "2000-08-25","dni": "23456789B","telefono": "987654321","mail": "maria@example.com","notam2": 8,"notam3": 7,"notam4": 8.5,"notam5": 9,"notam6": 6.5,"notam9": 7.5},
    {"nombre": "Pedro","apellidos": "Martínez Ruiz","fecha_de_nacimiento": "2001-03-10","dni": "34567890C","telefono": "654321987","mail": "pedro@example.com","notam2": 6,"notam3": 7,"notam4": 5.5,"notam5": 8,"notam6": 6,"notam9": 7},
    {"nombre": "Ana","apellidos": "Sánchez Jiménez","fecha_de_nacimiento": "1998-11-20","dni": "45678901D","telefono": "123456789","mail": "ana@example.com","notam2": 8,"notam3": 9,"notam4": 7,"notam5": 8.5,"notam6": 7.5,"notam9": 9},
    {"nombre": "David","apellidos": "Pérez Fernández","fecha_de_nacimiento": "2002-07-05","dni": "56789012E","telefono": "987654321","mail": "david@example.com","notam2": 7,"notam3": 8,"notam4": 6.5,"notam5": 8.5,"notam6": 7,"notam9": 8},
    {"nombre": "Laura","apellidos": "González Martínez","fecha_de_nacimiento": "2000-01-30","dni": "12345678A","telefono": "987654321","mail": "laura@example.com","notam2": 8.5,"notam3": 9,"notam4": 7,"notam5": 8,"notam6": 7.5,"notam9": 8.5},
    {"nombre": "Carlos","apellidos": "Gómez López","fecha_de_nacimiento": "2003-02-14","dni": "67890123G","telefono": "123456789","mail": "carlos@example.com","notam2": 7,"notam3": 8,"notam4": 6.5,"notam5": 8,"notam6": 7,"notam9": 8},
    {"nombre": "Elena","apellidos": "Fernández García","fecha_de_nacimiento": "1999-09-18","dni": "23456789B","telefono": "654321987","mail": "elena@example.com","notam2": 6.5,"notam3": 8,"notam4": 7.5,"notam5": 8.5,"notam6": 7,"notam9": 8},
    {"nombre": "Miguel","apellidos": "Martínez López","fecha_de_nacimiento": "2001-04-22","dni": "78901234H","telefono": "987654321","mail": "miguel@example.com","notam2": 7.5,"notam3": 7.5,"notam4": 6,"notam5": 8,"notam6": 6.5,"notam9": 7.5},
    {"nombre": "Sara","apellidos": "Jiménez Sánchez","fecha_de_nacimiento": "2002-10-11","dni": "45678901D","telefono": "123456789","mail": "sara@example.com","notam2": 8,"notam3": 8.5,"notam4": 7,"notam5": 9,"notam6": 7.5,"notam9": 8.5}]`

    const alumnosOBJ = JSON.parse(alumnosJSON);

    let tabla = document.querySelector("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("collapse", "collapse");

    alumnosOBJ.forEach(alumno => {
        let tr = document.createElement("tr");
        for (let p in alumno) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(alumno[p]));
            tr.appendChild(td);
        }
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(((alumno.notam2 + alumno.notam3 + alumno.notam4 + alumno.notam5 + alumno.notam6 + alumno.notam9) / 6).toFixed(2)));
        tr.appendChild(td);
        tabla.appendChild(tr);
    })
}