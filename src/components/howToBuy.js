import React, { useState } from "react"
import ModalC from "./modal"

export const HowToBuy = () => {
  const [modalType, setModalType] = useState(-1)

  const modalFields = [
    {
      type:"select",
      name: "vznos",
      placeholder: "Первоначальный взнос",
      options: ["10%","20%","30%","40%","50%",],
      required: false,
      icon: "img/select_vznos.png",
    },
    {
      type:"select",
      name: "srok",
      placeholder: "На срок",
      options: ["5 лет","10 лет","15 лет","20 лет","25 лет","30 лет"],
      required: false,
      icon: "img/select_srok.png",
    },
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
  ]

  return (<React.Fragment>
          <section className="buy plr">
            <div className="wmain">
              <div className="tm">Способы покупки</div>
              <ul className="buy__list">
                <li onClick={(e)=>{ e.preventDefault(); setModalType(0)}}>
                  <div className="buy__item">
                    <div className="buy__item_ico">
                      <img alt="..." src="img/buy_ico1.png" />
                      <img alt="..." src="img/buy_ico1_act.png" />
                    </div>
                    <div className="buy__item_name"><span>Ипотека</span></div>
                    <div className="buy__item_btn" onClick={(e)=>{ e.preventDefault(); setModalType(0)}}>Подробнее<i><img alt="..." src="img/buy_quest_ico.png" /><img alt="..." src="img/buy_quest_ico_act.png" /></i></div>
                  </div>
                </li>
                <li onClick={(e)=>{ e.preventDefault(); setModalType(1)}}>
                  <div className="buy__item">
                    <div className="buy__item_ico">
                      <img alt="..." src="img/buy_ico2.png" />
                      <img alt="..." src="img/buy_ico2_act.png" />
                    </div>
                    <div className="buy__item_name" onClick={(e)=>{ e.preventDefault(); setModalType(1)}}><span>Рассрочка</span></div>
                    <div className="buy__item_btn">Подробнее<i><img alt="..." src="img/buy_quest_ico.png" /><img alt="..." src="img/buy_quest_ico_act.png" /></i></div>
                  </div>
                </li>
                <li onClick={(e)=>{ e.preventDefault(); setModalType(2)}}>
                  <div className="buy__item">
                    <div className="buy__item_ico">
                      <img alt="..." src="img/buy_ico3.png" />
                      <img alt="..." src="img/buy_ico3_act.png" />
                    </div>
                    <div className="buy__item_name" onClick={(e)=>{ e.preventDefault(); setModalType(2)}}><span>Материнский капитал</span></div>
                    <div className="buy__item_btn">Подробнее<i><img alt="..." src="img/buy_quest_ico.png" /><img alt="..." src="img/buy_quest_ico_act.png" /></i></div>
                  </div>
                </li>
                <li onClick={(e)=>{ e.preventDefault(); setModalType(3)}}>
                  <div className="buy__item">
                    <div className="buy__item_ico">
                      <img alt="..." src="img/buy_ico4.png" />
                      <img alt="..." src="img/buy_ico4_act.png" />
                    </div>
                    <div className="buy__item_name" onClick={(e)=>{ e.preventDefault(); setModalType(3)}}><span>Военная ипотека</span></div>
                    <div className="buy__item_btn">Подробнее<i><img alt="..." src="img/buy_quest_ico.png" /><img alt="..." src="img/buy_quest_ico_act.png" /></i></div>
                  </div>
                </li>
              </ul>
            </div>
        </section>
        {
          {
            0: <ModalC
                  title={"Получите расчет<i>ежемесячного платежа по ипотеке</i>"}
                  fields={modalFields}
                  btnTitle={"получить расчет"}
                  celtype={"getExcursion"}
                  close = {()=>{setModalType(-1)}}
                />,
            1: <ModalC
                  title={"Получите расчет<i>ежемесячного платежа по рассрочке</i>"}
                  fields={modalFields}
                  btnTitle={"получить расчет"}
                  celtype={"getRassr"}
                  close = {()=>{setModalType(-1)}}
                />,
            2: <ModalC
                title={"Материнский капитал"}
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
                btnTitle={"Узнать подробнее"}
                celtype={"getMatKap"}
                close = {()=>{setModalType(-1)}}
              />,
            3: <ModalC
              title={"Получите расчет<i>ежемесячного платежа по военной ипотеке</i>"}
              fields={modalFields}
              btnTitle={"получить расчет"}
              celtype={"getVoenIpot"}
              close = {()=>{setModalType(-1)}}
            />,
          }[modalType]
        }
        
      </React.Fragment>
  )
}

export default HowToBuy