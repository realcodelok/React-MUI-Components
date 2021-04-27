import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Theme from './Theme';
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
