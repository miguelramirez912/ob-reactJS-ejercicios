import { useRef } from "react"
import { Contacto } from "../../models/contacto.class";
import PropTypes from 'prop-types';

const ContactForm = ({addContact}) => {

    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const emailRef = useRef(null);

    function createContact(e) {
        e.preventDefault();
        let newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        )

        addContact(newContact)

        nombreRef.current.value = '';
        apellidoRef.current.value = '';
        emailRef.current.value = '';
        
    }

    return(
        <form onSubmit={createContact} id="contact-form">
            <h5>Crear Contacto</h5>
            <input style={{}} ref={nombreRef} type="text" placeholder="Ingresa el Nombre" required/>
            <input ref={apellidoRef} type="text" placeholder="Ingresa el Apellido" required />
            <input ref={emailRef} type="email" placeholder="Ingresa el Email" required/>
            <button type="submit">Crear</button>
        </form>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default ContactForm;