import { Modal, ModalBody } from "reactstrap";
const parse = require('html-react-parser');

export const ModalC = ({title, fields, celtype, btnTitle, close}) => {
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
                                  <textarea placeholder={field.placeholder}></textarea>
                                  <i><img alt="..." src={field.icon} /></i>
                                </label>
                      case "select":
                        return <label class="in_style in_select">
                                <select>
                                  <option>{field.placeholder}</option>
                                  {field.options.map((option)=>{
                                    return <option>{option}</option>
                                  })}
                                </select>
                                <i><img alt="..." src={field.icon} /></i>
                              </label>
                      default:
                        return <label className="in_style">
                                  <input type="text" name={field.name} placeholder={field.placeholder} />
                                  <i><img alt="..." src={field.icon} /></i>
                                </label>
                    }
                  })}
                  <div className="align_center">
                    <button className="btn_main" celtype={celtype} onClick={() => sendform.sendForm()}>{btnTitle}</button>
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