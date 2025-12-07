import RobotProfileImage from '../assets/robot.png';
import './ChatMessage.css';
import dayjs from 'dayjs';

const UserProfileImage = "https://supersimple.dev/images/profile-1.jpg";


  


export function ChatMessage({message,sender,time}){

        //const message = props.message;
        //const sender = props.sender;
        //const {message, sender} = props;

        /*if (sender === "user"){
          return(
            <div>
              <img src="user.png" width ="50" />
              {message}
            </div>
          );
        } else {
          return(
            <div>
              <img src="robot.png" width ="50" />
              {message}
            </div>
          );
        }
       
        if (sender === "robot"){
          return(
            <div>
              <img src="robot.png" width ="50" />
              {message}
            </div>
          );
        }
        */
        

        return(
          <div className={
            sender === "user" 
              ? "chat-message-user" 
              : "chat-message-robot"
            }>
            {sender ==='robot' && (
              <img src={RobotProfileImage} className="chat-message-profile" />
            ) }
            <div className="chat-message-text">
             {message} {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mm a')}
          </div>
        )}
            </div>
           { sender === 'user' && (
            <img src={UserProfileImage} className="chat-message-profile"  /> 
           )} 
          </div>
        );

        }
