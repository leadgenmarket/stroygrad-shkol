import React, { useContext } from 'react'
import { BlocksContext } from "../context/blocksContext"

export const Menu = () => {
    const blocks = useContext(BlocksContext)

    const clickMenu = (e) => {
        e.preventDefault()
        let popup = e.currentTarget.getAttribute("href")
        if (blocks.blocks < 13) {
            blocks.setMenuClick(true)
            blocks.setBlocks(13)
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
                    <li><a onClick={clickMenu} href="location">Инфраструктура</a></li>
                    <li><a onClick={clickMenu} href="plans">Планировки и цены</a></li>
                    <li><a onClick={clickMenu} href="buy">Способы покупки</a></li>
                    <li><a onClick={clickMenu} href="contact">Контакты</a></li>
                </ul>
                <a className="hl_phone" href="tel:88007642348"><img alt="..." src="img/head_phone.png" />8 800 764 23 48</a>
            </div>
        </section>

    )
}