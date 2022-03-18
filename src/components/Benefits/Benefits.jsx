import React from 'react'
import open from '../../img/360-icon.svg'
import eye from '../../img/eye-icon.svg'
import filter from '../../img/filter-icon.svg'
import speech from '../../img/speech-icon.svg'

const Benefits = () => {
    return (
        <div className='benefits'>
            <div className='contenedor benefits_card'>
                <div className='benefits_content'>
                    <div className='benefits_icon'>
                        <figure>
                            <img src={eye} alt="icon" className='icon' />
                        </figure>
                    </div>
                    <div className='contenedor_text'>
                        <h2 className='benefits_text'>Nearly invisible</h2>
                    </div>
                </div>
                <div className='benefits_content'>
                    <div className='benefits_icon'>
                        <figure>
                            <img src={speech} alt="icon" className='icon' />
                        </figure>
                    </div>
                    <div className='contenedor_text cont_bene'>
                    <h2 className='benefits_text cont_big'>Unparalleled speech recognition</h2> 
                        <h2 className='benefits_text cont'>Unparalleled</h2>
                        <h2 className='benefits_text cont'>speech recognition</h2>
                    </div>
                </div>
                <div className='benefits_content'>
                    <div className='benefits_icon'>
                        <figure>
                            <img src={open} alt="icon" className='icon' />
                        </figure>
                    </div>
                    <div className='contenedor_text'>
                        <h2 className='benefits_text'>360° open sound</h2>
                    </div>
                </div>
                <div className='benefits_content'>
                    <div className='benefits_icon'>
                        <figure>
                            <img src={filter} alt="icon" className='icon' />
                        </figure>
                    </div>
                    <div className='contenedor_text'>
                        <h2 className='benefits_text'>Significantly reduces background noise</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;