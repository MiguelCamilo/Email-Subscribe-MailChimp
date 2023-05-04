// import { useState } from 'react';
import PropTypes from 'prop-types';

const Inputs = ({ type, placeholder }) => {
	// const [firstName, setfirstName] = useState('')
	// const [lastName, setLastName] = useState('')

    Inputs.propTypes = {
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
    };

	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				className="p-2 px-4 text-center text-white text-xs bg-zinc-800 border border-zinc-600 hover:border-lime-300 duration-500 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none focus:placeholder:text-zinc-800 rounded-md"
			/>
		</>
	);
};

export default Inputs;
