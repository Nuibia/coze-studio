/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// The @file open source version does not provide UI functions currently.
// The methods exported in this file are for future expansion.
import React, { useState } from 'react';

import { IconCozWorkflow, IconCozPalette } from '@coze-arch/coze-design/icons';
import { SegmentTab, Radio } from '@coze-arch/coze-design';

enum Mode {
  BusinessLogic = 1,
  UserInterface = 2,
}

export const ModeTab = () => {
  const [value, setValue] = useState(Mode.BusinessLogic);
  return (
    <SegmentTab
      value={value}
      onChange={e => {
        console.log('选中值:', e);
        setValue(e.target.value);
      }}
    >
      <Radio value={Mode.BusinessLogic}>
        <div className="flex items-center gap-1">
          <IconCozWorkflow />
          业务逻辑
        </div>
      </Radio>
      <Radio value={Mode.UserInterface}>
        <div className="flex items-center gap-1">
          <IconCozPalette />
          用户界面
        </div>
      </Radio>
    </SegmentTab>
  );
};
