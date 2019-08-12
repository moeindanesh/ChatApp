import Chatkit from '@pusher/chatkit-client';

class ChatScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentUser: {}
        }
    }

    componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:a6018a7d-1e5b-4ce3-a3dc-44381bbde559',
            userId: this.props.username,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:3001/authenticate'
            })
        })

        chatManager
            .connect()
            .then(currentUser => this.setState({ currentUser }))
            .catch(error => console.log(error))
    }
    render(){
        return(
            <div>
                <h1>Chat</h1>
            </div>
        );
    }
}


export default ChatScreen;