import React from 'react';
import { BsGithub} from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import {SiLeetcode , SiGmail} from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="app__social">
    <div>
     <SiLeetcode onClick={() => window.open('https://leetcode.com/isha6105/', '_blank')}/>
    </div>

    <div>
      <BsGithub onClick={() => window.open('https://github.com/isha1406', '_blank')}/>
    </div>

    <div>
      <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/isha6105/', '_blank')}/>
    </div>

    <div>
     <SiGmail onClick={() => window.location = 'mailto:ishachoudhary6105@gmail.com'}/>
    </div>
    
  </div>
  )
}

export default SocialMedia
