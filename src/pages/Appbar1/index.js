import { AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles/appbar1';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HeaderMenus from '../../components/HeaderMenus';

export default function Appbar1(props) {
	const [isMobileMenuOpen, handleMobileMenuOpen] = React.useState(false);
	const classes = useStyles();
	return (
		<AppBar position="fixed" className={classes.appbar}>
			<Toolbar className={classes.appbar}>
				<Grid container spacing={2} className="flex-between">
					<Grid item className="flex-start align-center">
						<Typography variant="h6" className={classes.title}>
							CODELOK
						</Typography>
					</Grid>
					<Grid item className="flex-start align-center">
						<div className={classes.desktopMenu}>
							<HeaderMenus />
						</div>
						<div className={classes.togglerButton}>
							<IconButton
								edge="start"
								className={`${isMobileMenuOpen ? classes.hide : classes.show}`}
								color="inherit"
								aria-label="menu"
								onClick={() => handleMobileMenuOpen(true)}
							>
								<MenuIcon />
							</IconButton>
							<IconButton
								edge="start"
								className={`${isMobileMenuOpen ? classes.show : classes.hide}`}
								color="inherit"
								aria-label="menu"
								onClick={() => handleMobileMenuOpen(false)}
							>
								<CloseIcon />
							</IconButton>
						</div>
					</Grid>
				</Grid>
			</Toolbar>
			<div className={classes.mobileMenuSection}>
				<div className={`${isMobileMenuOpen ? classes.show : classes.hide} ${classes.mobileMenu}`}>
					<HeaderMenus />
				</div>
			</div>
		</AppBar>
	);
}
