import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

const Gallery = () => {
  const [swiper, setSwiper] = useState()
  const [sliderIndex, setIndex] = useState(1)
  return (
    <div className="photogall plr">
	    <div className="wmain">
	    	<div className="tm">Фотогалерея</div>
        <Swiper
            spaceBetween={0}
            speed={400}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            autoHeight={true}
            onSlideChange={() => { swiper != undefined ? setIndex(swiper.realIndex + 1) : setIndex(sliderIndex) }}
            onSwiper={(swiper) => {console.log(swiper); swiper.slideTo(1); setSwiper(swiper)}}
            className={"gallery__slider"}
        >
        {Array.from(Array(8).keys()).map((key)=>{
          return  <SwiperSlide><a className="photogall__slide" href="#"><img src={`img/photogall_img${key}.jpg`} /></a></SwiperSlide>
        })}
        </Swiper>
        <div className="slider_nav">
					<div className="swiper-button-prev">
						<img src="img/slider_plan_l.png" />
						<img src="img/slider_plan_l_act.png" />
					</div>
					<div className="swiper-pagination"></div>
					<div className="swiper-button-next">
						<img src="img/slider_plan_r.png" />
						<img src="img/slider_plan_r_act.png" />
					</div>
				</div>
      </div>
    </div>
  )
}

export default Gallery