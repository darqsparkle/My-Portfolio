import './index.scss'
import Loader from 'react-loaders'
import '../AnimatedLetters'
import AnimatedLetters from '../AnimatedLetters'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


 const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_fnmtze9', 'template_pkwzygh', form.current, {
          publicKey: 'yrArFM4ZnIrktK3YQ',
        })
        .then(
          () => {
            alert('Email sent Successfully');
            window.location.reload();
          },
          (error) => {
            alert('Network Error Please Try again Later :-(');
          },
        );
    };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am intrested in Freelancing opportunities- especially ambitious or
            large projects. However, if you have any other request or question
            please don't hesitate to contact me using the below form <br />
            <br />
            <b>Thank You...!</b>
          </p>
          <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="original-form">
          <ul>
            <li className="half">
              <input 
                placeholder="Name" 
                type="text" 
                name="name" 
                required 
              />
            </li>
            <li className="half">
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
          </div>
          
        </div>
        <div className='map-wrap'>
            <MapContainer center={[12.98046, 80.19047]}zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[12.98046, 80.19047]}>
                    <Popup>I live here :-)</Popup>
                </Marker>
            </MapContainer>
        </div>
        <div className="info-map">
          Roopan Vishnu,
          <br />
          India,
          <br />
          Ram Nagar, Nanganallur <br />
          Chennai <br />
          <br />
          <span>roovis2003@gmail.com</span>
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
