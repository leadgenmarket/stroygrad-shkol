import React, { useEffect, useState } from 'react'
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';

export const Contacts = () => {
    const [phone, setPhone] = useState("")
    useEffect(() => {
        setPhone(document.querySelector('.roistat-phone').innerHTML)
    }, [])

    return (
        <section className="contact">
            <div className="contact__l">
                <div id="page4" className="tm tt">Офис продаж <br />и контакты</div>
                <ul className="cont_list">
                    <li>
                        Щелково,  Центральная ул. 71/1 <br />(дальний вход в магазин ДА)
                    </li>
                    <li>
                        <a href={"tel:" + phone.replaceAll(" ", "").replaceAll("-", "").replaceAll("(", "").replaceAll(")", "") + "\""}><b>{phone}</b></a><br />
                        <a href="#">info@sunny-park.ru</a>
                    </li>
                    <li>
                        График работы:<br />
                        Пн–Пт: 10:00 - 21:00<br />
                        Сб–Вс: 10:00 - 20:00<br />
                    </li>
                </ul>
                {/*<div className="soc_list">
                    <a href="#"><img alt="..." src="img/soc_ico1.svg" /></a>
                    <a href="#"><img alt="..." src="img/soc_ico2.svg" /></a>
                    <a href="#"><img alt="..." src="img/soc_ico3.svg" /></a>
                    <a href="#"><img alt="..." src="img/soc_ico4.svg" /></a>
                </div>*/}
            </div>
            <div className="contact__r">
                <div id="map">
                    <YMaps>
                        <div>
                            <Map defaultState={{ center: [55.926217, 37.963064], zoom: 16, controls: [] }} style={{ width: "100%", height: "100%", position: "absolute" }}  >
                                <ZoomControl options={{ float: 'left' }} />
                                <Placemark geometry={[55.926217, 37.963064]}
                                    options={{
                                        iconLayout: 'default#image',
                                        hideIconOnBalloonOpen: false,
                                        iconImageSize: [50, 64],
                                        iconImageOffset: [-25, -64],
                                        cursor: 'default',
                                        iconShadow: true,
                                        balloonclose: true,
                                        iconImageHref: 'img/cont_map_ico.svg',
                                        balloonPanelMaxMapArea: 0,
                                    }}
                                />
                            </Map>
                        </div>
                    </YMaps>
                </div>
            </div>

        </section>
    )
}