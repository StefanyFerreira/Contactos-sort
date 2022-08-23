let contactos = [];
let addContact = (nombre, edad, telefono, ciudad, direccion) => {
  let newContact = { nombre, edad, telefono, ciudad, direccion };
  contactos.push(newContact);
};
addContact(
  "Stefany Torres",
  19,
  "Stefany-torres@gmail.com",
  3008076248,
  "Barranquilla",
  "Carrera 112d #78-66"
);
addContact(
  "Alexandra Torres",
  22,
  "Alexandra-torres@gmail.com",
  321456789,
  "Bogotá",
  "Carrera 113d #75-66"
);
addContact(
  "Paula Lemos",
  12,
  "Paula-lemos@gmail.com",
  3123614588,
  "Chia-Cundinamarca",
  "Diagonal 77b #116-51"
);
addContact(
  "Santiago Rodriguez",
  34,
  "Santiago-Rodriguez@gmail.com",
  3148526028,
  "Medellin",
  "Calle 113d #78-36"
);

function añadirContacto(contacto) {
  contactos.push();
  return contactos;
}
console.log(contactos);

function eliminarContacto(contactos) {
  contactos.pop(contactos);
  return contactos;
}
eliminarContacto(contactos);
console.log(contactos);

let actualizarContacto = (nombreContac, item, newItem) => {
  contactos.find((element) => {
    if (element.nombre === nombreContac) {
      element[item] = newItem;
    }
  });
};

actualizarContacto("Stefany Torres", "nombre", "Lina");
console.log("nombre");

let longitud = contactos.length;
let temporal;
for (let r = 0; r < longitud; r++) {
  for (let i = 0; i < longitud - r - 1; i++) {
    if (contactos[i].nombre > contactos[i + 1].nombre) {
      temporal = contactos[i + 1];
      contactos[i + 1] = contactos[i];
      contactos[i] = temporal;
    }
  }
}
console.log(contactos);
