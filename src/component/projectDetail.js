import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImportedImg from './ImportProject';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import BeforeAfterImg from './BeforeAfterImg';
import AnimatedCardStacks from "./Animation";

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
}));


export default function ProjectDetail() {
    const { id } = useParams();

    // const imageDetails = GalleryImg.find((img) => img.id === parseInt(id));
    const imageDetails = GalleryImg.find(prod => prod.id === parseInt(id));

    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


    return (
        <Box sx={{ maxWidth: '1200px', typography: 'body1', margin: "auto" }}>
            <div className='project-detail'>
                <div style={{ padding: '20px' }}>
                    <h1>{imageDetails.title}</h1>
                    <p>{imageDetails.description}</p>
                </div>
                <BeforeAfterImg imgSrc={imageDetails.img} groupId={imageDetails.groupId} />
            </div>
            <div className='project-more'>
                <h2>More designs for this project</h2>
                <AnimatedCardStacks id={imageDetails.id} />

            </div>
            <div className='other-projects'>
                <h2>Other projects</h2>
                <ImportedImg category={imageDetails.category} featured="yes" time="after" index="1" />
            </div>
        </Box>
    );
}
