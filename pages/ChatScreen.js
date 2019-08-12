class ChatScreen extends React.Component{
    render(){
        return(
            <div>
                <h1>Chat</h1>
                <p>hello, {this.props.username}</p>
            </div>
        );
    }
}


export default ChatScreen;