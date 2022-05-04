import React, { useState } from "react";
import { ModalC } from "./modal";

const Excursion = () => {
  const [isOpen, setModalState] = useState(null)
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
		    	<a className="btn_main" onClick={(e) => { e.preventDefault(); setModalState(window.pageYOffset)}} href="#">Записаться на просмотр</a>
	    	</div>
	    </div>
	</section>
  {isOpen!==null?<ModalC 
      title={"Запишитесь <br><span>на экскурсию</span>"}
      position={isOpen}
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
      btnTitle={"Записаться"}
      celtype={"getExcursion"}
      close = {()=>{setModalState(null)}}
  />:<div></div>}
  </React.Fragment>
  )
}

export default Excursion