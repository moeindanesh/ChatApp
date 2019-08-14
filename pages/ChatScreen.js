import Chatkit from '@pusher/chatkit-client';

import MessageList from '../components/MessageList';
import SendMessage from '../components/SendMessage';
import TypingIndicator from '../components/TypingIndicator';
import OnlineList from '../components/onlineList';
import RoomList from '../components/RoomList';

class ChatScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: [],
            usersWhoAreTyping: [],
            joinableRooms: [],
            joinedRooms: []
        }

        this.sendMessage = this.sendMessage.bind(this);
        this.sendTypingEvent = this.sendTypingEvent.bind(this);
        this.roomHandler = this.roomHandler.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    chatProcess(roomId){
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
                currentUser.getJoinableRooms()
                    .then(joinableRooms => {
                        console.log(joinableRooms);
                        console.log(currentUser)
                        this.setState({
                            joinableRooms,
                            joinedRooms: currentUser.rooms
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    })
                 return currentUser.subscribeToRoom({
                    roomId: roomId,
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
                // console.log(currentRoom);
            })
            .catch(error => console.log(error))
    }

    componentDidMount(){
        this.chatProcess('81e6917c-48b0-45bc-8f24-4d408a50dbf4');
    }

    roomHandler(roomId){
        this.setState({
            messages: []
        })
        this.chatProcess(roomId);
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
                        <h2>Rooms</h2>
                        <RoomList rooms={[...this.state.joinedRooms, ...this.state.joinableRooms]} currentRoom={this.state.currentRoom} roomHandler={newRoom => this.roomHandler(newRoom)}/>
                        <h2>Online Users</h2>
                        <OnlineList currentUser={this.state.currentUser} users={this.state.currentRoom.users} />
                    </aside>
                    <section style={styles.chatListContainer}>
                        <MessageList messages={this.state.messages} currentUser={this.state.currentUser} style={styles.chatList} />
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
        width: '250px',
        flex: 'none',
        padding: 20,
        backgroundColor: '#4158d0',
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