import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import './Header.css'

const Header = () => {
    return (
        <section id="sectionBlock">
            <article>
                <div id="headerBlock">
                    <Logo />
                    <Menu />
                </div>
            </article>
        </section>
    )
}

export default Header
