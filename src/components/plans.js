import React, { useEffect, useState } from "react"

export const Plans = () => {
    const [floors, setFloor] = useState([3, 15])
    const [area, setArea] = useState([18, 140])
    const [type, setType] = useState("all")
    const [flats, setFlats] = useState([])
    const [flatsToShow, setFlatsToShow] = useState(3)
   


    const typeClick = (type) => {
        setType(type)
        setFlatsToShow(3)
        filterFlats(flats, area, type, 3, floors)
    }

    const kvTitleFull = (classKv) => {
        switch (classKv) {
            case 0:
                return "Cтудия"
            case 1:
                return "Однокомнатная"
            case 2:
                return "Двухкомнатная"
            case 3:
                return "Трехкомнатная"
        }
    }

    const flatClick = (e) => {
        e.preventDefault()
        let id = e.currentTarget.getAttribute('id')
        let flat
        const headers = { 'Content-Type': 'application/json' }
        fetch(process.env.REACT_APP_BACKEND_URL + "/flats.php?ID=" + id, headers)
            .then(res => res.json())
            .then((result) => {
                flat = result
                console.log(result)
                document.querySelector('.pu_rgba').style.display = "block"
                document.querySelectorAll('.pu_inner').forEach(el => {
                    el.style.display = "none"
                });
                document.querySelector('.pu_flat').style.display = "block"
                document.querySelector('body').classList.add('overflow')
                document.querySelector('.pu_flat_content__r img').setAttribute('src', process.env.REACT_APP_PLANS_URL + flat.photo)
                document.querySelector('.pu_flat #sq_all').innerHTML = flat.total_area + " м²"
                document.querySelector('.pu_flat #sq_zhil').innerHTML = flat.living_area + " м²"
                document.querySelector('.pu_flat .tm b').innerHTML = flat.class == "0" ? "Квартира-студия" : kvTitleFull(flat.rooms) + " квартира"
                document.querySelector('.pu_flat .text').value = 'Узнать стоимость ' + kvTitle(flat.rooms) + "; Общая площадь: " + flat.total_area + "; Жилая площадь: " + flat.living_area
            })
    }

    const kvTitle = (classKv) => {
        switch (classKv) {
            case 0:
                return "Студии"
            case 1:
                return "1-k квартира"
            case 2:
                return "2-k квартира"
            case 3:
                return "3-k квартира"
        }
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/flats.php", {})
            .then(res => res.json())
            .then((result) => {
                let flats = []
				result.map((flat) => {
					let floors = []
					if (flat.floors != "") {
						let tmpFloor = flat.floors.split(',')
						tmpFloor.forEach((fl)=>{
							floors.push(parseInt(fl))
						})
					}
					flat.floors = floors
					flats.push(flat)
				})
				setFlats(flats)
                filterFlats(result, area, type, flatsToShow, floors)
            })
    }, [])
    return (
        <section class="plans plr">
            <div class="wmain">
                <div class="plans__decor"><img alt="..." src="img/plans_decor.png" /></div>
                <div class="tm">
                    Планировки и <span>цены квартир</span>
                </div>
                <ul class="plans__nav">
                    <li>Все</li>
                    <li>1-ком</li>
                    <li class="act">2-ком</li>
                    <li>3-ком</li>
                </ul>
            </div>
        </section>
    )
}

export default Plans

{/*<section className="flat">
            <div id="page2" className="tm tt">
                <b>Выберите квартиру</b> по <br />нужным параметрам
            </div>
            <div className="flat__nav">
                <div className="flat__nav_item">
                    <div className="flat__nav_name">Количество комнат</div>
                    <div className="flat__nav_btn">
                        <div className={type == "all" ? "act" : ""} onClick={() => typeClick("all")}>Все</div>
                        <div className={type == "0" ? "act" : ""} onClick={() => typeClick("0")}>Студии</div>
                        <div className={type == "1" ? "act" : ""} onClick={() => typeClick("1")}>1</div>
                        <div className={type == "2" ? "act" : ""} onClick={() => typeClick("2")}>2</div>
                        <div className={type == "3" ? "act" : ""} onClick={() => typeClick("3")}>3</div>
                    </div>
                </div>
                <div className="flat__nav_item">
                    <div className="flat__nav_name">Этаж</div>
                    <div id="slid__etaj" className="slid"></div>
                    <Slider className="slid_style_react"
                        //defaultValue={floor}
                        value={floors}
                        step={1}
                        min={2}
                        max={17}
                        onChange={handleChange}
                        valueLabelDisplay="on"
                    />
                </div>
                <div className="flat__nav_item">
                    <div className="flat__nav_name">Площадь</div>
                    <div id="slid__area" className="slid"></div>
                    <Slider className="slid_style_react"
                        //defaultValue={floor}
                        value={area}
                        step={1}
                        min={18}
                        max={86}
                        onChange={handleChangeArea}
                        valueLabelDisplay="on"
                    />
                </div>
            </div>
            <ul className="benefit__list">
                {filteredFlats.map((flat) => <li>
                    <div className="benefit__item">
                        <a className="benefit__img" onClick={flatClick} id={flat.ID} href="#"><img alt="..." src={process.env.REACT_APP_PLANS_URL+ flat.photo} /></a>
                        <div className="benefit__title">
                            {kvTitle(flat.rooms)} {flat.total_area} м²
                        </div>
                        <a className="benefit__btn" onClick={flatClick} id={flat.ID} href="#">Узнать стоимость</a>
                    </div>
                </li>
                )}
            </ul>
            {!hideMore ? <div className="benefit__list_btn">
                <div onClick={moreClick} className="btn_white">Показать еще</div>
            </div> : ""}
        </section>*/}