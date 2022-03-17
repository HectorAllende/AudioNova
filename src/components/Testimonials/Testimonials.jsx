import React from 'react'
import testimonials from '../../img/bg-footer.jpg'

const Testimonials = () => {
    return (
        <div className='testimonials' >
            <div className='testimonials_text contenedor'>
                <h1>AudioNova</h1>
                <h2>La tua rete di audioprotesisti ed esperti dell'udito al tuo servizio.</h2>
                <p>I nostri consulenti e professionisti dell'udito sono a tua disposizione negli oltre 160 centri AudioNova in tutta Italia per fornirti una consulenza professionale sulle soluzioni del nostro assortimento e su tutti prodotti di protezione dell’udito o di ausilio all’ascolto. Qualunque sia il motivo per cui ti rivolgi a un centro AudioNova, cercheremo insieme una soluzione su misura per te.</p>
            </div>
            <figure>
                <img src={testimonials} alt="testimonials" className='test' />
            </figure>
        </div>
    );
}

export default Testimonials;