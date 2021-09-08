/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactCheckbox from '@jswork/react-checkbox';
import ReactCheckboxGroup from '@jswork/react-checkbox-group';
import ReactInput from '@jswork/react-input';
import ReactRadioGroup from '@jswork/react-radio-group';
import ReactSelect from '@jswork/react-select';
import ReactTextarea from '@jswork/react-textarea';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ReactCheckbox,
  ReactCheckboxGroup,
  ReactInput,
  ReactRadioGroup,
  ReactSelect,
  ReactTextarea,
};

export default ReactLiveScope;
