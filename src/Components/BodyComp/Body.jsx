import React from 'react'
import './Body.css'

const Body = () => {
    return (
        <section id="sectionBody">
            <article>
                <div id="contentBlock">
                    <h1>Unlimited movies, TV</h1>
                    <h1>shows and more.</h1>
                    <h5>Watch anywhere. Cancel anytime.</h5>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form>
                        <input type="search" name="search" id="search" placeholder="Email address" />
                        <button>Get Started</button>
                    </form>
                </div>
            </article>
        </section>
    )
}

export default Body
