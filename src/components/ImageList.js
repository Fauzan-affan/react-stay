import React from 'react'

const ImageList = (props) => {
    const image = props.images.map(({description, id, urls}) => (
        <img key={id} src={urls.regular} alt={description} style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "70%", marginBottom: "10px" }}/>
    ))

    return (
        <div>
            <h3>Images List</h3>
            <span> - Found {props.images ? props.images.length : 0} images ( max 10 )</span>
            <br /><br />
            <div>
                {image}
            </div>
        </div>
    )
}

export default ImageList