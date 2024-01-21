import React from 'react';
import PropTypes from 'prop-types';
import { GalleryImg } from './Data';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const ImportedImg = ({ category, featured, time, index }) => {

    const filteredImages = GalleryImg.filter((img) => {
        return (
            img.category.toLowerCase() === (category == "" ? img.category.toLowerCase() : category.toLowerCase()) &&
            img.time.toLowerCase() === (time == "" ? img.time.toLowerCase() : time.toLowerCase()) &&
            img.index === (index == "" ? img.index : index) &&
            img.featured.toLowerCase() === (featured == "" ? img.featured.toLowerCase() : featured.toLowerCase())
        );
    });



    return (
        <div className='gallery-grid'>
            {filteredImages.map((item, index) => (
                <Link to={`/projectDetail/${item.id}`} >
                    <div className='gallery-img-item' key={index}>
                        <div className='img-container border-action'>
                            <img
                                src={item.img}
                                alt={item.title}
                                style={{
                                    transition: 'left 0.5s ease',
                                }}
                            />
                        </div>
                        <p>{item.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

ImportedImg.propTypes = {
    category: PropTypes.string.isRequired,
};

export default ImportedImg;
