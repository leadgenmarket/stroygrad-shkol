import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper'

const Gallery = () => {
  const [swiper, setSwiper] = useState()
  const [sliderIndex, setIndex] = useState(1)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const paginationRef = useRef(null)

  return (
    <div className="photogall plr">
	    <div className="wmain" >
	    	<div className="tm">Фотогалерея</div>
        <div className={"photogall__slider"} style={{position:"relative"}}>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            speed={400}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            autoHeight={true}
            onSlideChange={() => { swiper != undefined ? setIndex(swiper.realIndex + 1) : setIndex(sliderIndex) }}
            onSwiper={(swiper) => {console.log(swiper); swiper.slideTo(1); setSwiper(swiper)}}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ 
                el: paginationRef.current, 
                clickable: true 
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
        >
        {Array.from(Array(8).keys()).map((key)=>{
          return  <SwiperSlide><a className="photogall__slide" href="#"><img src={`img/photogall_img${key}.jpg`} /></a></SwiperSlide>
        })}
        
        </Swiper>
        <div class="slider_nav">
          <div class="swiper-button-prev" ref={navigationPrevRef}>
              <img src="img/slider_plan_l.png" />
              <img src="img/slider_plan_l_act.png" />
          </div>
          <div class="swiper-pagination" ref={paginationRef}></div>
          <div class="swiper-button-next" ref={navigationNextRef}>
              <img src="img/slider_plan_r.png" />
              <img src="img/slider_plan_r_act.png" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery