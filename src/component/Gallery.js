import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { makeStyles } from '@mui/styles';
import { GalleryImg } from './Data';
import ImportedImg from './ImportProject';

// import MaterialUISwitch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

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
        width: '256px',

        '@media (max-width:768px)': {
            width: '33.33%',
        },
    },
}));


// export function CustomizedSwitches({ onChange, checked }) {
//     return (
//         <Stack direction="row" spacing={1} alignItems="center" style={{ float: 'right' }}>
//             <MaterialUISwitch onChange={onChange} checked={checked} inputProps={{ 'aria-label': 'toggle image' }} style={{ maringLeft: 0, }} />
//             <Typography>Before</Typography>
//         </Stack>
//     );
// }

export default function Gallery() {
    const [valueGallery, setValueGallery] = React.useState('all');
    const [filteredImages, setFilteredImages] = React.useState([]);
    const [imageStates, setImageStates] = React.useState({});
    const [selectedImage, setSelectedImage] = React.useState(null);

    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    const handleChangeGallery = (event, newValue) => {
        setValueGallery(newValue);
    };

    const handleToggleChange = (index) => { // Updated toggle change handler to include index
        setImageStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the state for the specific image index
        }));
    };

    const filterImages = (category) => {
        const filtered = GalleryImg.filter(img => img.category.toLowerCase() === category.toLowerCase());
        setFilteredImages(filtered);
    };


    const classes = useStyles();


    React.useEffect(() => {
        // Initial filtering based on the default tab value
        filterImages(valueGallery);
    }, [valueGallery]);


    return (
        <Box sx={{ maxWidth: '1200px', typography: 'body1', textAlign: "center", margin: "auto" }}>
            <TabContext value={valueGallery}>
                <h1>Our Projects</h1>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChangeGallery} aria-label="lab API tabs example" className={classes.galleryTab}>
                        <Tab label="All" value="all" className={classes.galleryTabBtn} />
                        <Tab label="Commercial" value="commercial" className={classes.galleryTabBtn} />
                        <Tab label="resident" value="resident" className={classes.galleryTabBtn} />
                    </TabList>
                </Box>
                <TabPanel value="all" style={{ padding: 0 }}>
                    <ImportedImg category="" featured="" time="after" index="1"/>
                </TabPanel>
                <TabPanel value="commercial" style={{ padding: 0 }}>
                    <ImportedImg category="commercial" featured="" time="after" index="1"/>
                </TabPanel>
                <TabPanel value="resident" style={{ padding: 0 }}>
                    <ImportedImg category="resident" featured="" time="after" index="1"/>
                </TabPanel>

            </TabContext>
        </Box>
    );
}
