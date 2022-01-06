import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, date, source } = this.props;
    return (
      <div>
        <div className="card">
        <div className="image-box">
          <a href={newsurl} target="_blank" rel="noreferrer">
            <img
            style={{ height: "200px", objectFit: "cover" }}
            src={imageurl}
            className="card-img-top"
            alt="610weblabnews"
          />
          </a>
          </div>
          <div className="card-body" style={{position:'relative'}}>
          <span className="position-absolute badge rounded-pill bg-success" style={{zIndex:'1',transform:'translate(0%, -150%)'}}>{source.name}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{fontSize:'14px'}}>{description}</p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary grd-btn"
            >
              Read More
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">{new Date (date).toGMTString()}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
