import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme from './src/global/styles/theme';
import Home from './src/screens/Home';
import store from './src/store';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </Provider>
    );
}
