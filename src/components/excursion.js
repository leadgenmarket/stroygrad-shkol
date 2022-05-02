import React, { useState } from "react";
import { ModalC } from "./modals/modal";
import { useSendForm } from "../hooks/send-from.hook";

const Excursion = () => {
  const [isOpen, setModalState] = useState(null)
  const sendform = useSendForm()
  return ( 
  <React.Fragment>
  <section className="excursion plr">
	    <div className="wmain">
	    	<div className="excursion__img"><img alt="..." src="img/excursion_img.png" /></div>
	    	<div className="excursion__decor"><img alt="..." src="img/excursion_decor1.png" /></div>
	    	<div className="excursion__content">
		    	<div className="excursion__title">
		    		Запишитесь на экскурссию
		    		<span>в ЖК "На Школьной", прямо сейчас</span>
		    	</div>
		    	<a className="btn_main" onClick={() => setModalState(true)} href="#">Записаться на просмотр</a>
	    	</div>
	    </div>
	</section>
  {isOpen?<ModalC 
      title={"Запишитесь <br><span>на экскурсию</span>"}
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
          icon: "img/in_mail.png",
        }, 
      ]}
      btnTitle={"Записаться"}
      celtype={"getExcursion"}
      close = {()=>{setModalState(false)}}
  />:<div></div>}
  </React.Fragment>
  )
}

export default Excursion