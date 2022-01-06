import React, { useEffect } from 'react';
import MenuBarItem from './menuBarItem/MenuBarItem';
import './MenuBar.css';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";

function MenuBar(props) {
    const { menuBarData } = props
    useEffect(() => {
        new Swiper('.swiper-container-menu', {
            scrollbar: {
                el: '.swiper-scrollbar-menu',
            }
        })
    }, [])
    return (
        <div className="menu-bar">
            <div className="menu-bar1">
                <div className="swiper-container-menu">
                    {/* swiper  */}
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div>
                                <MenuBarItem menuBarData={menuBarData.list1}/>
                                <MenuBarItem menuBarData={menuBarData.list2}/>
                            </div>
                        </div>
                        <div className="swiper-slide"
                        style={{width: '100%'}}>
                            <div>
                                <MenuBarItem menuBarData={menuBarData.list3}/>
                                <MenuBarItem menuBarData={menuBarData.list4}/>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-scrollbar-menu"></div>
                </div>
            </div>
        </div>
    )
}


export default MenuBar
