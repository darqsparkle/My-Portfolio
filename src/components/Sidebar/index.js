import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="" />
      </Link>

      <nav>
        <NavLink each="true" activecLassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          each="true"
          activecLassname="active"
          className="about-link"
          to="/about"
          
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          each="true"
          activecLassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/roopan-vishnu-0465b5222/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/darqsparkle"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
            <a 
                href="https://www.instagram.com/roopaxxn/"
                target='_blank'
                rel="noreferrer"
            >
                <FontAwesomeIcon
                    icon={faInstagram}
                    color="#4d4d4e"
                    className='anchor-icon'
                />
            </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
