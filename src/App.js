import React from 'react';
import './App.css';
import Picture from './components/Picture';
import Modal from './components/modal';
import { Form } from 'react-bootstrap';
const myPictures = [];
for(let i=1; i < 15; i++) {
  myPictures.push({id: i, src: `./imgs/gal-${i}.jpeg`})
}
console.log(myPictures)
class App extends React.Component {
  state = {
    pictures: myPictures,
    isModalOpen: false,
    modalPicture: null,
    isDarkMode: false
  }
  handleModalOpen = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  handleSelectModalPicture = (picture) => {
    this.setState({
      modalPicture: picture
    })
  }
  handlePictureClick = (picture) => {
    this.handleModalOpen()
    this.handleSelectModalPicture(picture)
  }
  handleDarkMode =() => {
    console.log(this.state.modalPicture, "new")
    this.setState({
      isDarkMode: !this.state.isDarkMode
    })
  }
  handlePrevious = (e) => {
    console.log(this.state.modalPicture, 'modal')
    this.setState({
      modalPicture: (this.state.modalPicture.id > 1) ? {id: this.state.modalPicture.id - 1, src: `./imgs/gal-${this.state.modalPicture.id - 1}.jpeg`} : {id: this.state.modalPicture.id = this.state.pictures.length, src: `./imgs/gal-${this.state.modalPicture.id}.jpeg`}
    })
    e.stopPropagation()
    console.log(this.state.modalPicture.id, "new")
  }
  handleNext = (e) => {
    this.setState({
      modalPicture: this.state.modalPicture.id < 14 ? {id: this.state.modalPicture.id + 1, src: `./imgs/gal-${this.state.modalPicture.id + 1}.jpeg`} : {id: this.state.modalPicture.id = 1, src: `./imgs/gal-${this.state.modalPicture.id}.jpeg`}
    })
    e.stopPropagation()
  }
  render() {
  const containerStyle = "flex-container " + (this.state.isDarkMode ? 'dark' : '');
  return (
    <div className={containerStyle}>
      {this.state.pictures.map(picture => <Picture picture={picture} handlePictureClick={this.handlePictureClick}/>)}
      
      {this.state.isModalOpen ? <Modal handleNext={this.handleNext} handlePrevious={this.handlePrevious} handleModalOpen={this.handleModalOpen} picture={this.state.modalPicture} className={this.state.isDarkMode ? 'dark-mode' : null}>dfghj</Modal> : null}
      <Form>
  <Form.Check 
    onChange={this.handleDarkMode}
    type="switch"
    id="custom-switch"
    label="Change Mode"
  />
</Form>
      </div>
  );
}
}
export default App;
