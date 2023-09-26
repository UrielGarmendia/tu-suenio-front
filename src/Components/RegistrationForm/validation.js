export const validator = (infoUser) => {  
    let errors = {};
    if (infoUser.name === "") {
        errors.name = "Se Requiere Nombre";
    }
    if (infoUser.lastName === "") {
        errors.lastName = "Se require Apellido";
    }
    if (infoUser.address === "") {
        errors.address = "Se requiere una dirección";
    }
    return errors;
}