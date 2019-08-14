class OnlineList extends React.Component{

    renderUsers(){
        return(
            <ul>
                {this.props.users.map((user, index) => {
                    if(user.id === this.props.currentUser.id){
                        return(
                            <OnlineListItem key={index} presenceState="online">
                                {user.name} (You)
                            </OnlineListItem>
                        )
                    }
                    return(
                        <OnlineListItem key={index} presenceState={user.presence.state}>
                            {user.name}
                        </OnlineListItem>
                    )
                })}
            </ul>
        )
    }

    render(){
        if(this.props.users){
            return this.renderUsers()
        }else{
            return <p style={{color: '#fff'}}>Loading...</p>
        }
    }
}

export default OnlineList;

class OnlineListItem extends React.Component{
    render(){
        return(
            <li style={styles.li}>
                <div style={{...styles.div, backgroundColor: this.props.presenceState === 'online' ? '#00E676' : '#FFEA00'}} />
                {this.props.children}
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
        paddingBottom: 2
    },
    div: {
        borderRadius: '50%',
        width: 11,
        height: 11,
        marginRight: 10,
        marginLeft:20,
    }
}