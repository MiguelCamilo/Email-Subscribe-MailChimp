import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import Inputs from '../Inputs';

const SubscribeForm = () => {
	const [firstname, setfirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const clearInputs = () => {
		setfirstName('')
		setLastName('')
		setEmail('')
	}

	const handleAddUser = async (e) => {
		e.preventDefault();

		const newUser = {
			firstname,
			lastname,
			email,
		};

		try {
			const response = await fetch(`http://localhost:3000/account-exports`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
			});

			if (response.ok) {
				const data = await response.json();
				setSuccess(true);
				setIsLoading(true);
				console.log(data);
			}
			
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
		clearInputs()

		setTimeout(() => {
			setIsLoading(false);
			setSuccess(false);
		},2000)
	};

	return (
		<>
			<>
				{/* Background Container */}
				<div className="flex items-center justify-center h-screen bg-zinc-700">
					{/* card */}
					<div className="bg-zinc-800 p-5 md:p-3 mx-6 rounded-2xl">
						{/* flex container / container within the bg container */}
						<div className="flex flex-col md:flex-row rounded-l-xl">
							{/* image  */}
							<img
								src="/img/image.jpg"
								alt=""
								className="object-cover rounded-xl h-80 md:h-[25rem] md:rounded-l-xl transform hover:scale-105 hover:rounded-xl duration-500"
							/>
							{/* content */}
							<div className="p-6 md:p-12">
								<h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
									Get diet and fitness tips in your inbox
								</h2>
								{/* leading is the spacing between lines and tracking is between letters */}
								<p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
									Eat better and exercise better. Sign up for the Diet &amp;
									Fitness newsletter.
								</p>
								{/* input and button */}
								<form onSubmit={handleAddUser}>
									<div className="flex flex-col mt-5 space-y-4 md:space-y-4">
										<Inputs
											value={firstname}
											onChange={(e) => setfirstName(e.target.value)}
											type="text"
											placeholder="First Name"
											required
										/>
										<Inputs
											value={lastname}
											onChange={(e) => setLastName(e.target.value)}
											type="text"
											placeholder="Last Name"
											required
										/>
										<Inputs
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											type="email"
											placeholder="Email"
											required
										/>

										<button
											type="submit"
											className="bg-lime-500 text-zinc-800 rounded-md text-xs items-center px-5 py-3 md:p-3 hover:text-white hover:bg-lime-700 duration-500 w-full"
										>
											{isLoading ? <AiOutlineLoading3Quarters className='flex items-center w-full animate-spin' /> : <p>Subscribe</p> }
										</button>		
										<div className="">
											{success && (
												<p className="text-xs text-center text-lime-500 transition duration-150">
													Thank you for subscribing!
												</p>
											)}											
										</div>								
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		</>
	);
};

export default SubscribeForm;
