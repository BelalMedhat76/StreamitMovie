import React from "react";
import "./upcoming.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
export default function Upcoming() {
  return (
    <>
      <div className="Upcoming-section">
        <h1 style={{color:"red", fontWeight:"900"}}>Upcoming Movies</h1>
        <Swiper
          id="swiperMovies"
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={false}
          modules={[Pagination, Navigation]}
          className="mySwiper container"
        >
          <SwiperSlide className="movieUpcoming1">
            <div className="upcoming-movie1">
              <p className="movie1-header"> my office Boss</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>2hr:38mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieUpcoming2">
            <div className="upcoming-movie1">
              <p className="movie1-header">shadow</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>1hr:58mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieUpcoming3">
            <div className="upcoming-movie1">
              <p className="movie1-header">sand dust</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>2hr:22mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieUpcoming4">
            <div className="upcoming-movie1">
              <p className="movie1-header">another danger</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>2hr:52mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieUpcoming5">
            <div className="upcoming-movie1">
              <p className="movie1-header">worst vampire</p>
              <p style={{ fontSize: "15px", color: "#F4E2DE" }}>2hr:48mins</p>
              <a className="playBTN-Upcoming  ">
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movieUpcoming6">
            <div className="upcoming-movie1">
              <p className="movie1-header">one man army</p>
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
