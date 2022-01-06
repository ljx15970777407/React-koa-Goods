import React, { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './RotationChart.css'

const RotationChart = (props) => {
    const { rotationImg } = props
    useEffect(() => {
        setTimeout(() => {
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: {
                    delay: 1000
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                }
            })
        }, 200)
    },[])
    return (
        <div className="rotation-box">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                {
                    rotationImg.map((item, index) => {
                        return (
                            <div 
                            key={index}
                            className="swiper-slide">
                                <a href={item.linkUrl}>
                                    <img className='rotationChart-img' src={item.picUrl} alt="" />
                                </a>
                            </div>
                        )
                    })
                }
                </div>
                <div className="swiper-pagination"></div>
            </div>
            
        </div>
    )
}

export default RotationChart
