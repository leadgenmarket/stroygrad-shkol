import { useEffect, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { useSendForm } from "../hooks/send-from.hook";
import { PhoneInput } from "./phone_input";
const parse = require('html-react-parser');

export const ModalC = ({title, position, hidden, flat, fields, celtype, btnTitle, success, close}) => {
  const sendForm = useSendForm()
  const [successShow, setSuccessShow] = useState(false)
  const successCallback = () => {
    setSuccessShow(true)
  }
  useEffect(()=>{
    setTimeout(()=>{
      window.scrollTo({
        top: position,
      });
    },0)
  },[])
  
  if (success || successShow) {
    return <Modal isOpen={true} toggle={() => {setModalState(null)}}>
      <ModalBody>
        <div className="pu_main plr">
          <div className="pu_table">
            <div className="pu_cell">
              <div class="pu_inner pu_ok" style={{display:"block"}}>
                <div className="closeform" onClick={() => close()}><img alt="..." src="img/closeform.png" /></div>
                <div class="pu_title">
                  Спасибо
                  <i>в ближайшее время с Вами свяжется наш специалист</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  }

  if (flat) {
    const kvTitle = (classKv) => {
        switch (classKv) {
            case 0:
                return "Студии"
            case 2:
                return "Двухкомнатная квартира"
            case 3:
                return "Трехкомнатная квартира"
            default:
              return "Однокомнатная квартира"
        }
    }
    
    return  (
      <Modal isOpen={true} toggle={() => {setModalState(null)}}>
        <ModalBody>
        <div className="pu_main plr">
          <div className="pu_table">
            <div className="pu_cell">
              <div className="pu_inner pu_flat">
                <div className="closeform" onClick={() => close()}><img alt="..." src="img/closeform.png" /></div>
                <div class="pu_flat__content">
                    <div class="pu_flat_l">
                      <div class="pu_title">
                        {kvTitle(flat.rooms)}
                      </div>
                    <div class="pu_flat_area">
                      <span>Общая площадь: {flat.total_area} м<sup>2</sup></span>
                      <span>Жилая площадь: {flat.living_area} м<sup>2</sup></span>
                    </div>
                    <form class="pu_form">
                    {fields.map((field)=>{
                      switch (field.type){
                        case "area":
                          return <label class="in_style">
                                    <textarea className="dop-info" placeholder={field.placeholder} data={field.placeholder}></textarea>
                                    <i><img alt="..." src={field.icon} /></i>
                                  </label>
                        case "select":
                          return <label class="in_style in_select">
                                  <select className="dop-select" data={field.placeholder}>
                                    <option>{field.placeholder}</option>
                                    {field.options.map((option)=>{
                                      return <option>{option}</option>
                                    })}
                                  </select>
                                  <i><img alt="..." src={field.icon} /></i>
                                </label>
                        default:
                          if (field.name === "phone") {
                            return <PhoneInput />
                          }
                          return <label className="in_style">
                                    <input type="text" name={field.name} placeholder={field.placeholder} />
                                    <i><img alt="..." src={field.icon} /></i>
                                  </label>
                      }
                    })}
                    <input type="hidden" className="text" value={`Узнать стоимость квартиры ${flat.rooms}-комнатная, общая площадь - ${flat.total_area}, жилая площадь - ${flat.living_area}`} />
                    <div className="align_center">
                      <button className="btn_main" celtype={celtype} onClick={(e) => sendForm.sendForm(e, successCallback)}>{btnTitle}</button>
                    </div>
                    </form>
                  </div>
                  <div class="pu_flat_r">
                    <img src={process.env.REACT_APP_PLANS_URL + flat.photo} alt="..."/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ModalBody> 
      </Modal>
    )
  }
  
  return (
    <Modal isOpen={true} toggle={() => {setModalState(null)}}>
      <ModalBody>
        <div className="pu_main plr">
          <div className="pu_table">
            <div className="pu_cell">
              <div className="pu_inner">
                <div className="closeform" onClick={() => close()}><img alt="..." src="img/closeform.png" /></div>
                <div className="pu_title">
                  {parse(title)}
                </div>
                <form className="pu_form">
                  {fields.map((field)=>{
                    switch (field.type){
                      case "area":
                        return <label class="in_style">
                                  <textarea className="dop-info" data={field.placeholder} placeholder={field.placeholder}></textarea>
                                  <i><img alt="..." src={field.icon} /></i>
                                </label>
                      case "select":
                        return <label class="in_style in_select">
                                <select className="dop-select" data={field.placeholder}>
                                  <option>{field.placeholder}</option>
                                  {field.options.map((option)=>{
                                    return <option>{option}</option>
                                  })}
                                </select>
                                <i><img alt="..." src={field.icon} /></i>
                              </label>
                      default:
                        if (field.name === "phone") {
                          return <PhoneInput />
                        }
                        return <label className="in_style">
                                  <input type="text" name={field.name} placeholder={field.placeholder} />
                                  <i><img alt="..." src={field.icon} /></i>
                                </label>
                    }
                  })}
                  <input type="hidden" className="text" value={hidden} />
                  <div className="align_center">
                    <button className="btn_main" celtype={celtype} onClick={(e) => sendForm.sendForm(e, successCallback)}>{btnTitle}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ModalC