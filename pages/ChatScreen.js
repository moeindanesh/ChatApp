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
            <div style={styles.container}>
                <div style={styles.chatContainer}>
                    <aside style={styles.onlineListContainer}>
                        <h2>Online Users</h2>
                    </aside>
                    <section style={styles.chatListContainer}>
                        <MessageList messages={this.state.messages} style={styles.chatList} />
                    </section>
                </div>
            </div>
        );
    }
}


export default ChatScreen;

const styles = {
    container: {
        padding:0,
        margin:0,
        height: '100vh',
        display: 'flex',
        felxDirection: 'column',
        fontFamily: 'Montserrat'
    },
    chatContainer: {
        display: 'flex',
        flex: 1
    },
    onlineListContainer: {
        width: '300px',
        flex: 'none',
        padding: 20,
        backgroundColor: '#2c303b',
        color: 'white'
    },
    chatListContainer: {
        padding: 20,
        width: '85%',
        display: 'flex',
        felxDirection: 'column'
    },
    chatList: {

    }
}