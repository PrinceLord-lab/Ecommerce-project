import { useState, useEffect } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';

  
      

      

       

function App(){
        const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [])  ;
  //        const [chatMessages,setChatMessages] = array;
          // Alternatively, using array destructuring directly:
//        const chatMessages = array[0];
//      const setChatMessages = array[1];

        useEffect(() => {
          localStorage.setItem('messages',JSON.stringify(chatMessages))
        })

        useEffect(() =>{
          Chatbot.addResponses({
            'goodbye': 'Goodbye. have a great day!',
            'give me a unique id': function(){
              return `Sure Here's a unique ID: ${crypto.randomUUID()}`
            },
            'who is Prince Lord': "Prince Lord Mendoza is a senior computer engineering at Wesleyan University-Philippines" 
          })
        },[])

        return(
        <div className='app-container'>
         
          {chatMessages.length === 0  && (
            <p className='welcome-message'>Welcome to the chatbot project! Send a message using the textbox below.</p>
          )}

         <ChatMessages 
          chatMessages={chatMessages}  
         /> 

         <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
         />
        </div>
        );
      }


export default App
