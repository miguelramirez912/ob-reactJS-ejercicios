import { useState } from 'react';
import {Contacto} from '../../models/contacto.class';
import Contact from '../pure/contact.jsx';
import ContactForm from '../forms/contactForm';

const ContactList = (props) => {
    
    const contactoUno = new Contacto('Juan', 'Perez', 'jPerez@correo.com', true);
    const contactoDos = new Contacto('Diana', 'Gonzalez', 'dGonzalez@correo.com', false);
    const contactoTres = new Contacto('Fernando', 'Garcia', 'fGarcia@correo.com', true);
    const contactoCuatro = new Contacto('Miriam', 'Ramirez', 'mRamirez@correo.com', false);

    const [contactos, setContactos] = useState([contactoUno, contactoDos, contactoTres, contactoCuatro]);

    function removeContact(contact) {
        let index = contactos.indexOf(contact);
        let tempContacts = [...contactos];
        tempContacts.splice(index, 1);
        setContactos(tempContacts);
    }

    function setConected(contact) {
        let index = contactos.indexOf(contact);
        let tempContacts = [...contactos];
        tempContacts[index].conectado = !tempContacts[index].conectado;
        setContactos(tempContacts);
    }

    function createContact(contact) {
        let tempContacts = [...contactos];
        tempContacts.push(contact);
        setContactos(tempContacts);
    }

    
    return (
        <div>
           <div className="col-12">
               <div className="card">
                   <div className="card-header p-3">
                       <h5>Lista de Contactos</h5>
                   </div>
                   <div className="card-body" style={{position: 'relative', height: 'auto'}}>
                      <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Estatus</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactos.map((contacto, index) => {
                                return(
                                    <Contact 
                                    key={index}
                                    contacto={contacto}
                                    remove={removeContact}
                                    isConected={setConected}
                                    />
                                )
                            })}
                        </tbody>
                      </table>
                      
                   </div>
                    <ContactForm addContact={createContact} />
               </div>
           </div>

        </div>
    )


}

export default ContactList;