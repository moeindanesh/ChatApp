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
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="enter your username" onChange={this.usernameHandler} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default UsernameForm;