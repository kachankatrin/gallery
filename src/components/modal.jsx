import React from 'react';
function Modal(props) {
  console.log(props)
  return(
    <div className={'modalcont ' + props.className} onClick={props.handleModalOpen}>
    <button className='prev' onClick={props.handlePrevious}>Previous</button>
    <img className="modal1 modal-pic" src={props.picture && props.picture.src}/>
    <button className='next' onClick={props.handleNext}>Next</button>
    </div>
  )
}
export default Modal;