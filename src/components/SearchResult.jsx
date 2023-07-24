import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

const SearchResults = () => {
	const { query } = useParams();
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch(`https://api.github.com/search/users?q=${query}`)
			.then(response => response.json())
			.then(data => {
				setUsers(data.items);
			});
	}, [query]);

	return (
		<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{users.map(user => (
				<div key={user.id} className="border p-4 rounded flex flex-col items-center">
					<img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-4" />
					<Link to={`/user/${user.login}`} className="text-blue-500">{user.login}</Link>
				</div>
			))}
		</div>
	);
}

export default SearchResults;
