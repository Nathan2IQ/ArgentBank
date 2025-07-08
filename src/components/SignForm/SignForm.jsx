import { Link } from 'react-router-dom'
import './SignForm.css'

function SignForm() {

    return (
        <main>
            <div className='dark__bg'>
                <section className='signIn__card'>

                    <i class="fa-solid fa-circle-user"></i>
                    <h1>Sign In</h1>

                    <form>

                        <div className='input__wrapper'>
                            <label for='username'>Username</label>
                            <input type='text' id='username'/>
                        </div>

                        <div className='input__wrapper'>
                            <label for='password'>Password</label>
                            <input type='password' id='password'/>
                        </div>

                        <div className='input__remember'>
                            <input type='checkbox' id='remember-me'/>
                            <label for='remember-me'>Remember me</label>
                        </div>

                        <Link to='/user' className='signin__btn'>Sign In</Link>

                    </form>

                </section>
            </div>
        </main>
    )
}

export default SignForm