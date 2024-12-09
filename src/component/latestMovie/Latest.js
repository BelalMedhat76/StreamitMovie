import React from "react";
import './latest.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
export default function LatestMovies() {
  return (
    <>
      <div className="latest-section ">
        <h1   style={{color:"red", fontWeight:"900"}}>	
Latest Movies</h1>
        <Swiper
          id="swiperMovies"
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={false}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper container"
        >
          <SwiperSlide className="movieLatest1">
            <div className="upcoming-movie1">
              <p className="movie1-header">illusion</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>2hr:38mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieLatest2">
            <div className="upcoming-movie1">
              <p className="movie1-header">revenge warrior</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>1hr:58mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieLatest3">
            <div className="upcoming-movie1">
              <p className="movie1-header">the great emperor</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>2hr:22mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieLatest4">
            <div className="upcoming-movie1">
              <p className="movie1-header">King of jungle</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>2hr:52mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieLatest5">
            <div className="upcoming-movie1">
              <p className="movie1-header">worst vampire</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>2hr:48mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieLatest6">
            <div className="upcoming-movie1">
              <p className="movie1-header">worst vampire</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>1hr:28mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <a href="#" className="viewAll-btn">View All</a>
      </div>
    </>
  );
}
