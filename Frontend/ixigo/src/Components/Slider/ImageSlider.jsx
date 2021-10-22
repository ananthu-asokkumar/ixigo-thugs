import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './Slider.css'

const ImageSlider = () => {
    ;
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '260px',
        slidesToShow: 3,
        speed: 400,


    }
    return (
        <div className="main_slider_container">
            <p>Best Flight Booking Offers</p>
            <Slider {...settings}>
                <div>
                    <img
                        src='https://images.ixigo.com/image/upload/f_auto/7d0344f7c9a91fd1450e6494c535507d-qvvkb.png' alt=''

                    />
                </div>
                <div>
                    <img src='https://images.ixigo.com/image/upload/f_auto/fb086ec2d3d65faefe05aa2113dd60f1-uelpx.png' alt='' />
                </div>
                <div>
                    <img src='https://images.ixigo.com/image/upload/f_auto/3f4b62c774e6f494082b804f5510c518-klsba.png' alt='' />
                </div>
                <div>
                    <img src='https://images.ixigo.com/image/upload/f_auto/4be4e32377b8fbd57330bfebadf3683d-ewefl.png' alt='' />
                </div>
                <div>
                    <img src='https://images.ixigo.com/image/upload/f_auto/2eb5547cd68df13587fc4da32c82046f-cawhn.png' alt='' />
                </div>
                <div>
                    <img src='https://images.ixigo.com/image/upload/f_auto/afe52fcc18b9738e04e72c86718aaaa6-wzcym.png' alt='' />
                </div>
                <div>
                    <img src="https://images.ixigo.com/image/upload/f_auto/e43e3737e8db646e2e8f24a5e223ef67-owsqm.png" alt='' />
                </div>
                <div>
                    <img src="https://images.ixigo.com/image/upload/f_auto/b1f7d9be08ea95ca837c58a20c76a224-bfvlr.png" alt='' />
                </div>
                <div>
                    <img src="https://images.ixigo.com/image/upload/f_auto/6fe5f5bbfc73797f95e9f30feefd6026-qlgsi.png" alt='' />
                </div>
            </Slider>
        </div>
    )
}

export default ImageSlider
