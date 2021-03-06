import React from 'react';
import { setupComponentForTesting } from "utils/testing";
import { NavigationMenu } from './NavigationMenu';

it('renders without crashing', () => {
    const tree = setupComponentForTesting(<NavigationMenu instanceData={null} themeData={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
});
