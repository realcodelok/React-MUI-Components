import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	textLink: (props) => ({
		color: props && props.color ? props.color : theme.palette.action.active,
		fontSize: props && props.fontSize ? props.fontSize : '16px',
		textTransform: props && props.textTransform ? props.textTransform : '',
		'&:hover': {
			color: props && props.color ? props.color : theme.palette.primary.dark,
			textDecoration: 'none',
		},
	}),
}));
