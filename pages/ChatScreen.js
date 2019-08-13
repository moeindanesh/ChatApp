import Chatkit from '@pusher/chatkit-client';

import MessageList from '../components/MessageList';
import SendMessage from '../components/SendMessage';
import TypingIndicator from '../components/TypingIndicator';
import OnlineList from '../components/onlineList';

class ChatScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: [],
            usersWhoAreTyping: []
        }

        this.sendMessage = this.sendMessage.bind(this);
        this.sendTypingEvent = this.sendTypingEvent.bind(this);
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
                this.setState({ currentUser });
                // currentUser.getJoinableRooms()
                //     .then(rooms => {
                //         console.log(currentUser);
                //         console.log(rooms);
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     })
                 return currentUser.subscribeToRoom({
                    roomId: '81e6917c-48b0-45bc-8f24-4d408a50dbf4',
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        },
                        onUserStartedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name]
                            })
                        },
                        onUserStoppedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: this.state.usersWhoAreTyping.filter( username => username !== user.name)
                            })
                        },
                        onPresenceChange: () => this.forceUpdate()
                    }
                })
            })
            .then(currentRoom => {
                this.setState({ currentRoom });
                console.log(currentRoom);
            })
            .catch(error => console.log(error))
    }

    sendMessage(text){
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
    }

    sendTypingEvent(){
        this.state.currentUser
            .isTypingIn( { roomId: this.state.currentRoom.id})
            .catch(error => console.log(error));
    }

    render(){
        return(
            <div style={styles.container}>
                <div style={styles.chatContainer}>
                    <aside style={styles.onlineListContainer}>
                        <h2>Online Users</h2>
                        <OnlineList currentUser={this.state.currentUser} users={this.state.currentRoom.users} />

                        {/* <h2>Rooms</h2>
                        #{this.state.currentRoom.name} */}
                    </aside>
                    <section style={styles.chatListContainer}>
                        <MessageList messages={this.state.messages} style={styles.chatList} />
                        <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
                        <SendMessage onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
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
        flexDirection: 'column'
    },
    chatList: {

    }
}