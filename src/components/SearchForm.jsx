import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
	const [username, setUsername] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/search/${username}`);
	}

	return (
		<form onSubmit={handleSubmit} className="flex justify-center mt-8">
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Unesite GitHub username"
				className="px-4 py-2 mr-2 border rounded"
			/>
			<button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Pretraži</button>
		</form>
	);
}

export default SearchForm;
