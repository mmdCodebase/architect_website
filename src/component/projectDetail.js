import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImportedImg from './ImportProject';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import BeforeAfterImg from './BeforeAfterImg';

import { GalleryImg, images } from './Data';

const useStyles = makeStyles((theme) => ({
    galleryTab: {
        textAlign: 'center',
        margin: 'auto',
        width: 'max-content',

        '@media (max-width:768px)': {
            width: '100%',
        },
    },
    galleryTabBtn: {
        width: '300px',

        '@media (max-width:768px)': {
            width: '50%',
        },
    },
    proDescription: {
        fontSize: '19px',
        padding: '30px 5% 20px 12%',
        backgroundColor: '#e7e7e7',
        borderRadius: '10px',
        margin: '30px auto',
        '@media (max-width:768px)': {
            fontSize: '17px',
        },
        '& p': {
            margin: '0',
        }
    },
    mobileWidth: {
        display: 'none',
        '@media (max-width:768px)': {
            display: 'block',
        }
    },
    tabletWidth: {
        display: 'block',
        '@media (max-width:768px)': {
            display: 'none',
        }
    }
}));


export default function ProjectDetail() {
    const { id } = useParams();
    const [showFullDescription, setShowFullDescription] = useState(false);


    // const imageDetails = GalleryImg.find((img) => img.id === parseInt(id));
    const imageDetails = GalleryImg.find(prod => prod.id === parseInt(id));

    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };


    return (
        <Box sx={{ maxWidth: '1200px', typography: 'body1', margin: "auto" }}>
            <div className='project-detail'>
                <div style={{ padding: '20px' }}>
                    <h1>{imageDetails.title}</h1>
                    <BeforeAfterImg id={imageDetails.id} imgSrc={imageDetails.img} groupId={imageDetails.groupId} />
                    {imageDetails.description && (
                        <div className={classes.proDescription}>
                            <p className={classes.tabletWidth}>{imageDetails.description}</p>
                            <div className={classes.mobileWidth}>
                                {showFullDescription
                                    ? imageDetails.description
                                    : `${imageDetails.description.slice(0, 100)}... `}
                                {!showFullDescription && (
                                    <p onClick={toggleDescription} style={{ color: 'blue', cursor: 'pointer' }}>
                                        Read more
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                    <hr />
                </div>
            </div>
            <div className='project-more'>
                <h2>More images for this project</h2>
                <div className='ofw-more-img'>
                    <ImportedImg id={imageDetails.id} category={imageDetails.category} featured="" time="after" index="0" />
                </div>
            </div>
            <div className='other-projects'>
                <h2>Other projects</h2>
                <ImportedImg id={imageDetails.id} category={imageDetails.category} featured="" time="after" index="1" />
            </div>
        </Box>
    );
}
