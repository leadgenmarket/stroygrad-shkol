import React, { useContext, useEffect } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Menu = () => {
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

    const clickMenu = (e) => {
        e.preventDefault()
        let popup = e.currentTarget.getAttribute("href")
        if (blocks.blocks < 15) {
            blocks.setMenuClick(true)
            blocks.setBlocks(15)
            setTimeout(() => {
                window.scrollTo({
                    top: document.querySelector("." + popup).offsetTop,
                    behavior: "smooth"
                })
                setTimeout(() => {
                    blocks.setMenuClick(false)
                }, 500)


            }, 1200)

        } else {
            window.scrollTo({
                top: document.querySelector("." + popup).offsetTop,
                behavior: "smooth"
            })
        }
    }

    return (
        <section className="hl_top plr">
            <div className="wmain">
                <a className="logo" href="#"><img alt="..." src="/img/logo.svg" /></a>
                <div className="btn_nav_mobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="hl_nav">
                    <li><a href="#">Инфраструктура</a></li>
                    <li><a className="act" href="#">Планировки и цены</a></li>
                    <li><a href="#">Способы покупки</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <a className="hl_phone" href="tel:88007642348"><img alt="..." src="img/head_phone.png" />8 800 764 23 48</a>
            </div>
        </section>

    )
}