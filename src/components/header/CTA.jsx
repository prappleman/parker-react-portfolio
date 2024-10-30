import React from 'react';
import Resume from '../../assets/parker-resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} target='_blank' rel='noopener noreferrer' className='btn'>Resume</a>
      <a href='#contact' className='btn btn-primary'>Contact</a>
    </div>
  );
};

export default CTA;
