import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
	const { username } = useParams();
	const [userDetails, setUserDetails] = useState(null);
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}`)
			.then(response => response.json())
			.then(data => {
				setUserDetails(data);
			});

		fetch(`https://api.github.com/users/${username}/repos`)
			.then(response => response.json())
			.then(data => {
				setRepos(data);
			});
	}, [username]);

	return userDetails ? (
		<div className="mt-8 flex flex-col items-center">
			<h2 className="text-2xl mb-4">Detalji korisnika {username}:</h2>
			<img src={userDetails.avatar_url} alt="User avatar" className="w-24 h-24 rounded-full mb-4"/>
			<p className="text-xl mb-2">{userDetails.name}</p>
			<p className="text-sm mb-2">{userDetails.bio}</p>
			<p className="text-sm mb-2">{userDetails.location}</p>
			<h3 className="text-lg mb-4">Repozitoriji:</h3>
			<ul>
				{repos.map(repo => (
					<li key={repo.id} className="mb-2">
						<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">{repo.name}</a>
					</li>
				))}
			</ul>
		</div>
	) : null;
}

export default UserDetails;
