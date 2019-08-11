import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('should render', () => {
    const wrapper = shallow(<Button text="button text" />);

    expect(wrapper).toHaveLength(1);
  });

  describe('props', () => {
    it('should use default props when no props are passed', () => {
      const wrapper = mount(<Button text="button text" />);

      expect(wrapper.prop('variant')).toEqual('primary');
    });

    it('should render with `primary` classname when `variant` prop is set to `primary`', () => {
      const wrapper = shallow(<Button text="button text" variant="primary" />);
      const classNames = wrapper.prop('className');

      expect(classNames).toContain('primary');
    });

    it('should render with `secondary` classname when `variant` prop is set to `secondary`', () => {
      const wrapper = shallow(<Button text="button text" variant="secondary" />);
      const classNames = wrapper.prop('className');

      expect(classNames).toContain('secondary');
    });

    it('should render with `success` classname when `variant` prop is set to `success`', () => {
      const wrapper = shallow(<Button text="button text" variant="success" />);
      const classNames = wrapper.prop('className');

      expect(classNames).toContain('success');
    });

    it('should render with `warning` classname when `variant` prop is set to `warning`', () => {
      const wrapper = shallow(<Button text="button text" variant="warning" />);
      const classNames = wrapper.prop('className');

      expect(classNames).toContain('warning');
    });

    it('should correctly map the `text` value prop as the button text', () => {
      const wrapper = shallow(<Button text="button text" />);

      const children = wrapper.prop('children');
      expect(children).toContain('button text');
    });

    it('should execute the `onClick` function prop when the button is clicked ', () => {
      const mockedFunction = jest.fn();
      const wrapper = shallow(<Button text="button text" onClick={mockedFunction} />);

      expect(mockedFunction).toHaveBeenCalledTimes(0);
      wrapper.simulate('click');
      expect(mockedFunction).toHaveBeenCalledTimes(1);
    });
  });
});
