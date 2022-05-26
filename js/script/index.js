items = []

let mostrarItems = (itemsRecibidos) => {
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    itemsRecibidos.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML =
            `<td scope="row">${index + 1}</td>
            <td>${element.nameObj}</td>
            <td>${element.numberObj}</td>
            <td>
                <button type="button" class="btn btn-success" onclick="editarFormulario(${index})">Editar</button>
                <button type="button" class="btn btn-warning" onclick="eliminarRegistro(${index})">Eliminar</button>
            </td>`;
            document.getElementsByTagName("tbody")[0].appendChild(texth1);
    });
}

let eliminarRegistro = (parIndex) => {
    items = items.filter((item, index) => index !== parIndex);
    mostrarItems(items);
}

let editarFormulario = (parIndex) => {
    document.getElementById('position').value = parIndex;
    document.getElementById('nameObj').value = items[parIndex].nameObj;
    document.getElementById('numberObj').value = items[parIndex].numberObj;
}

let actualizarRegistro = () => {
    let position = document.getElementById('position').value;
    let nameObj = document.getElementById('nameObj').value;
    let numberObj = document.getElementById('numberObj').value;

    if (position == '' || isNaN(position)) {
        alert('Debe seleccionar un registro de la lista');
        return false;
    }

    items[position] = {
        nameObj: nameObj,
        numberObj: numberObj
    }
    document.getElementById('position').value = '';
    document.getElementById('nameObj').value = '';
    document.getElementById('numberObj').value = '';
    mostrarItems(items);
}

let agregarRegistro = () => {
    console.log(`Agregar`);
    const nuevoItem = {
        nameObj: document.getElementById('nameObj').value,
        numberObj: document.getElementById('numberObj').value
    }
    document.getElementById('nameObj').value = '';
    document.getElementById('numberObj').value = '';
    items.push(nuevoItem);
    mostrarItems(items);
}
mostrarItems(items);