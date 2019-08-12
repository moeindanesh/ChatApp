import Layout from '../components/Layout';
import UsernameForm from '../components/Username';
import ChatScreen from './ChatScreen';

class Index extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            currentScreen: 'usernameScreen'
        }

        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
    }

    onUsernameSubmitted(username){
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username})
        }).then(response => {
            // console.log(response.status); //201 => created  200 => exists
            this.setState({
                currentUsername: username,
                currentScreen: 'chatScreen'
            })
        }).catch(error => {
            console.log(error);
        })
    }
    render(){

        if(this.state.currentScreen === 'usernameScreen'){
            return(
                <Layout>
                    <UsernameForm onSubmit={this.onUsernameSubmitted}/>
                </Layout>
            );
        }else if(this.state.currentScreen === 'chatScreen'){
            return(
                <Layout>
                    <ChatScreen username={this.state.currentUsername}/>
                </Layout>
            );
        }
    }
}

export default Index;