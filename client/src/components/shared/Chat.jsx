import React, { useState } from 'react';

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');

	const handleSendMessage = () => {
		if (newMessage.trim() === '') return;

		const newMessages = [...messages, { text: newMessage, sender: 'user' }];
		setMessages(newMessages);
		setNewMessage('');
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSendMessage();
		}
	};

	return (
		<div className='bg-gray-200 h-auto p-4'>
			<div className='bg-white rounded-lg p-4 shadow-md'>
				<div className='h-60 overflow-y-auto mb-4'>
					{messages.map((message, index) => (
						<div
							key={index}
							className={`mb-2 ${
								message.sender === 'user' ? 'text-right' : 'text-left'
							}`}
						>
							<span
								className={`inline-block px-2 py-1 rounded-lg ${
									message.sender === 'user'
										? 'bg-blue-600 text-white'
										: 'bg-gray-300'
								}`}
							>
								{message.text}
							</span>
						</div>
					))}
				</div>
				<div className='flex'>
					<input
						type='text'
						className='flex-grow border rounded-l-lg p-2'
						placeholder='Type your message...'
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						onKeyUp={handleKeyPress}
					/>
					<button
						className='bg-blue-600 text-white rounded-r-lg p-2'
						onClick={handleSendMessage}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
