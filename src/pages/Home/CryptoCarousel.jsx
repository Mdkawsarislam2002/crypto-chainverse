import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";

const CryptoCarousel = ({ Data }) => {
  return (
    <div>
      <h2 className="text-xl lg:text-2xl mx-auto font-bold p-4">
        Trending Crypto Currency's
      </h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {Data.length === 0
          ? ""
          : Data.data.coins.map((element, index) => {
              const {
                uuid,
                btcPrice,
                change,
                coinrankingUrl,
                color,
                iconUrl: iconImg,
                listedAt,
                lowVolume,
                marketCap,
                name,
                price,
                rank,
                symbol,
                tier,
                sparkline,
              } = element;

              let HourVolume = element["24hVolume"];
              return (
                <SwiperSlide key={uuid}>
                  <Link
                    state={{
                      uuid,
                      HourVolume,
                      btcPrice,
                      change,
                      coinrankingUrl,
                      color,
                      iconImg,
                      listedAt,
                      lowVolume,
                      marketCap,
                      name,
                      price,
                      rank,
                      symbol,
                      tier,
                      sparkline,
                    }}
                    to={`/cryptodetails/${name}`}
                  >
                    <div className=" flex  items-center justify-center flex-col">
                      <img
                        className=" w-24 h-24 rounded-full"
                        src={iconImg}
                        alt={name + "logo"}
                      />
                      <h2 className="text-lg md:text-2xl font-semibold my-2">
                        {name} ( {symbol} )
                      </h2>
                      <p>
                        {change > 1 ? (
                          <span className="text-green-400 text-lg ">
                            +{change}
                          </span>
                        ) : (
                          <span className="text-rose-500 text-lg ">
                            -{change}
                          </span>
                        )}
                      </p>
                      <p>${Number(price).toFixed(2)}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};

export default CryptoCarousel;
