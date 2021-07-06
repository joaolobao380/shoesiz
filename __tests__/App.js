import 'react-native';
import React from 'react';
import App from '../App.tsx';

// Note: test renderer must be required aftser react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<App />);
});
