import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLoginWithGoogle on button click', () => {
    const startLoginWithGoogle = jest.fn();
    const wrapper = shallow(<LoginPage startLoginWithGoogle={startLoginWithGoogle} />);
    wrapper.find('.login-google').simulate('click');
    expect(startLoginWithGoogle).toHaveBeenCalled();
});

test('should call startLoginWithFacebook on button click', () => {
    const startLoginWithFacebook = jest.fn();
    const wrapper = shallow(<LoginPage startLoginWithFacebook={startLoginWithFacebook} />);
    wrapper.find('.login-facebook').simulate('click');
    expect(startLoginWithFacebook).toHaveBeenCalled();
});