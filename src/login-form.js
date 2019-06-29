import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    emailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    passChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    submit(event) {
        event.preventDefault();
        alert(`Email: ${this.state.email} \nPassword: ${this.state.password}`);
    }

    render() {
        return(
            <div className="login-form">
                <section>
                    <div className="login-content">
                        <h2>Sign In To Frankestien Tech</h2>
                        <form onSubmit={this.submit}>
                            <input type="email" className="email" placeholder="Email address" value={this.state.email} onChange={this.emailChange} required/>
                            <input type="password" className="password" placeholder="Password" value={this.state.password} onChange={this.passChange} required/>
                            <input type="submit" value="Sign In"/>
                        </form>
                        <p className="register">Not a member yet? <a href="#" alt="register page link">Register with your email</a></p>
                        <h1>OR</h1>
                    </div>
                </section>
            </div>
        );
    }
}


export default Login;