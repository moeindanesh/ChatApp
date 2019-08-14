import ReactDOM from 'react-dom';
class MessageList extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidUpdate(){

        const node = ReactDOM.findDOMNode(this);
        node.scrollTop = node.scrollHeight;
    }
    render(){
        
        return(
            <div style={{...this.props.style, ...styles.container}}>
                <ul style={styles.ul}>
                    {this.props.messages.map((message, index) => (
                        <li key={index} style={styles.li}>
                            <div style={styles.messageBox}>
                                <span style={{...styles.senderUsername, float: this.props.currentUser.id === message.senderId ? 'right' : 'left'}}>{message.senderId}</span>
                                <div style={styles.messageContainer}>
                                    <span style={{...styles.message, float: this.props.currentUser.id === message.senderId ? 'right' : 'left'}}>{message.text}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* <div style={{...styles.newMessage, display: this.state.newMessageDisp}}>new message</div> */}
            </div>
        )
    }
}

export default MessageList;

const styles = {
    container: {
        overflowY: 'scroll',
        flex: 2
    },
    ul: {
        listStyle: 'none'
    },
    li: {
        display: 'block',
        position: 'relative',
        marginTop: 13,
        marginBottom: 13,
    },
    messageBox: {
        width:'100%',
        display: 'table',
    },
    senderUsername: {
        fontWeight: 'bold',
        color: '#607D8B',
        marginRight: 15
    },
    messageContainer: {
        marginTop:25
    },
    message: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 25,
        padding: '5px 20px',
        borderRadius: 10,
        background: '#4158d0',
        color: '#fff'
    },
    newMessage: {
        fontSize: 15,
        padding: '5px 20px',
        borderRadius: 10,
        background: '#AA00FF',
        color: '#fff',
        position: 'absolute',
        bottom: 100,
        right: 70,
        zIndex: 9999,
    }
}
