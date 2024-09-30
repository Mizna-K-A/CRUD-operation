import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <div className="d-flex m-2" style={{ backgroundColor: 'pink' }}>
                <h1><i class="fa-solid fa-book"></i>ShelfSpace</h1>
            </div>
            <section className='d-flex flex-column justify-content-center align-items-center' style={{height:'70vh'}}>
                <p className='fs-1'>"A room without books is like a body without a soul."</p>
                <Link to={'/home'} className="btn fs-3" style={{ backgroundColor: 'pink'}}>GetStart</Link>
            </section>


        </>
    )
}

export default Landing
