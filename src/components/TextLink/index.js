import { Link } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles/textLink';

export default function TextLink(props) {
	const classes = useStyles(props);
	return (
		<Link href={props.url} className={`${classes.textLink} ${props.className}`}>
			{props.text}
		</Link>
	);
}
