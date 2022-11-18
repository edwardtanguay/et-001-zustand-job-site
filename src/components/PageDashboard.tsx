import { useState } from 'react';
import Button from '@mui/material/Button';
import { AccessAlarm, PhotoCamera, Send } from '@material-ui/icons';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const PageDashboard = () => {
	const [message, setMessage] = useState('Please click something, etc.');
	const [formData, setFormData] = useState({
		title: 'ttt',
		company: 'ccc',
		url: 'uuu',
		description: 'ddd',
		publicationDate: '2022-11-17',
	});

	const handleButtonClick = (text: string) => {
		setMessage(text);
	};

	const handleChangeFormField = (obj: any, fieldName: string) => {
		if (fieldName === 'postingDate') {
			const chosenDate = obj;
			const chosenDateIso = chosenDate.toISOString().split('T')[0];
			formData.publicationDate = chosenDateIso;
		}
		setFormData({ ...formData });
	};

	return (
		<div className="page pageDashboard">
			<p className="message">
				Message: <span>{message}</span>
			</p>
			<Button
				variant="text"
				onClick={() => handleButtonClick('text button')}
			>
				Hello
			</Button>
			<Button
				variant="outlined"
				onClick={() => handleButtonClick('outlined button')}
			>
				Hello
			</Button>
			<Button
				variant="contained"
				onClick={() => handleButtonClick('contained button')}
			>
				Hello
			</Button>
			<Button
				variant="contained"
				disabled
				onClick={() => handleButtonClick('disabled contained button')}
			>
				Hello
			</Button>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => handleButtonClick('secondary color button')}
			>
				Secondary
			</Button>
			<Button
				variant="contained"
				color="error"
				onClick={() => handleButtonClick('error color button')}
			>
				Error
			</Button>
			<hr />
			<Button
				variant="contained"
				size="small"
				onClick={() => handleButtonClick('disabled contained button')}
			>
				small
			</Button>
			<Button
				variant="contained"
				size="medium"
				onClick={() => handleButtonClick('disabled contained button')}
			>
				medium
			</Button>
			<Button
				variant="contained"
				size="large"
				onClick={() => handleButtonClick('disabled contained button')}
			>
				large
			</Button>
			<hr />
			<Button
				variant="contained"
				color="secondary"
				startIcon={<AccessAlarm />}
				onClick={() => handleButtonClick('secondary color button')}
			>
				Set Alarm
			</Button>
			<Button
				variant="contained"
				color="primary"
				endIcon={<Send />}
				onClick={() => handleButtonClick('secondary color button')}
			>
				Send
			</Button>
			<hr />
			<PhotoCamera color="primary" className="photoCamera" />
			<hr />
			<form>
				<TextField
					fullWidth
					label="Job title"
					margin="normal"
					placeholder="Enter job title"
					value={formData.title}
				/>
				<TextField
					fullWidth
					label="Company"
					margin="normal"
					placeholder="Enter the name of the company"
					value={formData.company}
				/>
				<TextField
					id="outlined-multiline-static"
					fullWidth
					label="Description"
					margin="normal"
					multiline
					rows={4}
					placeholder="Enter Description of job as JSON text block"
					value={formData.company}
				/>
				<DatePicker
					value={formData.publicationDate}
					selected={new Date()}
					onChange={(date: Date) =>
						handleChangeFormField(date, 'postingDate')
					}
					className="datePicker"
				/>
			</form>
		</div>
	);
};
