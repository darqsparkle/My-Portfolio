import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {faAndroid,faApple,faCss3,faPython,faJava,faReact,} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

const About = ()=>{
    
    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <h2> Full Stack Development
                    <p>Driven by a relentless passion for innovation, I immerse myself in the intricate world of full stack development, seizing every opportunity to master the art of crafting seamless digital experiences from front to back
                    </p>
                </h2>
                <h2>Flutter Development
                    <p>With an insatiable hunger for growth, I tackle the challenges of Flutter mobile application development head-on, channeling my ambition into building dynamic and user-friendly solutions that resonate with modern tech landscapes.
                    </p>
                </h2>
                <h2> Yes, I'm Confident....
                    <p>With unwavering self-assurance, I step into the realm of full stack and Flutter development, armed with a wealth of experience and a clear vision for success, ready to make a lasting impact and thrive in any professional environment.
                    </p>
                </h2>
                
            </div>

            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faApple} color="#000000" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAndroid} color="#A4C639" />
            </div>
          </div>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About