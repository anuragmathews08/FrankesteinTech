import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <div>
                <section>
                    <h2>Sign In To Frankestien Tech</h2>
                    <form>
                        <input type="email" placeholder="Email address" required/>
                        <input type="password" placeholder="Password" required/>
                        <input type="submit" value="Sign In"/>
                    </form>
                    <p>Not a member yet? <a href="#" alt="register page link">Register with your email</a></p>
                    <h1>OR</h1>
                </section>
            </div>
        );
    }
}


export default Login;