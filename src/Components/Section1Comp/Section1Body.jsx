import React from 'react'
import Section1 from './Section1'
import './Section1.css'
import Section1Right from './Section1Right';

const Section1Body = () => {
    return (
        <section>
            <article>
                <div>
                    <Section1/>
                    <Section1Right/>
                </div>
            </article>
        </section>
    )
}

export default Section1Body
