// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function Team() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoHeight={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 3,
          slideShadows: false,
        }}
        breakpoints={{
          280: {
            slidesPerView: 2,
            spaceBetween: 0,
          },

          500: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="h-auto -z-10"
      >
        <SwiperSlide className="w-20 rounded-full">
          <img
            className="rounded-full"
            src="./assets/member3.png"
            alt="Imagem de membro da equipe"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-full w-20">
          <img
            className="rounded-full"
            src="./assets/member2.png"
            alt="Imagem de membro da equipe"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-full w-20">
          <img
            className="rounded-full"
            src="./assets/member7.png"
            alt="Imagem de membro da equipe"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-full w-20">
          <img
            className="rounded-full"
            src="./assets/member4.png"
            alt="Imagem de membro da equipe"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-full w-20">
          <img
            className="rounded-full"
            src="./assets/member5.png"
            alt="Imagem de membro da equipe"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-full w-20">
          <img
            className="rounded-full"
            src="./assets/member1.png"
            alt="Imagem de membro da equipe"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-full w-20">
          <img
            className="rounded-full"
            src="./assets/member6.png"
            alt="Imagem de membro da equipe"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
