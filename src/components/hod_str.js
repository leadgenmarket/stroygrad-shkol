import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'


export const HodStr = () => {
    const [hod_a, setHod_a] = useState(null);
    const [active, setActive] = useState({
        year: null,
        month: null,
        photos: []
    })
    const [photos, setPhotos] = useState([])
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)


    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' }
        fetch(process.env.REACT_APP_BACKEND_URL + "/hod_react.php", headers)
            .then(res => res.json())
            .then((result) => {
                setHod_a(result)

                let year = Object.keys(result.struct)[Object.keys(result.struct).length - 1]
                let month = Object.keys(result.struct[year])[Object.keys(result.struct[year]).length - 1]
                let photos = result.photos[year + "_" + month]

                setActive({
                    year: year,
                    month: month,
                    photos: photos
                })

                setPhotos(photos)
            })

    }, [])

    if (hod_a === null || active.year === null) {
        return <div>loading</div>
    }

    const yearClick = (e) => {
        e.preventDefault()
        let tmp = active
        tmp.year = e.currentTarget.getAttribute('data')
        tmp.month = Object.keys(hod_a.struct[tmp.year])[Object.keys(hod_a.struct[tmp.year]).length - 1]
        tmp.photos = hod_a.photos[tmp.year + "_" + tmp.month]

        setActive(tmp)
        setPhotos(tmp.photos)
    }
    const monthClick = (e) => {
        e.preventDefault()
        let tmp = active
        tmp.month = e.currentTarget.getAttribute('data')
        tmp.photos = hod_a.photos[tmp.year + "_" + tmp.month]
        setActive(tmp)
        setPhotos(tmp.photos)
    }

    const monthName = (month) => {
        let name = ''
        switch (month) {
            case '1':
                name = "Январь"
                break
            case '2':
                name = "Февраль"
                break
            case '3':
                name = "Март"
                break
            case '4':
                name = "Апрель"
                break
            case '5':
                name = "Май"
                break
            case '6':
                name = "Июнь"
                break
            case '7':
                name = "Июль"
                break
            case '8':
                name = "Август"
                break
            case '9':
                name = "Сентябрь"
                break
            case '10':
                name = "Октябрь"
                break
            case '11':
                name = "Ноябрь"
                break
            default:
                name = "Декабрь"
                break
        }
        return name
    }


    return (
        <section className="hod plr">
            <div className="wmain">
                <div className="hod_l">
                    <div className="tm">Ход строительства</div>
                    <div className="hod_info">
                        Жилой комплекс строится по ФЗ 214 с использованием проектного финансирвоания и эксроу-счетов. Со всей документацией по объекту вы можете ознакомиться на сайте Единой информационной системы жилищного строительства <a target="_blank" href="https://xn--80az8a.xn--d1aqf.xn--p1ai/">наш.дом.рф</a>
                    </div>
                </div>
                <div className="hod_r">
                    <div className="hod_slider_main">
                        <div className='hod_slider'>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={3}
                            speed={200}
                            slidesPerView={"auto"}
                            loop={false}
                            autoHeight={true}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                            }}
                        >
                            {photos ? photos.map((photo) => {
                                    return <SwiperSlide>
                                        <img alt="..." src={process.env.REACT_APP_BACKEND_URL + "/" + photo} />
                                    </SwiperSlide>
                                }) : ""}
                        </Swiper>
                        <div className="swiper-button-prev" ref={navigationPrevRef}>
							<span>
								<img src="img/hod_slider_str_l.png" alt="..." />
								<img src="img/hod_slider_str_l_act.png" alt="..." />
							</span>
						</div>
						<div className="swiper-button-next" ref={navigationNextRef}>
							<span>
								<img src="img/hod_slider_str_r.png" alt="..." />
								<img src="img/hod_slider_str_r_act.png" alt="..." />
							</span>
						</div>
                        </div>
                    </div>
                    <div className="hod_nav">
                        <div className="hod_year">
                            {Object.keys(hod_a.struct).reverse().map((year) => {
                                return <div className={active.year === year ? "act" : ""} data={year} onClick={yearClick}>{year}</div>
                            })}
                        </div>
                        <div className="hod_mounth">
                            {Object.keys(hod_a.struct[active.year]).reverse().map((month) => {
                                return <div href="/" onClick={monthClick} data={month} className={active.month === month ? "act" : ""}>{monthName(month)}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default HodStr