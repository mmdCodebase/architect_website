import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ReactTyped from "react-typed";

//Other pages
import Gallery from './Gallery';
import Contact from './Contact';

import companyImg from '../assets/images/main/company_img.jpeg';
import visionImg from "../assets/images/main/vision.png";

import { GalleryImg, setApartItem, chooseItem, images } from './Data';
import ImportedImg from './ImportProject';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({

    carouselBtn: {
        backgroundColor: 'rgba(39, 39, 39, 0)',
        position: 'relative',
        bottom: '60px',
        '& button': {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            '@media (max-width:768px)': {
                display: 'none',
            },
        }
    },
    companyImg: {
        width: '40%',
        display: 'inline-block',
        textAlign: 'center',
        '@media (max-width:768px)': {
            width: '100%',
        },
        '& img': {
            width: '80%',
            margin: 'auto',
            paddingTop: '50px',
        }
    },
    companyDescription: {
        width: '60%',
        display: 'inline-block',
        float: 'right',
        '@media (max-width:768px)': {
            width: '100%',
            float: 'none',
        }
    },
    setApartTitle: {
        width: '35%',
        display: 'inline-table',
        '@media (max-width:768px)': {
            width: '100%',
        }
    },
    setApart: {
        width: '65%',
        display: 'inline-table',
        '@media (max-width:768px)': {
            width: '100%',
        }
    },
    serviceItem: {
        width: '33.33%',
        height: 'inherit',
        display: 'inline-table',
        '@media (max-width:768px)': {
            width: '50%',
        },
        '@media (max-width:660px)': {
            width: '100%',
        }
    },
    cardHeight: {
        minHeight: '200px',
        '@media (max-width:1200px)': {
            minHeight: '230px',
        },
        '@media (max-width:912px)': {
            minHeight: '260px',
        },
        '@media (max-width:768px)': {
            minHeight: '220px',
        },
        '@media (max-width:660px)': {
            minHeight: '200px',
        },
        '@media (max-width:528px)': {
            minHeight: '250px',
        },
    },
    fadeInImage: {
        transition: 'opacity 3.5s ease', // Adjust the transition effect as needed
        opacity: 1,
        '&.fade-enter': {
            opacity: 0,
        },
        '&.fade-enter-active': {
            opacity: 1,
        },
    },
}));



function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const classes = useStyles();

    return (
        <Box sx={{ width: "100%", flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={7000}
                sx={{
                    overflow: 'hidden',
                    '& > div': {
                        transition: 'transform 2s ease', // Adjust the transition effect as needed
                    },
                }}
            >
                {images.map((step, index) => (
                    <div key={`${step.label}_${index}`}>
                        { activeStep === index && (
                            <h1 style={{ paddingLeft: "20px" }}><ReactTyped strings={[step.title]} typeSpeed={100} /></h1>
                        )}
                        <div
                            className={`${classes.fadeInImage} ${activeStep === index ? 'fade-enter-active' : 'fade-enter'}`}
                        >
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: '1000px',
                                        objectFit: 'cover',
                                        display: 'block',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.carouselBtn}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >

                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}

                    </Button>
                }
            />
        </Box>
    );
}




export default function Home() {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='home-content'>
            <SwipeableTextMobileStepper style={{ width: "100%" }} />
            <div className='about-us'>
                <h1 className='home-titles'>About Us</h1>
                <div className={classes.companyImg}>
                    <img src={companyImg} />
                </div>
                <div className={classes.companyDescription}>
                    <div style={{ padding: '10px 20px' }}>
                        <h2>BlueBrass Design</h2>
                        <p>Elevating architectural visions, <span style={{ color: 'red' }}>BlueBrass Design</span> specializes in crafting extraordinary external facades for both remodeling
                            old homes and new construction projects. Seamlessly blending tradition with modernity, our mission is to redefine aesthetics,
                            creating unique, magnificent designs that tell captivating stories of timeless elegance and contemporary brilliance.</p>
                        <Link to="/contact" className='custom-btn'>Contact</Link>
                    </div>
                </div>
            </div>

            <div className='featured-project'>
                <h1 className='home-titles'>Featured Projects</h1>
                <ImportedImg category="" featured="yes" index="1" time="after" />
                <Link to="/gallery" className='custom-btn'>See More Projects</Link>

            </div>

            <div className='our-service'>
                <h1 className='home-titles'>Why Choose BlueBrass</h1>
                {chooseItem.map((item, index) => (
                    <div className={classes.serviceItem} key={index}>
                        <div className='service-item-content'>
                            <div className="section_our_solution">
                                <div className="our_solution_category">
                                    <div className="solution_cards_box">
                                        <div className={`solution_card ${classes.cardHeight}`}>
                                            <div className="hover_color_bubble"></div>
                                            <div className="solu_description">
                                                {item.icon}
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div className='vision-start'>
                <img src={visionImg} width={'100%'} />
                <div className='vision-content'>
                    <h1 className={classes.setApartTitle}>
                        <span className='home-titles'>What Sets Us Apart</span>
                    </h1>
                    <div className={classes.setApart}>
                        {setApartItem.map((item, index) => (
                            <div key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}<br />
                        <p>Ready to elevate your space? Let's bring your vision to life with <span style={{ color: 'red' }}>BlueBrass Design!</span><br /><br />Contact us for a Consultation Today!</p>
                        <Link to="/contact" className='custom-btn'>Request a Consultation</Link>


                    </div>
                </div>
            </div>
        </div>
    );
}