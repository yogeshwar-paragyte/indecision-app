import React from 'react';
import Modal from 'react-modal';

const OptionModel = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSeletedOption}
        contentLabel = 'Seleted Option'
        closeTimeoutMS = {200}
        className = "modal"
    >
    <h3 className = "modal__title">Selected Option</h3>
    <p className = "modal__body">{props.selectedOption}</p>
    <button onClick={props.handleClearSeletedOption} className = "button">Close</button>
    </Modal>
);
export default OptionModel;