import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import BlockId from '../../../src/components/BlockId';

describe('The BlodId test component', () => {
    it('renders correctly', () => {
        renderer.create(<BlockId id={'20'} />);
    });
    it('renders correctly', () => {
        const tree = renderer.create(<BlockId id={'20'} />).toJSON();
        console.log(tree)
        expect(tree.props.text).toBe('20');
    });
});