alumnos = [

]

let mostrarAlumnos = (alumnosRecibidos) => {
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    alumnosRecibidos.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML =
            `<td scope="row">${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>
                <button type="button" class="btn btn-success" onclick="rellenarFormulario(${index})">Editar</button>
                <button type="button" class="btn btn-warning" onclick="eliminarRegistro(${index})">Eliminar</button>
            </td>`;
            document.getElementsByTagName("tbody")[0].appendChild(texth1);
    });
}

let eliminarRegistro = (parIndex) => {
    alumnos = alumnos.filter((alumno, index) => index !== parIndex);
    mostrarAlumnos(alumnos);
}

let rellenarFormulario = (parIndex) => {
    document.getElementById('position').value = parIndex;
    document.getElementById('nameUser').value = alumnos[parIndex].name;
    document.getElementById('age').value = alumnos[parIndex].age;
}

let actualizarRegistro = () => {
    let position = document.getElementById('position').value;
    let name = document.getElementById('nameUser').value;
    let age = document.getElementById('age').value;

    if (position == '' || isNaN(position)) {
        alert('Debe seleccionar un registro de la lista');
        return false;
    }

    alumnos[position] = {
        name: name,
        age: age
    }
    document.getElementById('position').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    mostrarAlumnos(alumnos);
}

let agregarRegistro = () => {
    console.log(`Agergar`);
    const nuevoAlumno = {
        name: document.getElementById('nameUser').value,
        age: document.getElementById('age').value
    }
    document.getElementById('nameUser').value = '';
    document.getElementById('age').value = '';
    alumnos.push(nuevoAlumno);
    mostrarAlumnos(alumnos);
}
mostrarAlumnos(alumnos);