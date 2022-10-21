import React, { useState } from 'react'
import ReactModal from 'react-modal';
import "./styleModal.scss"
import ImageLocation from './img/mapa.png'
import MapComponent from '../componentMap/mapComponent';

//style modal
const customStyles = {
    content: {
        width: '1000px',
        height: '590px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        padding: '0px'
    },
};

ReactModal.setAppElement('#root');

function Modal(props) {

    const [modalIsOpen, setIsOpen] = useState(false);

    //função abrir Modal
    function openModal() {
        setIsOpen(true);
    }

    //função fechar Modal
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='location' >
            <div className="img-location">
                <img src={ImageLocation} alt="product"></img>
            </div>
            <button className="btn-lojas" onClick={openModal}>Lojas perto de você</button>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <MapComponent lojas={props.lojas} />
            </ReactModal>
        </div>
    )
}

export default Modal;