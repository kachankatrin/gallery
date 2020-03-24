import React from 'react';
function Picture(props) {
  console.log(props.picture.src)
  return(
    <div onClick={() => props.handlePictureClick(props.picture)}>
    <img className="picture-item" src={props.picture && props.picture.src}/>
    </div>
  )
}

export default Picture;