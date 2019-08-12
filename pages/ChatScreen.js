import Chatkit from '@pusher/chatkit-client';

import MessageList from '../components/MessageList';

class ChatScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: []
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
            .then(currentUser => {
                 return currentUser.subscribeToRoom({
                    roomId: '9c69f0f7-9280-4265-ae01-4cfcb58be202',
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            })
            .then(currentRoom => {
                this.setState({ currentRoom })
            })
            .catch(error => console.log(error))
    }
    render(){
        return(
            <div>
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}


export default ChatScreen;
