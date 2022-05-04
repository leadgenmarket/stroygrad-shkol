import React, { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { ModalC } from "./modal";
import 'swiper/css';

export const Plans = () => {
    const [isOpen, setModalState] = useState(null)
    const [type, setType] = useState("all")
    const [flats, setFlats] = useState([])
    const [flatPopup, setPopupFlat] = useState()
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const paginationRef = useRef(null)

    const kvTitle = (classKv) => {
        switch (classKv) {
            case 0:
                return "Студии"
            case 2:
                return "2 - комнатная квартира"
            case 3:
                return "3 - комнатная квартира"
            default:
                return "1 - комнатная квартира" 
        }
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/flats.php", {})
            .then(res => res.json())
            .then((result) => {
                let flats = []
				result.forEach((flat) => {
					let floors = []
					if (flat.floors !== "") {
						let tmpFloor = flat.floors.split(',')
						tmpFloor.forEach((fl)=>{
							floors.push(parseInt(fl))
						})
					}
					flat.floors = floors
					flats.push(flat)
				})
				setFlats(flats)
            })
    }, [])
    return (
        <React.Fragment>
            <section className="plans plr">
                <div className="wmain">
                    <div className="plans__decor"><img alt="..." src="img/plans_decor.png" /></div>
                    <div className="tm">
                        Планировки и <span>цены квартир</span>
                    </div>
                    <ul className="plans__nav">
                        <li onClick={(e) => {setType("all")}} className={type === "all" ? "act" : ""}>Все</li>
                        <li onClick={(e) => {setType(1)}} className={type === 1 ? "act" : ""}>1-ком</li>
                        <li onClick={(e) => {setType(2)}} className={type === 2 ? "act" : ""}>2-ком</li>
                        <li onClick={(e) => {setType(3)}} className={type === 3 ? "act" : ""}>3-ком</li>
                    </ul>
                    <Swiper className="plans__slider"
                        modules={[Navigation, Pagination]}
                        speed={300}
                        slidesPerView={"auto"}
                        spaceBetween={32}
                        loop={false}
                        autoHeight={true}
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
                        {flats.map((flat) => {
                            if ((type === "all" || flat.rooms === type)) { //&& checkFloorsInRange(flat.floors)
                                return <SwiperSlide onClick={(e) => { e.preventDefault(); setPopupFlat(flat); setModalState(true)}} key={flat.ID}>
                                    <div className="plans__slide">
                                        <div className="plans__slide_title">{kvTitle(flat.rooms)}</div>
                                        <div className="plans__slide_img"><img src={process.env.REACT_APP_PLANS_URL + flat.photo} alt="..."/></div>
                                        <div className="plans__slide_info">
                                            <div className="plans__slide_area">Общая площадь: <span>{flat.total_area} м<sup>2</sup></span></div>
                                            <a className="btn_border" href="/" onClick={(e) => { e.preventDefault(); setPopupFlat(flat); setModalState(true)}}>Подробнее</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            }
                            return ""
                        })
                        }
                    </Swiper>
                </div>
                <div className="slider_nav">
                    <div className="swiper-button-prev" ref={navigationPrevRef}>
                        <img src="img/slider_plan_l.png" alt="..." />
                        <img src="img/slider_plan_l_act.png" alt="..." />
                    </div>
                    <div className="swiper-pagination" ref={paginationRef}></div>
                    <div className="swiper-button-next" ref={navigationNextRef}>
                        <img src="img/slider_plan_r.png" alt="..." />
                        <img src="img/slider_plan_r_act.png" alt="..." />
                    </div>
                </div>
            </section>
        {isOpen?<ModalC 
            title={"Запишитесь <br><span>на экскурсию</span>"}
            flat={flatPopup}
            fields={[
                {
                    type:"text",
                    name: "name",
                    placeholder: "Ваше имя",
                    required: false,
                    icon: "img/in_name.png",
                },
                {
                    type:"text",
                    name: "phone",
                    placeholder: "Ваш телефон",
                    required: true,
                    icon: "img/in_phone.png",
                }, 
            ]}
            btnTitle={"Узнать стоимость"}
            celtype={"getFlatCoast"}
            close = {()=>{setModalState(false)}}
        />:<div></div>}
        </React.Fragment>
    )
}

export default Plans