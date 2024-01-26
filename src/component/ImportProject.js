import React from 'react';
import PropTypes from 'prop-types';
import { GalleryImg } from './Data';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const ImportedImg = ({ id, category, featured, time, index }) => {
    const filteredImages = GalleryImg.filter((img) => {
        return (
            (id == "" || img.id != parseInt(id)) &&
            img.groupId == (id != "" && index == "0" ? GalleryImg.find(image => image.id == parseInt(id)).groupId : img.groupId ) &&
            img.index == (index == "0" ? img.index : "1") &&
            img.category.toLowerCase() === (category === "" ? img.category.toLowerCase() : category.toLowerCase()) &&
            img.time.toLowerCase() === (time === "" ? img.time.toLowerCase() : time.toLowerCase()) &&
            img.featured.toLowerCase() === (featured === "" ? img.featured.toLowerCase() : featured.toLowerCase())
        );
    });

    return (
        <div className='img-field'>
            {filteredImages.map((item, index) => (
                <Link key={index} to={`/projectDetail/${item.id}`} >
                    <div className='img-item' key={index}>
                        <div className='img-size'>
                            <img
                                src={item.img}
                                alt={item.title}
                                style={{
                                    transition: 'left 0.5s ease',   
                                }}
                            />
                        </div>
                        <span className='detail-title'>{item.title}</span>
                        <span className='detail-des'>{item.category}</span>
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
