import React from 'react'
import Stepper from './Stepper';
import Formulario from './Formulario';

const Header = () => {
    return (
        <div className='header'>
            <div className='principal contenedor'>
                <div className='text'>
                    <h1>Rispondi alle domande sotto</h1>
                    <p>Per sapere se puoi usufruire di un test dell'udito gratuito</p>
                </div>
                <div className='stepper'>
                    <Stepper />
                </div>
                <Formulario/>
            </div>
        </div>
    );
}
export default Header;