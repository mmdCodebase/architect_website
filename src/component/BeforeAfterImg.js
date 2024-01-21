import React, { useState, useEffect } from 'react';

import MaterialUISwitch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { GalleryImg } from './Data';

// Import your image files
import img2 from "../assets/images/after/img2-after.jpeg";
import img3 from "../assets/images/after/img3-after.jpeg";

export function CustomizedSwitches({ onChange, checked }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" style={{ float: 'right' }}>
      <MaterialUISwitch onChange={onChange} checked={checked} inputProps={{ 'aria-label': 'toggle image' }} style={{ marginLeft: 0 }} />
      <Typography>Before</Typography>
    </Stack>
  );
}

export default function BeforeAfterImg({ imgSrc, groupId }) {
  const [toggleState, setToggleState] = useState(false);
  const [bgImages, setBgImages] = useState([]);

  const handleToggleChange = () => {
    setToggleState(!toggleState);
  };

  const backgroundImg = GalleryImg.find(prod => prod.groupId === parseInt(groupId));

  useEffect(() => {
    // Filter images based on groupId and featured condition
    const filteredImages = GalleryImg.filter(
      (img) => img.groupId === backgroundImg.groupId && img.time === 'before'
    );
    setBgImages(filteredImages);
  }, [groupId]);

  // Check if bgImages[0] exists before accessing img property
const backgroundImage = bgImages[0] ? `${bgImages[0].img}` : '';
const backgroundStyle = backgroundImage ? {
  backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), url(${process.env.PUBLIC_URL}${backgroundImage})`,
  backgroundSize: 'cover',
  position: 'relative',
} : { backgroundColor: 'red' };

  return (
    <div className=''>
      {bgImages[0] && <CustomizedSwitches onChange={handleToggleChange} checked={toggleState} />}
      <div className='img-container' style={backgroundStyle}>
        <img
          src={imgSrc}
          style={{
            transition: 'left 0.5s ease',
            left: toggleState ? '-100%' : '0', // Slide left when toggle is active
          }}
          alt="Before After"
        />
      </div>
    </div>
  );
}
