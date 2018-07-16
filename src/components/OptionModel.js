import React from 'react';
import Modal from 'react-modal';

const OptionModel = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSeletedOption}
        contentLabel = 'Seleted Option'
    >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleClearSeletedOption}>Close</button>
    </Modal>
);
export default OptionModel;