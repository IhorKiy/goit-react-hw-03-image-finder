import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal } from './Modal/Modal';

import { Searchbar } from './Searcbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    input: '',
    isLoading: false,
    showModal: false,
    error: null,
    imgLarge: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  toggleLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  handleStateInput = e => {
    this.setState({ input: e });
  };

  handleStateImgLarge = e => {
    this.setState({ imgLarge: e });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  incrementPage = () => {
    console.log('nuk@');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { input, showModal, imgLarge, page } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar
          onSubmit={this.handleStateInput}
          pageReset={this.resetPage}
        />

        <ImageGallery
          page={page}
          input={input}
          loading={this.toggleLoading}
          onTogle={this.toggleModal}
          onModal={this.handleStateImgLarge}
          onPageReset={this.resetPage}
          onPageIncrement={this.incrementPage}
        />

        <ToastContainer />

        {showModal && <Modal onClose={this.toggleModal} imgLarge={imgLarge} />}
      </div>
    );
  }
}
