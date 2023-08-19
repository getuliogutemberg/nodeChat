import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('ced49730-4632-4088-9ff5-f51317295a3f',props.user.username,props.user.secret);
    return (
    <div style={{height:'100vh'}}>   
        <MultiChatWindow {...chatProps} /> 
        <MultiChatSocket {...chatProps} style={{height:'100%'}}/>
    </div>
    )
}

export default ChatsPage