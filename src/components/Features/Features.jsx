import './Features.css'
import Chat from '../../assets/img/icon-chat.png'
import Money from '../../assets/img/icon-money.png'
import Security from '../../assets/img/icon-security.png'

function Features() {

    return (
        <section className='features'>
            <h2 className='display-none'>Features</h2>

            <div className='feature__item'>
                <img src={Chat} alt="Icône d'échange de messages" className='feature__icon'/>
                <h3 className='feature__item__title'>You are our #1 priority</h3>
                <p>Need to talk to a representative? 
                    You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
                </p>
            </div>

            <div className='feature__item'>
                <img src={Money} alt="Icône d'argent" className='feature__icon'/>
                <h3 className='feature__item__title'>More savings means higher rates</h3>
                <p>The more you save with us, the higher your interest rate will be !</p>
            </div>

            <div className='feature__item'>
                <img src={Security} alt="Icône d'un bouclier" className='feature__icon'/>
                <h3 className='feature__item__title'>Security you can trust</h3>
                <p>We use top of the line encryption to make sure your data and money is always safe.</p>
            </div>

        </section>
    )
}

export default Features