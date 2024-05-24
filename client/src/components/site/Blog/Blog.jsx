import React from 'react'
import './Blog.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Blog = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='blog-sect mb-5'>
        <div className="container">
            <div className="row">
                <div className="blog-heading mb-5">
                    <span>BLOG</span>
                    <h2>Recent Blog</h2>
                </div>
                <div>
                <Slider {...settings}>
      <div className='d-flex justify-content-center align-items-center jujutsu'>
        <div className='blog-card'>
            <div className='blog-img'>
                <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
            </div>
            <div className='blog-title'>
            <a href="" className='yellow-hover'><span className='position'>July 7,2018 Admin</span></a>
                <a href="" className='yellow-hover'><p>Even the all-powerful Pointing <br /> has no control about the blind texts</p></a>
                <div className='blog-desc'>
                    <div><a href="" className='position'>Read More</a></div>
                    <div><i class="fa-regular fa-message"></i>3</div>
                </div>
            </div>
        </div>
        <div className='blog-card'>
            <div className='blog-img'>
                <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
            </div>
            <div className='blog-title'>
                <a href=""><span className='position'>July 7,2018 Admin</span></a>
                <a href="" className='yellow-hover'><p>Even the all-powerful Pointing <br /> has no control about the blind texts</p></a>
                <div className='blog-desc'>
                    <div><a href="" className='position'>Read More</a></div>
                    <div><i class="fa-regular fa-message"></i>3</div>
                </div>
            </div>
        </div>
        <div className='blog-card'>
            <div className='blog-img'>
                <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
            </div>
            <div className='blog-title'>
                <a href=""><span className='position'>July 7,2018 Admin</span></a>
                <a href="" className='yellow-hover'><p>Even the all-powerful Pointing <br /> has no control about the blind texts</p></a>
                <div className='blog-desc'>
                    <div><a href="" className='position'>Read More</a></div>
                    <div><i class="fa-regular fa-message"></i>3</div>
                </div>
            </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center jujutsu'>
        <div className='blog-card'>
            <div className='blog-img'>
                <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
            </div>
            <div className='blog-title'>
            <a href=""><span className='position'>July 7,2018 Admin</span></a>
                <a href="" className='yellow-hover'><p>Even the all-powerful Pointing has no control about the blind texts</p></a>
                <div className='blog-desc'>
                    <div><a href="" className='position'>Read More</a></div>
                    <div><i class="fa-regular fa-message"></i>3</div>
                </div>
            </div>
        </div>
        <div className='blog-card'>
            <div className='blog-img'>
                <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
            </div>
            <div className='blog-title'>
            <a href=""><span className='position'>July 7,2018 Admin</span></a>
                <a href="" className='yellow-hover'><p>Even the all-powerful Pointing has no control about the blind texts</p></a>
                <div className='blog-desc'>
                    <div><a href="" className='position'>Read More</a></div>
                    <div><i class="fa-regular fa-message"></i>3</div>
                </div>
            </div>
        </div>
        <div className='blog-card'>
            <div className='blog-img'>
                <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
            </div>
            <div className='blog-title'>
            <a href=""><span className='position'>July 7,2018 Admin</span></a>
                <a href="" className='yellow-hover'><p>Even the all-powerful Pointing has no control about the blind texts</p></a>
                <div className='blog-desc'>
                    <div><a href="" className='position'>Read More</a></div>
                    <div><i class="fa-regular fa-message"></i>3</div>
                </div>
            </div>
        </div>
      </div>
    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog