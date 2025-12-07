import { useState } from 'react'
import {Chatbot} from 'supersimpledev';
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css';
import dayjs from 'dayjs';


export function ChatInput({chatMessages,setChatMessages}){
        const [inputText, setInputText ] = useState('');

        function saveInputText(event){
          setInputText(event.target.value);
        }
      
        async function sendMessage(){

          setInputText('');

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id:crypto.randomUUID(),
              time:dayjs().valueOf()
            }
          ]

          setChatMessages([
            ...newChatMessages,
            {
              message: <img src= {LoadingSpinner} className='loading-spinner'/>,
              sender: 'robot',
              id:crypto.randomUUID(),
              
            }
          ]);
          

          const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id:crypto.randomUUID(),
              time:dayjs().valueOf()

            }
          ]);

        }

        function handleKeyDown(event){
          if (event.key === 'Enter'){
            sendMessage();
          }
          if (event.key === 'Escape'){
            setInputText('');
          }

        }

        function clearButton(){
        setChatMessages([]);
      }

        return(
          <div className='chat-input-container'>
            <input 
              className='chat-input'
              onKeyDown={handleKeyDown}
              placeholder="Send a message to Chatbot" 
              size="30" 
              onChange = {saveInputText}
              value={inputText}
            />
            <button 
            className='send-button'
            onClick = {sendMessage}
            >Send</button>
            <button 
            onClick={clearButton}
            className = 'clear-button'
            >Clear</button>
          </div>
        );
      }

      
