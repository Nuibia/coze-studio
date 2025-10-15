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
import React, { useCallback, useMemo } from 'react';

import {
  useCurrentModeType,
  useIDENavigate,
} from '@coze-project-ide/framework';
import { IconCozWorkflow, IconCozPalette } from '@coze-arch/coze-design/icons';
import { SegmentTab, Radio } from '@coze-arch/coze-design';

enum Mode {
  BusinessLogic = 1,
  UserInterface = 2,
}

export const ModeTab = () => {
  // 获取当前 URL 对应的模式类型（'dev' 或 'ui-builder'）
  const currentModeType = useCurrentModeType();
  // 获取 IDE 导航函数，用于模式切换
  const IDENavigate = useIDENavigate();

  // 根据当前 URL 模式自动匹配对应的 tab 值
  // 当 URL 包含 ui-builder 时显示用户界面 tab，否则显示业务逻辑 tab
  const value = useMemo(
    () =>
      currentModeType === 'ui-builder'
        ? Mode.UserInterface
        : Mode.BusinessLogic,
    [currentModeType],
  );

  // 处理模式切换，使用 IDE 导航函数进行路由跳转
  const handleModeChange = useCallback(
    (newValue: Mode) => {
      if (newValue === Mode.UserInterface) {
        // 跳转到用户界面模式（ui-builder）
        IDENavigate('/ui-builder');
      } else if (newValue === Mode.BusinessLogic) {
        // 跳转到业务逻辑模式（默认开发模式）
        IDENavigate('/');
      }
    },
    [IDENavigate],
  );

  return (
    <SegmentTab
      value={value}
      onChange={e => {
        console.log('选中值:', e);
        handleModeChange(e.target.value);
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
