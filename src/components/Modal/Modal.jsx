import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyown);
  }

  handleKeyown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  toggleModal = () => {
    this.props.onClose();
  };

  handleClickBeackdrop = e => {
    // console.log(e.currentTarget);
    // console.log(e.target);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleClickBeackdrop}>
        <div className={css.modal}>
          <img src={this.props.imgLarge} alt="Упс!" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  imgLarge: PropTypes.string.isRequired,
};
