import React, { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { makeStyles } from '@mui/styles';

import { GalleryImg } from './Data';

// Import your image files
import img2 from "../assets/images/after/img2-after.jpeg";
import img3 from "../assets/images/after/img3-after.jpeg";


const useStyles = makeStyles((theme) => ({
  toggleBtn: {
    '& .Mui-selected': {
      backgroundColor: '#232323',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#3b3b3b',
        color: '#fff',
      }
    },
  },
  detailedImg: {
    position: 'relative',
    width: '100%',
    // paddingTop: '55%',
    overflow: 'hidden',
    cursor: 'pointer',
    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }
  }
}));


export default function BeforeAfterImg({ id, imgSrc, groupId }) {
  const [toggleState, setToggleState] = useState(false);
  const [bgImages, setBgImages] = useState([]);
  const [alignment, setAlignment] = React.useState('after');
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const classes = useStyles();

  // const handleToggleChange = () => {
  //   setToggleState(!toggleState);
  // };

  const backgroundImg = GalleryImg.find(prod => prod.groupId === parseInt(groupId));

  useEffect(() => {
    // Filter images based on groupId and featured condition
    const filteredImages = GalleryImg.filter(
      (img) => img.groupId === backgroundImg.groupId && img.time === 'before'
    );
    setBgImages(filteredImages);
    // Load image to get its height
    const tempImg = new Image();
    tempImg.src = imgSrc;
    tempImg.onload = () => {
      setImageHeight(tempImg.height);
      setImageWidth(tempImg.width);
    };
  }, [groupId]);

  // Check if bgImages[0] exists before accessing img property
  const backgroundImage = bgImages[0] ? `${bgImages[0].img}` : '';
  const paddingTopValue = imageHeight ? (imageHeight / imageWidth) * 100 : 55;


  // console.log("----->", imageHeight, imageWidth, paddingTopValue);

  const backgroundStyle = backgroundImage ? {
    backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), url(${process.env.PUBLIC_URL}${backgroundImage})`,
    backgroundSize: 'cover',
    position: 'relative',
  } : { backgroundColor: 'lightgray' };

  return (
    <div className=''>
      {bgImages[0] && <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className={classes.toggleBtn}
        style={{ float: 'right', margin: '10px' }}
      >
        <ToggleButton value="after">After</ToggleButton>
        <ToggleButton value="before">Before</ToggleButton>
      </ToggleButtonGroup>}
      <div className={classes.detailedImg} style={{ paddingTop: `${paddingTopValue}%`, ...backgroundStyle }}>
        <img
          src={imgSrc}
          style={{
            transition: 'left 0.5s ease',
            left: alignment === 'after' ? '0' : '-100%', // Slide left when toggle is active
          }}
          alt="Before After"
        />
      </div>
    </div>
  );
}
