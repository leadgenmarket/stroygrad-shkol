import Slider from '@material-ui/core/Slider';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { PhoneInput } from './phone_input';
import { useSendForm } from '../hooks/send-from.hook';
import ModalC from './modal';

const GetFlat = () => {
	const [floor, setFloor] = useState(14);
	const [type, setType] = useState(1)
	const [success, setSuccess] = useState(false)
	const handleChange = (event, newValue) => {
		setFloor(newValue);
	};
	const sendform = useSendForm()
	
	const successCallback = () => {
		setSuccess(window.pageYOffset)
	} 


  return ( <React.Fragment>
	  <section class="get_flat plr">
	    <div class="wmain">
	    	<div class="get_flat_l">
		    	<div class="tm">
		    		Получите подборку <br /><span>свободных</span> квартир
		    	</div>
		    	<div class="get_flat_img"><img src="img/get_flat_img.png" /></div>
	    	</div>
	    	<div class="get_flat_r">
	    		<form class="get_flat__form">
	    			<div class="gff__title">Высылаем в течении 5 минут<img src="img/five_min_ico.png" /></div>
	    			<ul class="plans__nav">
							<li onClick={(e) => {setType(1)}} className={type === 1 ? "act" : ""}>1-ком</li>
							<li onClick={(e) => {setType(2)}} className={type === 2 ? "act" : ""}>2-ком</li>
							<li onClick={(e) => {setType(3)}} className={type === 3 ? "act" : ""}>3-ком</li>
			    	</ul>
			    	<div class="gff__slide">
			    		<div class="gff__slide_name">Этаж</div>
			    		<div class="gff__slide_inner">
								<FloorSlider
										value={floor}
										step={1}
										min={2}
										max={20}
										onChange={handleChange}
										valueLabelDisplay="off"
								/>
			    			<div class="gff__slid_num">{floor}</div>
			    		</div>
			    	</div>
			    	<div class="gff__inner">
			    		<label class="in_style">
			    			<input type="text" name="name" placeholder="Ваше имя" />
			    			<i><img src="img/in_name.png" /></i>
			    		</label>
			    		<PhoneInput />
						<input type="hidden" className="text" value={`Получить подборку ${type}-комнатная, этаж - ${floor}`} />
			    		<button class="btn_main" celtype={"getPodbor"} onClick={(e) => {sendform.sendForm(e, successCallback)}}>Получить подборку</button>
			    	</div>
	    		</form>
	    	</div>
	    </div>
	</section>
	{success?<ModalC 
            success={success}
            position={success}
            close = {()=>{setSuccess(false)}}
        />:<div></div>}
	  </React.Fragment>
  )
}

export default GetFlat

const FloorSlider = styled(Slider)({
	color: '#1D90E6',
	height: 8,
	'& .MuiSlider-track': {
		border: 'none',
	
	},
	'& .MuiSlider-rail': {
    backgroundColor: '#E2E3E5',
  },
	'& .MuiSlider-thumb': {
		height: 18,
		width: 18,
		backgroundColor: '#1D90E6',
		marginTop: "-8px",
		border: '2px solid currentColor',
		'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
			boxShadow: 'inherit',
		},
		'&:before': {
			display: 'none',
		},
	},
});