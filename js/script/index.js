let mostrarItems = () => {
    let itemsLS = JSON.parse(localStorage.getItem('itemsls'))
    if (itemsLS === null) {
        console.log('entro');
        localStorage.setItem('itemsls', JSON.stringify([]));
        itemsLS = []
    }
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    itemsLS.forEach((element, index) => {
        let action1 = document.createElement("tr");
        action1.innerHTML =
            `<td scope="row">${index + 1}</td>
            <td>${element.nameObj}</td>
            <td>${element.numberObj}</td>
            <td>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </td>
            <td>
                <button type="button" class="btn btn-success" onclick="editarFormulario(${index})">Editar</button>
                <button type="button" class="btn btn-warning" onclick="eliminarRegistro(${index})">Eliminar</button>
            </td>`
        document.getElementsByTagName("tbody")[0].appendChild(action1);
    });
}
// Eliminar registro en formulario
let eliminarRegistro = (parIndex) => {
    itemsAlmacenados = JSON.parse(localStorage.getItem('itemsls'))
    itemsAlmacenados = itemsAlmacenados.filter((item, index) => index !== parIndex);
    localStorage.setItem('itemsls', JSON.stringify(itemsAlmacenados));
    if (confirm('Se borrará de la lista manera definitva')) {
        swal("Se ha borrado con éxito", {
            buttons: false,
            icon: "success",
            timer: 1800
        });
    } else {
        return false;
    }
    mostrarItems();
}
// Editar formulario
let editarFormulario = (parIndex) => {
    itemsAlmacenados = JSON.parse(localStorage.getItem('itemsls'))
    document.getElementById('position').value = parIndex;
    document.getElementById('nameObj').value = itemsAlmacenados[parIndex].nameObj;
    document.getElementById('numberObj').value = itemsAlmacenados[parIndex].numberObj;
}
// Actualizar una fila de la lista
let actualizarRegistro = () => {
    let position = document.getElementById('position').value;
    let nameObj = document.getElementById('nameObj').value;
    let numberObj = document.getElementById('numberObj').value;
    if (position == '' || isNaN(position)) {
        alert('Debe seleccionar un registro de la lista');
        return false;
    }
    itemsAlmacenados = JSON.parse(localStorage.getItem('itemsls'));
    itemsAlmacenados[position] = {
        nameObj: nameObj,
        numberObj: numberObj
    }
    document.getElementById('position').value = '';
    document.getElementById('nameObj').value = '';
    document.getElementById('numberObj').value = '';
    localStorage.setItem('itemsls', JSON.stringify(itemsAlmacenados));
    mostrarItems();
}
// Agregar al registro
let agregarRegistro = () => {
    itemsLS = JSON.parse(localStorage.getItem('itemsls'));
    const nuevoItem = {
        nameObj: document.getElementById('nameObj').value,
        numberObj: document.getElementById('numberObj').value
    }
    if (nameObj.value === null || nameObj.value === '') {
        swal("Oops! Debes llenar todos los campos", {
            button: "Ok",
            dangerMode: true
        });
        return false;
    }
    if (numberObj.value === null || numberObj.value === '') {
        swal("Oops! Debes llenar todos los campos", {
            button: "Ok",
            dangerMode: true
        });
        return false;
    }
    document.getElementById('nameObj').value = '';
    document.getElementById('numberObj').value = '';
    itemsLS.push(nuevoItem);
    localStorage.setItem('itemsls', JSON.stringify(itemsLS));

    mostrarItems();
}
// Liampiar caché
let clearCache = () => {
    if (confirm('Se borrará la lista de manera definitva')) {
        localStorage.clear();
        swal("Tu lista se ha borrado con éxito", {
            buttons: false,
            icon: "success",
            timer: 2000
        });
    } else {
        return false;
    }
    mostrarItems();
}
mostrarItems();