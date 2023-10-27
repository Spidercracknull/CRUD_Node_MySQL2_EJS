function validarBoleta(boleta) {
  const boletaPattern = /^[0-9]{10}$/;
  return boletaPattern.test(boleta);
}

function validarNombre(nombre) {
  const nombrePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ-\s']+$/;
  return nombrePattern.test(nombre);
}

function validarTelefono(telefono) {
  const telefonoPattern = /^[0-9-\s]+$/;
  return telefonoPattern.test(telefono);
}
