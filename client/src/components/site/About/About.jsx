import React from 'react'
import './About.css'
const About = () => {
  return (
    <React.Fragment>
        <div className='about-section'>
        <div className="container">
            <div className="row about-row">
                <div className="col-6">
                    <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" width="650px" alt="" />
                </div>
                <div className="col-6 about-desc">
                    <div className='about-heading'>
                        <span className='mb-2'>ABOUT TASTY</span>
                        <h3 className='mb-5'>Our chef cooks the most <br /> delicious food for you</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default About