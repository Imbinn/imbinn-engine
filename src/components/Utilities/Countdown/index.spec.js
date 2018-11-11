import React from 'react';
import { shallow } from 'enzyme';

import Countdown from './index';

describe('Basics', () => {
    const defaultProps = {
        duration: 10000,
    };

    let wrapper;

    const setup = (props) => {
        wrapper = shallow(<Countdown {...props} />);
    };

    beforeEach(() => {
        setup(defaultProps);
    });

    it('should set state correctly when loaded', () => {
        expect(wrapper.state().timer).toEqual(defaultProps.duration / 1000);
    });
});
