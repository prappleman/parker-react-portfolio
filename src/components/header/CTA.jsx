import React from 'react'
// TODO: change resume
import Resume from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Résumé</a>
        <a href='#contact' className='btn btn-primary'>Connect</a>
    </div>
  )
}

export default CTA