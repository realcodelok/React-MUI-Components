import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import TextLink from '../../components/TextLink';
import { pagePaths } from '../../utls/constants';
import Appbar1 from '../Appbar1';

/*
    NOTE : This page is the main page. When this app will load this page will load first.
        The reference of all other components like different-different of navbars and components will be here and with their images.

*/
export default function MainPage() {
	return (
		<>
			<Appbar1 />
			<Container
				disableGutters
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: '40px',
					marginTop: '66px',
				}}
			>
				<Typography variant="h2" align="center">
					Welcome to the CODELOK components!
				</Typography>

				<Box style={{ width: '100%', marginTop: '40px' }}>
					<TextLink text="Appbar1" url={pagePaths.appbar1} color="#000" />
				</Box>
			</Container>
		</>
	);
}
