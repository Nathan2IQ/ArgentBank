import './Banner.css'
import bannerImg from '../../assets/img/bank-tree.jpeg'

function Banner() {
    
    return (
        <section className='banner'>

            <img src={bannerImg} alt="Plante qui pousse depuis un pot d'économies" className='bannerImg'/>
            
            <article className='banner__content'>
                <h2 className='display-none'>Promoted Content</h2>
                <p className='content__txt'>No fees.</p>
                <p className='content__txt'>No minimum deposit.</p>
                <p className='content__txt'>High interest rates.</p>
                <p className='content__subtxt'>Open a savings account with Argent Bank today !</p>
            </article>

        </section>
    )
}

export default Banner