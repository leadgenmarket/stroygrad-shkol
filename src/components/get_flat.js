const GetFlat = () => {
  return ( <section class="get_flat plr">
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
			    		<li>1-ком</li>
			    		<li class="act">2-ком</li>
			    		<li>3-ком</li>
			    	</ul>
			    	<div class="gff__slide">
			    		<div class="gff__slide_name">Этаж</div>
			    		<div class="gff__slide_inner">
			    			<div class="gff__slid"></div>
			    			<div class="gff__slid_num">14</div>
			    		</div>
			    	</div>
			    	<div class="gff__inner">
			    		<label class="in_style">
			    			<input type="text" value="Ваше имя" data="Ваше имя" />
			    			<i><img src="img/in_name.png" /></i>
			    		</label>
			    		<label class="in_style">
			    			<input class="in_phone" type="text" value="Ваш телефон" data="Ваш телефон" />
			    			<i><img src="img/in_phone.png" /></i>
			    		</label>
			    		<button class="btn_main">Получить подборку</button>
			    	</div>
	    		</form>
	    	</div>
	    </div>
	</section>
  )
}

export default GetFlat