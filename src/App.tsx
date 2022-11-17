import './App.scss';
import {
	NavLink,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { PageDashboard } from './components/PageDashboard';
import { PageJobs } from './components/PageJobs';
import { PageSkills } from './components/PageSkills';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
	return (
		<div className="App">
			<AppBar>
				<Toolbar>
					<Typography variant="h6" color="inherit" component="div">
						
						<nav>
						<span className="navHeader">Get a Job</span>
							<NavLink to="/dashboard">Dashboard</NavLink>
							<NavLink to="/jobs">Jobs</NavLink>
							<NavLink to="/skills">Skills</NavLink>
						</nav>
					</Typography>
				</Toolbar>
			</AppBar>

			<Routes>
				<Route path="/dashboard" element={<PageDashboard />} />
				<Route path="/jobs" element={<PageJobs />} />
				<Route path="/skills" element={<PageSkills />} />
				<Route
					path="/"
					element={<Navigate to="/dashboard" replace />}
				/>
			</Routes>
		</div>
	);
}

export default App;
