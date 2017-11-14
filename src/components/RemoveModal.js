import React from 'react';
import Modal from 'react-modal';

export default (props) => (
    <Modal
        isOpen={!!props.selectedRemove}
        contentLabel="Remove Expense"
        onRequestClose={props.handleCloseRemoveModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Remove expense!</h3>
        {props.selectedRemove && <p className="modal__body">{props.selectedRemove}</p>}
        <div className="modal__button">
            <button className="button button--remove" onClick={props.handleConfirmRemoveModal}>Remove</button>
            <button className="button button--secondary" onClick={props.handleCloseRemoveModal}>Cancel</button>
        </div>
    </Modal>
);