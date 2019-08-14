class RoomList extends React.Component{
    constructor(props){
        super(props);
    }

    renderRooms(){
        return(
            <ul>
                {this.props.rooms.map((room, index) => {
                    if(this.props.currentRoom.id === room.id){
                        return <RoomListItem key={index} status="selected" roomId={room.id} roomHandler={this.props.roomHandler}>#  {room.name}</RoomListItem>
                    }else{
                        return <RoomListItem key={index} status="notSelected" roomId={room.id} roomHandler={this.props.roomHandler}>#  {room.name}</RoomListItem>
                    }
                })}
            </ul>
        )
    }
    render(){
        console.log(this.props.rooms)
        if(this.props.rooms){
            return this.renderRooms()
        }else{
            return <p style={{color: '#fff'}}>Loading...</p>
        }
    }
}

export default RoomList;

class RoomListItem extends React.Component{

    constructor(props){
        super(props);
        this.roomHandler = this.roomHandler.bind(this);
    }
    roomHandler(){
        this.props.roomHandler(this.props.roomId)
    }
    render(){
        return(
            <li style={{...styles.li, color: this.props.status === "selected"? '#fff' : '#78909C'}} onClick={this.roomHandler}>
                <div style={styles.div}>{this.props.children}</div>
            </li>
        )
    }
}

const styles = {
    li: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 2,
        paddingBottom: 2,
        cursor: 'pointer'
    },
    div: {
        marginLeft: 20
    }
}