class MessageList extends React.Component{
    render(){
        return(
            <div style={{...this.props.style, ...styles.container}}>
                <ul style={styles.ul}>
                    {this.props.messages.map((message, index) => (
                        <li key={index} style={styles.li}>
                            <div>
                                <span style={styles.senderUsername}>{message.senderId}</span>
                                <p style={styles.message}>{message.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
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
        marginTop: 13,
        marginBottom: 13
    },
    senderUsername: {
        fontWeight: 'bold'
    },
    message: {
        fontSize: 15,
        marginLeft: 10
    }
}