import React, { useRef, useState } from "react";
import "./homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import headlogo from "../../../assets/head-logo.png";
import { FaRegPlayCircle } from "react-icons/fa";
import {Autoplay,Pagination, Navigation} from "swiper";
const HomePage = () => {
  return (
    <>
      <Swiper
        navigation={true}
        centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={false}
          modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide id="slide1">
          <div className="slide_container ">
            <div className="slide-right-content">
              <div className="head-logo">
                <img src={headlogo} alt="error" />
              </div>
              <h1 className="sand-text">sand dust</h1>
              <div className="reviewLine">
                {" "}
                <span id="review-stars">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-line"></i>
                </span>
                <span>4.7 (imdb)</span>
                <span id="movie-GP">GP</span>
                <span>2hr:22mins</span>
              </div>
              <div
                style={{
                  width: "90%",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#F2F2F2",
                  fontSize: "17px",
                }}
              >
                Sand and dust storms (SDS), also known as sirocco, haboob,
                yellow dust, white storms, and the harmattan, are a natural
                phenomenon linked with land and water management and climate
                change.{" "}
              </div>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Starring
                </span>{" "}
                Karen Gilchrist,James Earl Jones
              </p>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Genres
                </span>{" "}
                Action
              </p>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Tags
                </span>{" "}
                Action,Adventure, Horror
              </p>
              <a className="playBTN ">
                {" "}
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
            <div className="slide-left-content">
              <div className="leftSide-videoRow">
                <FaRegPlayCircle id="videoIcon" size={"60px"} />
                <p id="watch_trailer">WATCH TRAILER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide2">
          <div className="slide_container ">
            <div className="slide-right-content">
              <div className="head-logo">
                <img src={headlogo} alt="error" />
              </div>
              <h1 className="sand-text">skull island</h1>
              <div className="reviewLine">
                {" "}
                <span id="review-stars">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-line"></i>
                </span>
                <span>4.7 (imdb)</span>
                <span id="movie-GP">GP</span>
                <span>2hr:22mins</span>
              </div>
              <div
                style={{
                  width: "90%",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#F2F2F2",
                  fontSize: "17px",
                }}
              >
                The island, like its inhabitants, is wholly fictional. Kong's
                island home in the Pacific makes its first appearance, along
                with Kong himself, in the 1933 film King Kong.
              </div>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Starring
                </span>{" "}
                Karen Gilchrist,James Earl Jones
              </p>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Genres
                </span>{" "}
                Action
              </p>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Tags
                </span>{" "}
                Action,Adventure, Horror
              </p>
              <a className="playBTN ">
                {" "}
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
            <div className="slide-left-content">
              <div className="leftSide-videoRow">
                <FaRegPlayCircle id="videoIcon" size={"60px"} />
                <p id="watch_trailer">WATCH TRAILER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide3">
          <div className="slide_container ">
            <div className="slide-right-content">
              <div className="head-logo">
                <img src={headlogo} alt="error" />
              </div>
              <h1 className="sand-text">privates of sea</h1>
              <div className="reviewLine">
                {" "}
                <span id="review-stars">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-line"></i>
                </span>
                <span>4.7 (imdb)</span>
                <span id="movie-GP">GP</span>
                <span>2hr:22mins</span>
              </div>
              <div
                style={{
                  width: "90%",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#F2F2F2",
                  fontSize: "17px",
                }}
              >
                Piracy is an act of robbery or criminal violence by ship or
                boat-borne attackers upon another ship or a coastal area,
                typically with the goal of stealing cargo and other valuable
                items or properties.
              </div>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Starring
                </span>{" "}
                Karen Gilchrist,James Earl Jones
              </p>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Genres
                </span>{" "}
                Action
              </p>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Tags
                </span>{" "}
                Action,Adventure, Horror
              </p>
              <a className="playBTN ">
                {" "}
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
            <div className="slide-left-content">
              <div className="leftSide-videoRow">
                <FaRegPlayCircle id="videoIcon" size={"60px"} />
                <p id="watch_trailer">WATCH TRAILER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide4">
          <div className="slide_container ">
            <div className="slide-right-content">
              <div className="head-logo">
                <img src={headlogo} alt="error" />
              </div>
              <h1 className="sand-text">shadow</h1>
              <div className="reviewLine">
                {" "}
                <span id="review-stars">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-half-line"></i>
                </span>
                <span>4.7 (imdb)</span>
                <span id="movie-GP">GP</span>
                <span>2hr:22mins</span>
              </div>
              <div
                style={{
                  width: "90%",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#F2F2F2",
                  fontSize: "17px",
                }}
              >
                A shadow is a dark (real image) area where light from a light
                source is blocked by an opaque object. It occupies all of the
                three-dimensional volume behind an object with light in front of
                it. A shadow is a dark (real image) area where light from a
                light source is blocked by an opaque object.
              </div>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Starring
                </span>{" "}
                Karen Gilchrist,James Earl Jones
              </p>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Genres
                </span>{" "}
                Action
              </p>
              <p>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginRight: "7px",
                  }}
                >
                  Tags
                </span>{" "}
                Action,Adventure, Horror
              </p>
              <a className="playBTN ">
                {" "}
                <i class="ri-play-mini-fill"></i> Play Now
              </a>
            </div>
            <div className="slide-left-content">
              <div className="leftSide-videoRow">
                <FaRegPlayCircle id="videoIcon" size={"60px"} />
                <p id="watch_trailer">WATCH TRAILER</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default HomePage;
