import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	appbar: {
		background: `linear-gradient(186deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
		height: theme.dimensions.headerHeight,
	},
	togglerButton: {
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
		'& svg': {
			fontSize: '24px',
		},
	},
	show: {
		display: 'block',
	},
	hide: {
		display: 'none',
	},
	desktopMenu: {
		display: 'block',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	mobileMenuSection: {
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},
	mobileMenu: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: theme.dimensions.headerHeight,
		zIndex: '1600',
		boxShadow: theme.shadows[3],
		background: theme.palette.primary.light,

		'& div': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			'& a': {
				color: `${theme.palette.secondary.main} !important`,
				padding: '10px',
				paddingLeft: '60px',
				margin: '0 !important',
				display: 'block',
				width: '100%',
				'&:hover': {
					background: theme.palette.action.hover1,
					fontWeight: 'bold',
				},
			},
			'& a:first-child': {
				paddingTop: '20px',
			},
		},
	},
}));
