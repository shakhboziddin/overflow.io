import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Person from '../../images/image/person.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Swiperjs() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><h1>"Looks Amazing!Can't wait to use it.There wasavoid in my workflow andIhave high hopes this willfitright in."</h1>
                    <div className="img">
                        <img src={Person} alt="" />
                    <div className="content">
                        <h5>The Rock</h5>
                        <h6>Actor</h6>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><h1>"Looks Amazing!Can't wait to use it.There wasavoid in my workflow andIhave high hopes this willfitright in."</h1>
                    <div className="img">
                        <img src={Person} alt="" />
                    <div className="content">
                        <h5>The Rock</h5>
                        <h6>Actor</h6>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><h1>"Looks Amazing!Can't wait to use it.There wasavoid in my workflow andIhave high hopes this willfitright in."</h1>
                    <div className="img">
                        <img src={Person} alt="" />
                    <div className="content">
                        <h5>The Rock</h5>
                        <h6>Actor</h6>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><h1>"Looks Amazing!Can't wait to use it.There wasavoid in my workflow andIhave high hopes this willfitright in."</h1>
                    <div className="img">
                        <img src={Person} alt="" />
                    <div className="content">
                        <h5>The Rock</h5>
                        <h6>Actor</h6>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}