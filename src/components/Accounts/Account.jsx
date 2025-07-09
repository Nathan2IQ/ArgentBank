import './Account.css'

function Account({title, amount, description}) {

    return (
        <>
            <h2 className='display-none'>Accounts</h2>

            <section className='account'>
                <div>
                    <h3 className='account__title'>{title}</h3>
                    <p className='account__amount'>{amount}</p>
                    <p className='account__description'>{description}</p>
                </div>
                <div>
                    <button className='view__btn'>View transactions</button>
                </div>
            </section>

        </>
    )
}

export default Account