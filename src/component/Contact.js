import { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from '@formspree/react';
import { makeStyles } from '@mui/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import contactImg from '../assets/images/main/contactimg1.jpg';

const useStyles = makeStyles((theme) => ({

  formTag: {
    width: '50%',
    display: 'inline-table',
    '@media (max-width:768px)': {
      width: '100%',
    },
  },
  contactInfos: {
    width: '40%',
    display: 'inline-table',
    paddingLeft: '10%',
    '@media (max-width:1200px)': {
      paddingLeft: '5%',
    },
    '@media (max-width:768px)': {
      width: '100%',
    },
    '& svg': {
      paddingRight: '15px',
    }
  },
  contactForm: {
    width: '1200px',
    margin: 'auto',
    '@media (max-width:1200px)': {
      width: '100%',
    },
  }

}));

const SuccessMessage = () => {
  return <p style={{color: 'green'}}>Thanks for contacting us!</p>;
};

export default function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("myyrkyej");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  const handleFormReset = () => {
    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="contact-image">
        <img src={contactImg} alt="Contact" />
      </div>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
        className={classes.contactForm}
      >
        <Box sx={{ p: 2 }}>
          <h1 style={{ textAlign: "center" }}>Contact Us</h1>

          {state.succeeded ? (
            <>
              
              <form className={classes.formTag} onSubmit={handleSubmit}>
                <div style={{ padding: '3%' }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    margin="normal"
                    style={{ width: "49%", marginRight: '1%' }}
                    required
                    id="first-name"
                    name="first-name"
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    margin="normal"
                    style={{ width: "49%", marginLeft: '1%' }}
                    required
                    id="last-name"
                    name="last-name"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                    id="email"
                    name="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    id="message"
                    name="message"
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 2, backgroundColor: 'black' }}
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                  <SuccessMessage />
                </div>
                
              </form>
            </>
          ) : (
            <form className={classes.formTag} onSubmit={handleSubmit}>
              <div style={{ padding: '3%' }}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  margin="normal"
                  style={{ width: "49%", marginRight: '1%' }}
                  required
                  id="first-name"
                  name="first-name"
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  margin="normal"
                  style={{ width: "49%", marginLeft: '1%' }}
                  required
                  id="last-name"
                  name="last-name"
                />
                <TextField
                  fullWidth
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  required
                  type="email"
                  id="email"
                  name="email"
                />
                <TextField
                  fullWidth
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  id="message"
                  name="message"
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 2, backgroundColor: 'black' }}
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
          
          <div className={classes.contactInfos}>
            <div style={{ padding: '3% 10%' }}>
              <div>
                <h2>Questions? <br /> Contact us</h2>
                <hr />
                <p>Email: architect@expert.com<br />Tel: +1 (234) 345 5678</p>
              </div>
              <div>
                <p>Address :</p>
                <p>123 Main Street<br />Blooklyn, NY 94158</p>
              </div>
              <div>
                <p>Social :</p>
                <p>
                  <LinkedInIcon />
                  <TwitterIcon />
                  <FacebookIcon />
                </p>
              </div>
            </div>
          </div>
        </Box>

      </Box>
    </div>
  );
}