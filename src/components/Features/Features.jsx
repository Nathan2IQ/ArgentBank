import './Features.css'

function Features({ image, title, description }) {
    return (
        <>

            <h2 className='display-none'>Features</h2>

            <div className='feature__item'>
                <img src={image} alt="Icône d'échange de messages" className='feature__icon'/>
                <h3 className='feature__item__title'> {title} </h3>
                <p> {description} </p>
            </div>

        </>
    )
}

export default Features