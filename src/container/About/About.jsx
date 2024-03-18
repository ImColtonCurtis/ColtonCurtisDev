import React from 'react';
import { motion } from 'framer-motion';
import { videos } from '../../constants';
import './About.scss';

const About = () => {
  return (
    <div id="about" className="app__about app_flex">
      <div className="app__about-header">
        <div className="app__about-left-header">
          <div className="app__about-left-header-line top-indent">Think. Collaborate.</div>
          <div className="app__about-left-header-line">Develop. Launch.</div>
        </div>
        <div className="app__about-right-header">
          <h1>
            With 6+ years of professional development experience, I know how to bring ideas to life.
          </h1>
        </div>
      </div>
      <motion.div
        transition={{ duration: 0.3, delayChildren: 0.3 }}
        className={`app__about-listing`}
      >        
        <div className="app__about-first-item">
          <div className="app__about-ambient-background"></div>
          <h1>01</h1>
          <h4>Software Engineer</h4>
          <div className="app__about-section-paragraph">
            <p className="app__about-blurb">
              Crafting code for innovation.
            </p>
          </div>
        </div>
        <div className="app__about-second-item">
          <div className="app__about-ambient-background"></div>
          <h1>02</h1>
          <h4>Game Developer</h4>
          <div className="app__about-section-paragraph">
            <p className="app__about-blurb">
              Bringing virtual worlds to life.
            </p>
          </div>
        </div>
        <div className="app__about-third-item">
          <div className="app__about-ambient-background"></div>
          <h1>03</h1>
          <h4>Web Designer</h4>
          <div className="app__about-section-paragraph">
            <p className="app__about-blurb">
              Shaping online experiences.
            </p>
          </div>
        </div>
        <div className="app__about-fourth-item">
          <div className="app__about-ambient-background"></div>
          <h1>04</h1>
          <h4>Team Member</h4>
          <div className="app__about-section-paragraph">
            <p className="app__about-blurb">
              Collaborating for success.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="app__about-skills-section">
        <div className="app__about-skills-left">
          <div className="app__about-skills-header">
            <h2>About Me</h2>
            <div className="app__about-skills-description top-indent">Seasoned Software Developer</div>
            <div className="app__about-skills-description">with a passion for robust design.</div>
          </div>
          <div className="app__about-languages">       
            <div className="app__about-ambient-background"></div>
            <h2 className='language_header'>Languages</h2>
            <div className="app__about-skills-grid">
              <div className="app__about-skills-item">
                <h3>• C++</h3>
                <div className="app__about-skill-level">Proficient</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• C#</h3>
                <div className="app__about-skill-level">Proficient</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• Javascript</h3>
                <div className="app__about-skill-level">Moderate</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• Python</h3>
                <div className="app__about-skill-level">Strong</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• CSS</h3>
                <div className="app__about-skill-level">Moderate</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• Verilog</h3>
                <div className="app__about-skill-level">Strong</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• VHDL</h3>
                <div className="app__about-skill-level">Moderate</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• HTML</h3>
                <div className="app__about-skill-level">Proficient</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• C</h3>
                <div className="app__about-skill-level">Strong</div>
              </div>
            </div>
          </div>
          <div className="app__about-languages">
            <div className="app__about-ambient-background-tools"></div>
            <h2 className='language_header'>Tools</h2>
            <div className="app__about-skills-grid">
              <div className="app__about-skills-item">
                <h3>• Unity</h3>
                <div className="app__about-skill-level">Proficient</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• git</h3>
                <div className="app__about-skill-level">Proficient</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• Firebase</h3>
                <div className="app__about-skill-level">Strong</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• AWS</h3>
                <div className="app__about-skill-level">Moderate</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• SQL</h3>
                <div className="app__about-skill-level">Strong</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• NoSQL</h3>
                <div className="app__about-skill-level">Strong</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• React</h3>
                <div className="app__about-skill-level">Strong</div>
              </div>
              <div className="app__about-skills-item">
                <h3>• Blender</h3>
                <div className="app__about-skill-level">Proficient</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__about-skills-right">
          <video
            src={videos.profileVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            //className="app__info-ambient-video"
            alt="software Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default About