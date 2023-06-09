import React from 'react';
import blog1 from "../../../images/blog-1.jpg"
import { Link } from 'react-router-dom';
const Blogcard = () => {
    return (
      <div>
        <div className="blog-card">
          <div className="card-image">
            <img src={blog1} className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2022</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
              accusamus officia
            </p>
            <Link to="/singleblog" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
};

export default  Blogcard;