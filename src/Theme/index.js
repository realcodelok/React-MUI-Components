import { createMuiTheme } from '@material-ui/core';
const Theme = createMuiTheme({
	palette: {
		common: {
			black: '#000',
			white: '#fff',
		},
		primary: {
			light: '#dc505208',
			main: '#dc5052',
			dark: '#dc5052',
		},
		secondary: {
			light: '#ff4081',
			main: '#090b35',
			dark: '#c51162',
		},
		error: {
			light: '#e57373',
			main: '#f44336',
			dark: '#d32f2f',
		},
		warning: {
			light: '#ffb74d',
			main: '#ff9800',
			dark: '#f57c00',
		},
		info: {
			light: '#64b5f6',
			main: '#2196f3',
			dark: '#1976d2',
		},
		success: {
			light: '#81c784',
			main: '#4caf50',
			dark: '#388e3c',
		},
		text: {
			primary: `rgba(0, 0, 0, 0.87)`,
			secondary: `rgba(0, 0, 0, 0.54)`,
			disabled: `rgba(0, 0, 0, 0.38)`,
			hint: `rgba(0, 0, 0, 0.38)`,
		},
		divider: `rgba(0, 0, 0, 0.12)`,
		background: {
			paper: '#fff',
			default: '#fafafa',
		},
		action: {
			active: `rgba(255, 255, 255, 1)`,
			hover: `rgba(255, 255, 255, .8)`,
			hover1: '#f0c6c754',
			hoverOpacity: 0.04,
			selected: `rgba(0, 0, 0, 0.08)`,
			selectedOpacity: 0.08,
			disabled: `rgba(0, 0, 0, 0.26)`,
			disabledBackground: `rgba(0, 0, 0, 0.12)`,
			disabledOpacity: 0.38,
			focus: `rgba(0, 0, 0, 0.12)`,
			focusOpacity: 0.12,
			activatedOpacity: 0.12,
		},
	},
	typography: {
		fontSize: 12,
		fontFamily: "'Poppins Medium', sans-serif",
		letterSpacing: '0.06rem',
		robotoBlack: "'Roboto Black', sans-serif",
		robotoBold: "'Roboto Bold', sans-serif",
		robotoLight: "'Roboto Light', sans-serif",
		robotoMedium: "'Roboto Medium', sans-serif",
		robotoRegular: "'Roboto Regular', sans-serif",
		poppinsBold: "'Poppins Bold', sans-serif",
		poppinsExtraBold: "'Poppins Extra Bold', sans-serif",
		poppinsLight: "'Poppins Light', sans-serif",
		poppinsMedium: "'Poppins Medium', sans-serif",
		poppinsRegular: "'Poppins Regular', sans-serif",
		poppinsSemiBold: "'Poppins Semi-Bold', sans-serif",
		nunito: "'Nunito', sans-serif",
		faturaFontSemiBold: "'Nunito Semi-Bold', sans-serif",
		faturaFontBold: "'Nunito Bold', sans-serif",
		montserratFontBold: "'Montserrat', sans-serif",
		baskervilleFont: "'Libre Baskerville', serif",
	},
	dimensions: {
		headerHeight: '65px',
	},
});

export default Theme;
