import React from 'react'

const Formulario = () => {
    return (
        <div className='form'>
            <form action="#" className='group'>
                <div className='page'>
                    <p>1 / 6</p>
                </div>
                <div className='contents'>
                    <p className='title_form'>What is your age?</p>
                    <div className='buttons'>
                        <input type="button" value="Under 45" className='button' />
                        <input type="button" value="46-55" className='button' />
                        <input type="button" value="56-65" className='button' />
                        <input type="button" value="65+" className='button' />
                    </div>
                </div>
            </form>
            <div className="border"></div>
            <div className="border_principal"></div>
        </div>
    );
}

export default Formulario;