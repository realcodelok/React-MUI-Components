import { Box } from '@material-ui/core';
import React from 'react';
import { pagePaths } from '../../utls/constants';
import TextLink from '../TextLink';

export default function HeaderMenus(props) {
	const links = [
		{
			text: 'HOME',
			url: pagePaths.home,
		},
		{
			text: 'LOGIN',
			url: pagePaths.login,
		},
		{
			text: 'REGISTER',
			url: pagePaths.register,
		},
		{
			text: 'LOGOUT',
			url: pagePaths.logout,
		},
	];
	return (
		<Box className="flex-around align-center">
			{links.map((link, index) => {
				return (
					<TextLink
						text={link.text}
						url={link.url}
						isActive={true}
						fontSize="14px"
						key={index}
						className="mlr10"
					/>
				);
			})}
		</Box>
	);
}
