import { Container, Typography } from '@material-ui/core';
import React from 'react';

/*
    NOTE : This page is the main page. When this app will load this page will load first.
        The reference of all other components like different-different of navbars and components will be here and with their images.

*/
export default function MainPage() {
	return (
		<Container disableGutters>
			<Typography>
				Welcome to the <b>CODELOK</b> components!
			</Typography>
		</Container>
	);
}
