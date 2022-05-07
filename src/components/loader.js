import React, { Suspense, useEffect, useContext } from "react"
import { BlocksContext } from "../context/blocksContext"
import { Menu } from './menu';
import { Header } from './header';
import Services from "./services";
import Location from "./location";
import Excursion from "./excursion";
import Plans from "./plans";
import HowToBuy from "./howToBuy";
import Gallery from "./gallery";
import GetFlat from "./get_flat";
// import HodStr from "./hod_str";
import About from "./about";
import { Contacts } from "./contacts";
import Footer from "./footer";

export const Loader = () => {

    const blocksImports = [
        <Menu />,
        <Header />,
        <Services />,
        <Location />,
        <Excursion />,
        <Plans />,
        <HowToBuy />,
        <Gallery />,
        <GetFlat />,
        // <HodStr />,
        <About />,
        <Contacts />,
        <Footer />
    ]

    const loaded = useContext(BlocksContext)

    const LoadBlock = (block) => {
        return <Suspense fallback={<div>Загрузка...</div>}>{block}</Suspense>
    }

    const generateHtml = () => {
        let toDraw = []
        for (let i = 0; i < loaded.blocks; i++) {
            toDraw.push(LoadBlock(blocksImports[i]))
        }
        return (

            <div className="blocks" data={loaded.menuClick ? "true" : ""}>
                {toDraw.map((block) =>
                    block
                )}
            </div>

        )
    }
    const handleScroll = (event) => {
        if (loaded.blocks < blocksImports.length) {
            loaded.setBlocks(blocksImports.length)
        } else {
            window.removeEventListener('scroll', handleScroll, true);
        }
    }
    useEffect(() => {
        if (loaded.blocks < blocksImports.length) {
            window.addEventListener('scroll', handleScroll, true);
        }
    })
    return generateHtml()

}