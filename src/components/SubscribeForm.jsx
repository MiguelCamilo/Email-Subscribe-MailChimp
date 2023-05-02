import { useState } from "react";

const SubscribeForm = () => {
    const [firstName, setfirstName] = useState('')
	const [lastName, setLastName] = useState('')

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
								className="object-cover rounded-xl h-80 md:h-64 md:rounded-l-xl transform hover:scale-105 hover:rounded-xl duration-500"
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
								<form action="/" method="post">
									<div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
										{/* when reading place holder class what it does it puts the placeholder text in the center and medium screens and higher the text that is typed is moved to the left and also the place holder text */}
                                        <input
											type="name"
											placeholder="First Name"
											className="p-2 px-4 text-center text-white text-xs bg-zinc-800 border border-zinc-600 hover:border-lime-300 duration-500 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none focus:placeholder:text-zinc-800 rounded-md"
										/>
                                        <input
											type="name"
											placeholder="Last Name"
											className="p-2 px-4 text-center text-white text-xs bg-zinc-800 border border-zinc-600 hover:border-lime-300 duration-500 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none focus:placeholder:text-zinc-800 rounded-md"
										/>
										<input
											type="text"
											placeholder="Email"
											className="p-2 px-4 text-center text-white text-xs bg-zinc-800 border border-zinc-600 hover:border-lime-300 duration-500 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none focus:placeholder:text-zinc-800 rounded-md"
										/>
										<a href="./subscribe.html">
											<button
												type="button"
												className="flex-col md:flex-row bg-lime-500 text-zinc-800 rounded-md text-xs items-center px-5 py-3 md:p-3 hover:text-white hover:bg-lime-700 duration-500 w-full"
											>
												Subscribe
											</button>
										</a>
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
