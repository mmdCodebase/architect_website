import React, { useState, useEffect } from 'react';
import { GalleryImg } from "./Data";
import '../assets/css/animation.css'; // Import the CSS file

const AnimatedCardStacks = ({ id }) => {
  const [cardsTransition, setCardsTransition] = useState(false);
  const [projectImages, setProjectImages] = useState([]);
  
  const selectedImg = GalleryImg.find(prod => prod.id === parseInt(id));

  useEffect(() => {
    // Filter images based on groupId and featured condition
    const filteredImages = GalleryImg.filter(
      (img) => img.groupId === selectedImg.groupId && img.featured === 'no' && img.time === 'after'
    );
    setProjectImages(filteredImages);
  }, [id]);

  const handleTransition = () => {
    setCardsTransition((prevTransition) => !prevTransition);
  };

  return (
    <div className='animation-card'>
      <ul className={`cards ${cardsTransition ? 'transition' : ''}`} onClick={handleTransition}>
        {projectImages.map((image, index) => (
          <li key={index} className={`card card-${index + 1} ${cardsTransition ? 'transition' : ''}`}>
            <img src={image.img} alt={`Card ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedCardStacks;
