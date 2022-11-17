import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5556';

interface IJob {
	id: number,
	title: string;
	company: string;
	url: string;
	skills: string;
	publicationDate: string;
	status: string;
}

export const PageJobs = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		(async () => {
			setJobs((await axios.get(`${apiUrl}/jobs`)).data);
		})();
	}, []);

	return (
		<div className="pageJobs">
			<p>There are {jobs.length} jobs:</p>
			<div className="jobs">
				<h3>Jobs</h3>
				<ul>
					{jobs.map((job: IJob) => {
						return <li>{job.title}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};
