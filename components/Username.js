import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'


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

                <div class="limiter">
                    <div class="container-login100">
                        <div class="wrap-login100">
                            <div class="login100-pic js-tilt" data-tilt>
                                <img src="/static/images/img-01.png" alt="IMG" />
                            </div>

                            <form class="login100-form validate-form" onSubmit={this.onSubmit}>
                                <span class="login100-form-title">
                                    Ciao Chat
                                </span>

                                <div class="wrap-input100">
                                    <input class="input100" type="text" placeholder="Enter Your Name" onChange={this.usernameHandler} />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                </div>
                                
                                <div class="container-login100-form-btn">
                                    <input type="submit" class="login100-form-btn" value="login"/>
                                </div>

                                <div class="text-center p-t-12">
                                    
                                    <a class="txt2" href="#">
                                    </a>
                                </div>

                                <div class="text-center p-t-136">
                                    <a class="txt2" href="#">
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