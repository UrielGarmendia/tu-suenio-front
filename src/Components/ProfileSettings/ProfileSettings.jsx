import styles from './ProfileSettings.module.css';
import { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-input-2'
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-phone-input-2/lib/bootstrap.css'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import ReactModal from 'react-modal';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../Assents/stickerPig.png';
import Crown from "../../Assents/crown.png";
import Huellas from '../../Assents/huellitasDeChancho.png';

const ProfileSettings = () => {
    const hiddenSubmitButtonRef = useRef(null);
    const { user, isAuthenticated } = useAuth0();
    console.log("Este es el usuario en config Perf:", user);
    const [selectedImage, setSelectedImage] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSaveChangesModal, setShowSaveChangesModal] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    const [dataUser, setDataUser] = useState({
        name: "",
        lastName: "",
        dni: "",
        address: "",
        phone: "",
        email: "",
        emailVerified: false,
        image: "",
        isAdmin: false
    })
    const [copyDataUser, setCopyDataUser] = useState({
        name: "",
        lastName: "",
        dni: "",
        address: "",
        phone: "",
        email: "",
        emailVerified: user ? user.email_verified : false,
        image: "",
        isAdmin: false
    })
    useEffect(() => {
        if (isAuthenticated) {
            try {
                async function getUser() {
                    const { data } = await axios.post("https://tu-suenio-back.onrender.com/user/login", { sub: user.sub });
                    setDataUser({
                        id: data ? data.id : "",
                        name: data ? data.name : "",
                        lastName: data ? data.lastName : "",
                        dni: data ? data.dni : "",
                        phone: data ? data.phone : "",
                        address: data ? data.address : "",
                        email: data ? data.email : "",
                        image: data ? data.image : "",
                        isAdmin: data ? data.isAdmin : false,
                        emailVerified: data ? data.email_verified : false
                    });
                    setCopyDataUser({
                        id: data ? data.id : "",
                        name: data ? data.name : "",
                        lastName: data ? data.lastName : "",
                        dni: data ? data.dni : "",
                        phone: data ? data.phone : "",
                        address: data ? data.address : "",
                        email: data ? data.email : "",
                        image: data ? data.image : "",
                        isAdmin: data ? data.isAdmin : false,
                        emailVerified: data ? data.email_verified : false
                    });
                }
                getUser();
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        }
    }, [isAuthenticated]);
    const isEqual = (objA, objB) => {
        return JSON.stringify(objA) === JSON.stringify(objB);
    };

    useEffect(() => {
        const haveChanges = isEqual(dataUser, copyDataUser);
        setHasChanges(haveChanges);
    }, [dataUser, copyDataUser]);

    console.log("usuario en ProfileSettings", dataUser);

    const handleInputs = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        });
    }
    const handleImageChange = (event) => {
        const imgFile = event.target.files[0];
        setSelectedImage(URL.createObjectURL(imgFile));
        setDataUser({ ...dataUser, image: imgFile }); 
    };
    const handlePhoneChange = (value) => {  //caso especial con react-phone el valor que captura el input necesita tener su propio handler
        setDataUser({ ...dataUser, phone: value });
    };
    const eliminarAvatar = () => {
        if (isEditing) {
            setSelectedImage("");
            setDataUser({ ...dataUser, image: user?.picture });
            setCopyDataUser({ ...copyDataUser, image: user?.picture });
        }
    }
    const handleSubmit = async (event) => { //los campos no deben ser limpiados
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', dataUser.name);
        formData.append('lastName', dataUser.lastName);
        formData.append('phone', dataUser.phone);
        formData.append('dni', dataUser.dni);
        formData.append('image', dataUser.image);
        formData.append('address', dataUser.address);
        try {
            const { data } = await axios.put(`https://tu-suenio-back.onrender.com/user/${dataUser.id}/modify`, formData);
            if (!data.error) {
                setDataUser(data);
                setCopyDataUser(data);
            }
        } catch (error) {
            console.error('Error en la solicitud PUT', error.message);
        }
    }

    let primerNombre = dataUser.name.split(" ")[0] || "";
    let primerApellido = dataUser.lastName.split(" ")[0] || "";
    let nombreCompleto = primerNombre + " " + primerApellido;  //para solo renderizar un nombre y un apellido


    const showConfirmDialog = () => {
        setShowConfirmModal(true);
    };
    const closeConfirmDialog = () => {
        setShowConfirmModal(false);
    };
    const showSaveChangesDialog = (event) => {
        event.preventDefault();
        if (isEditing) {
            setShowSaveChangesModal(true)
        }
    };
    const closeSaveChangesDialog = () => {
        setShowSaveChangesModal(false);
    };

    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.contenedorSecundario}>
                <div className={styles.contenedorPerfil}>
                    <h1 className={styles.nombreApellido} >{nombreCompleto.length > 1 ? nombreCompleto : "Nombre Apellido"}</h1>
                    {/* el length tiene que ser mayor a 1 porque el " " de nombreCompleto cuenta como un elemento*/}
                    <div className={styles.divAvatar}>
                        {dataUser.image === "" || dataUser.image === null ? (
                            <img src={user?.picture} alt="avatar" className={!isEditing ? `${styles.fotoAvatar} ${styles.disabled}` : styles.fotoAvatar} onClick={() => document.getElementById('subirFoto').click()} />
                        ) : (
                            <img src={typeof dataUser.image === "string" ? dataUser.image : selectedImage}
                                alt="avatarr" className={!isEditing ? `${styles.fotoAvatar} ${styles.disabled}` : styles.fotoAvatar} />
                        )
                        }
                        <h1 className={!isEditing ? `${styles.divIconDeleteImage} ${styles.disabled}` : styles.divIconDeleteImage} onClick={eliminarAvatar}>
                            <DeleteIcon className={styles.iconDeleteImage} />
                        </h1>
                        {dataUser.isAdmin && <img src={Crown} alt="crown" className={styles.crown} />}
                    </div>
                    <label className={!isEditing ? `${styles.labelSubirFoto} ${styles.disabled}` : styles.labelSubirFoto} htmlFor="subirFoto">Subir Foto</label>
                    <input type="file" className={styles.inputSeleccionarArchivo} id="subirFoto" onChange={handleImageChange} disabled={!isEditing} />
                    <div className={styles.divDescripcionSubirFoto}>
                        <p className={styles.descripcionSubirFoto} >Sube una nueva foto, la imagen se redimensionará automáticamente</p>
                        {/* <span>Perfil verificado:{dataUser.emailVerified ? "Si" : "No"}</span> */}
                        {/* <p className={styles.descripcionSubirFoto}>Tamaño maximo: 1MB</p> */}
                    </div>
                </div>
                <form className={styles.contenedorConfigPerfil} onSubmit={(event) => { handleSubmit(event) }}>
                    <img src={Huellas} alt="huellas" className={styles.huellasTop} />
                    <div>
                        <div className={styles.divNombreConfigPerfil} >
                            <h1 className={styles.configuracionPerfil} >Configuración de Perfil</h1>
                        </div>
                        <div className={styles.containerInputs}>
                            <div className={styles.inputsIzquierda}>
                                <label htmlFor="" className={styles.label}>Nombre:</label>
                                <input type="text" className={styles.input} name='name' value={dataUser.name} onChange={handleInputs} disabled={!isEditing} />
                                <label htmlFor="" className={styles.label}>Email:</label>
                                <input type="text" className={styles.input} name='email' value={dataUser.email} onChange={handleInputs} disabled={true} />
                                <label htmlFor="" className={styles.label}>Teléfono:</label>
                                <PhoneInput country={'co'} inputProps={{ className: styles.inputTelefono }} containerClass={styles.containerClass}
                                    dropdownClass={styles.dropdown} name='phone' onChange={handlePhoneChange} value={dataUser.phone} disabled={!isEditing} />
                            </div>
                            <div className={styles.inputsDerecha}>
                                <label htmlFor="" className={styles.label} >Apellido:</label>
                                <input type="text" className={styles.input} name='lastName' value={dataUser.lastName} onChange={handleInputs} disabled={!isEditing} />
                                <label htmlFor="" className={styles.label}>DNI:</label>
                                <input type="text" className={styles.input} name='dni' value={dataUser.dni} onChange={handleInputs} disabled={!isEditing} />
                                <label htmlFor="" className={styles.label}>Dirección:</label>
                                <input type="text" className={styles.input} name='address' value={dataUser.address} onChange={handleInputs} disabled={!isEditing} />
                                <div className={styles.containerButtons}>
                                    <button className={!isEditing ? styles.botonEditar : styles.botonCancelar} onClick={() => {
                                        if (isEditing && !hasChanges) {
                                            showConfirmDialog();
                                        } else {
                                            setIsEditing(!isEditing);
                                        }
                                    }} type='button'>
                                        {isEditing ? "Cancelar Edición" : "Editar"}
                                    </button>
                                    <button type='button' className={!isEditing ? styles.botonGuardarDisabled : hasChanges ? styles.botonGuardarDisabled : styles.botonGuardar}
                                        onClick={(event) => {
                                            if (!hasChanges) {
                                                setShowSaveChangesModal(true)
                                            }
                                        }}
                                        disabled={!isEditing}>Guardar Cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Huellas} alt="huellas" className={styles.huellasBottom} />
                    <button type="submit" style={{ display: "none" }} ref={hiddenSubmitButtonRef}></button>
                    <ReactModal
                        isOpen={showSaveChangesModal}
                        onRequestClose={closeSaveChangesDialog}
                        className={styles.modal}
                        overlayClassName={styles.overlay}>
                        <img src={Huellas} alt="huellas" className={styles.huellasTopModal} />
                        <img src={Logo} alt="Logo" className={styles.logoModal} />
                        <p className={styles.confirmDialogP}>
                            ¿Seguro que deseas guardar los cambios?
                        </p>
                        <span className={styles.confirmDialogSpan} >Se guardarán permanentemente</span>
                        <div className={styles.containerButtonsModal}>
                            <button
                                className={styles.confirmDialogButtonGray}
                                onClick={closeSaveChangesDialog}
                            >
                                No, volver
                            </button>
                            <button
                                className={styles.confirmDialogButton}
                                onClick={() => {
                                    closeSaveChangesDialog();
                                    setIsEditing(false)
                                    hiddenSubmitButtonRef.current.click()
                                }}>
                                Sí, guardar
                            </button>
                            <img src={Huellas} alt="huellas" className={styles.huellasBottomModal} />
                        </div>
                    </ReactModal>
                </form >
            </div>
            <ReactModal
                isOpen={showConfirmModal}
                onRequestClose={closeConfirmDialog}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <img src={Huellas} alt="huellas" className={styles.huellasTopModal} />
                <img src={Logo} alt="Logo" className={styles.logoModal} />
                <p className={styles.confirmDialogP}>
                    ¿Seguro de que deseas cancelar la edición?
                </p>
                <span className={styles.confirmDialogSpan}>Se perderán tus cambios</span>
                <div className={styles.containerButtonsModal}>
                    <button
                        className={styles.confirmDialogButtonGray}
                        onClick={() => {
                            closeConfirmDialog();
                            setIsEditing(false);
                            setDataUser(copyDataUser);
                        }}
                    >
                        Sí, cancelar
                    </button>
                    <button
                        className={styles.confirmDialogButton}
                        onClick={closeConfirmDialog}
                    >
                        Continuar Edición
                    </button>
                    <img src={Huellas} alt="huellas" className={styles.huellasBottomModal} />
                </div>
            </ReactModal>
            {/* segundo modal */}
        </div>
    )
}

export default ProfileSettings;