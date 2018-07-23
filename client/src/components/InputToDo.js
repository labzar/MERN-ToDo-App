import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import { InputLabel, Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
	root: {
		position: 'relative',
		overflow: 'hidden',
	},
	appFrame: {
		height: 360,
		backgroundColor: theme.palette.background.paper,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	button: {
		marginBottom: theme.spacing.unit,
	},
	margin: {
		marginTop: theme.spacing.unit*8,
		marginBottom: theme.spacing.unit*2,
	},
	fab: {
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 2,
	}
});

class InputToDo extends Component {
	state = {
		open: false,
	};

	handleClick = () => {
		const {value} = document.getElementById('todo-input');
		console.log("new todo: ", value);
		this.setState({ open: true });
	}

	render() {
		const { classes } = this.props;
		
		return (
				<FormControl fullWidth className={classes.margin}>
					<InputLabel htmlFor="todo-input">Tape your ToDo Plz :)</InputLabel>
					<Input id="todo-input" />
				</FormControl>
		);
	}
}

InputToDo.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputToDo)
