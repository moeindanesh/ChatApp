class UsernameForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: '' 
        }

        this.usernameHandler = this.usernameHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    usernameHandler(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.username);
    }

    render(){
        return(
            <div>

                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="/static/images/img-01.png" alt="IMG" />
                            </div>

                            <form className="login100-form validate-form" onSubmit={this.onSubmit}>
                                <span className="login100-form-title">
                                    Ciao Chat
                                </span>

                                <div className="wrap-input100">
                                    <input className="input100" type="text" placeholder="Enter Your Name" onChange={this.usernameHandler} />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-user" aria-hidden="true" />
                                    </span>
                                </div>
                                
                                <div className="container-login100-form-btn">
                                    <input type="submit" className="login100-form-btn" value="login"/>
                                </div>

                                <div className="text-center p-t-12">
                                    
                                    <a className="txt2" href="#">
                                    </a>
                                </div>

                                <div className="text-center p-t-136">
                                    <a className="txt2" href="#">
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
	            </div>
            </div>
        );
    }
}

export default UsernameForm;

const styles = {
    container:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Montserrat',
    },
    form: {

    }
}