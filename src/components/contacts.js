import React, { useEffect, useState } from 'react'
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps';
import { ModalC } from "./modal";

export const Contacts = () => {
    const [isOpen, setModalState] = useState(null)
    const [phone, setPhone] = useState("")
    useEffect(() => {
        try{
            setPhone(document.querySelector('.roistat-phone').innerHTML)
        } catch (e) {

        }
    }, [])

    return (
        <React.Fragment>
            <section className="contact">
                <div className="tm">Контакты</div>
                <div className="contact__center plr">
                    <ul className="contact__info">
                        <li>
                            <img src="img/cont_ico1.png" />
                            <span>
                                г. Краснодар, <br />
                                ул. Энтузиастов, 168/1
                            </span>
                        </li>
                        <li>
                            <img src="img/cont_ico2.png" />
                            <span>
                                <a href="tel:88001234567">8 (800) 123 45 67</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="contact_map">
                    <div id="map" style={{width: "100%", height: "100%"}}>
                        <YMaps>
                            <div>
                                <Map defaultState={{ center: [45.03499674023101,39.019789697731], zoom: 14, controls: [] }} style={{ width: "100%", height: "100%", position: "absolute" }}  >
                                    <ZoomControl options={{ float: 'left' }} />
                                    <Placemark geometry={[45.03499674023101,39.019789697731]}
                                        options={{
                                            iconLayout: 'default#image',
                                            hideIconOnBalloonOpen: false,
                                            iconImageSize: [91, 98],
                                            iconImageOffset: [-45, -78],
                                            cursor: 'default',
                                            iconShadow: true,
                                            balloonclose: true,
                                            iconImageHref: 'img/map_ico.png',
                                        }}
                                    />
                                </Map>
                            </div>
                        </YMaps>
                    </div>
                    <div className="contact_map__bottom">
                        <div className="cont_quest_title">
                            Остались <span>вопросы?</span>
                        </div>
                        <a className="btn_main" href="#" onClick={(e) => { e.preventDefault(); setModalState(true)}}>Задайте их менеджеру</a>
                    </div>
                </div>
            </section>
            {isOpen?<ModalC 
            title={"Задайте <span>вопрос</span>"}
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
                    name: "email",
                    placeholder: "Ваш email",
                    required: true,
                    icon: "img/in_mail.png",
                }, 
                {
                    type:"text",
                    name: "phone",
                    placeholder: "Ваш телефон",
                    required: true,
                    icon: "img/in_phone.png",
                }, 
                {
                    type:"area",
                    name: "question",
                    placeholder: "Ваш вопрос",
                    required: true,
                    icon: "img/in_text.png",
                }, 
            ]}
            btnTitle={"Задать вопрос"}
            hidden={"Задать вопрос менеджеру"}
            celtype={"getQuestion"}
            close = {()=>{setModalState(false)}}
        />:<div></div>}
        </React.Fragment>
    )
}