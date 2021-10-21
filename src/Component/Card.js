import React from 'react';

const Card = (props) => {
    const {img,name,description}= props.item;
    return (
        <div className="card-group">
        <div className="card">
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    );
};

export default Card;
