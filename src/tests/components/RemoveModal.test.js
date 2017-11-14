import React from 'react';
import { shallow } from 'enzyme';
import RemoveModal from '../../components/RemoveModal';

test('should render Remove Modal correctly', () => {
  const wrapper = shallow(
    <RemoveModal
      selectedRemove
      handleConfirmRemoveModal={() => {}}
      handleCloseRemoveModal={() => {}}
    />
  );
  expect(wrapper).toMatchSnapshot();
});