import React, { useContext } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Header = () => {
    const blocks = useContext(BlocksContext)

    const showPopup = (e) => {
        e.preventDefault()
        document.querySelector('body').classList.add('overflow')
        document.querySelector('.popup_rgba').style.display = "block"
        document.querySelectorAll('.popup_main').forEach(el => {
            el.style.display = "none"
        });
        console.log(e.currentTarget.getAttribute('data'))
        document.querySelector('.' + e.currentTarget.getAttribute('data')).style.display = "block"
    }

    return (
        <React.Fragment>
            <section className="header plr">
                <div className="wmain">
                    <div className="head_plashka">
                        <div className="head_plashka__inner">
                            <span>г. Ростов на Дону</span>
                            <h1>ЖК "На Школьной"</h1>
                            <span>Квартиры комфорт +</span>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}