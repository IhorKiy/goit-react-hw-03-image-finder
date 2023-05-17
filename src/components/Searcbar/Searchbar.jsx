import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FaAccessibleIcon } from 'react-icons/fa';
import css from './Searcbar.module.css';


export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleStateInput = evt => {
    this.setState({ input: evt.currentTarget.value });
  };

  handleProps = evt => {
    evt.preventDefault();

    if (this.state.input.trim() === '') {
      toast.error('What will to search?', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    this.props.onSubmit(this.state.input);
    this.props.pageReset();
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleProps}>
          <button type="submit" className={css.SearchForm__button}>
            <FaAccessibleIcon />
            <span className={css.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={css.SearchForm__input}
            type="text"
            value={this.state.input}
            placeholder="Search images and photos"
            onChange={this.handleStateInput}
          />
        </form>
      </header>
    );
  }
}


