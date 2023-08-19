import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('ced49730-4632-4088-9ff5-f51317295a3f',props.user.username,props.user.secret);
    return (
    <div style={{height:'100vh'}}>   
        {/* <MultiChatWindow {...chatProps} /> 
        <MultiChatSocket {...chatProps} style={{height:'100%'}}/> */}
        <PrettyChatWindow 
            projectId='ced49730-4632-4088-9ff5-f51317295a3f'
            style={{height:'100%'}}
            secret={props.user.secret}
            username={props.user.username}
        />
    </div>
    )
}

export default ChatsPage