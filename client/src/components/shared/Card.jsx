import React from 'react';

const Card = ({ title, content }) => {
	return (
		<div class='max-w-md bg-white rounded-xl overflow-hidden shadow-lg m-2 flex'>
			{/* <div class='w-1/3'>
				<img class='w-full' src='image.jpg' alt='Card Image' />
			</div> */}
			<div class=' px-6 py-4'>
				<div class='font-bold text-xl mb-2'>{title}</div>
				<p class='text-gray-700 text-base'>{content}</p>
				<div class='mt-4 flex'>
					<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						Tag1
					</span>
					<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
						Tag2
					</span>
					<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
						Tag3
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
