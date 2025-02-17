import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import {  useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray = ['o', 'o', 'p', 'a', 'n', ' ', 'V', 'i', 's', 'h', 'n', 'u'];
    const jobArray = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

        
   
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i,</span>
                    <br />
                    <span className={`${letterClass}_13`}>I </span>
                    <span className={`${letterClass}_14`}>am</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />

                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>
                    Full Stack Developer / Flutter Developer
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;
