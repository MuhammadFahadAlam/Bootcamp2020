import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Button } from '@material-ui/core';
import Navbar from './components/Navbar';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 15,
		backgroundColor: '#efefef',
	},

	paper: {
		width: 600,
		height: 500,
		backgroundColor: 'light blue',
		margin: '0 auto',
		textAlign: 'center',
		padding: 15,
	},

	input: {
		width: '90%',
		margin: 10,
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Navbar />
			<br/>
			<br/>
			<BarChart />
			<br />
			<br/>
			<PieChart />
			<br />
			<br/>
			<Paper elevation={3} className={classes.paper}>
				<h1>Login</h1>
				<form noValidate autoComplete='off'>
					<TextField
						id='standard-basic'
						label='Email'
						className={classes.input}
					/>
					<TextField
						id='standard-basic'
						label='Password'
						className={classes.input}
					/>
					<Button
						variant='contained'
						color='secondary'
						className={classes.input}
					>
						Login
					</Button>
				</form>
			</Paper>
		</div>
	);
}

export default App;
