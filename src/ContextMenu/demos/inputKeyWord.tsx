import { ContextMenu, IContextMenuMenuItem } from '@chat2db/ui';
import { Input } from 'antd';
import React, { useRef, useState } from 'react';

const menuList: IContextMenuMenuItem[] = [
  {
    icon: 'xx',
    label: '自然语言转SQL',
    value: 'sql_generate',
    shortcut: {
      label: '⌘+1',
      value: '1',
    },
    onClick: (menuItem) => {
      console.log('onClick', menuItem.label);
    },
  },
  {
    icon: 'xx',
    label: '解释SQL',
    value: 'sql_explain',
    shortcut: {
      label: '⌘+2',
      value: '2',
    },
    onClick: (menuItem) => {
      console.log('onClick', menuItem.label);
    },
  },
  {
    icon: 'xx',
    label: '转化SQL',
    value: 'sql_convert',
    shortcut: {
      label: '⌘+3',
      value: '3',
    },
    onClick: (menuItem) => {
      console.log('onClick', menuItem.label);
    },
  },
  {
    icon: 'xx',
    label: '优化SQL',
    value: 'sql_optimise',
    shortcut: {
      label: '⌘+4',
      value: '4',
    },
    onClick: (menuItem) => {
      console.log('onClick', menuItem.label);
    },
  },
];

export default () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  // const [triggerStyle, setTriggerStyle] = useState({
  //   position: 'fixed',
  //   left: '0px',
  //   top: '0px',
  // });

  const checkInput = (e) => {
    const inputValue = e.target.value;
    const lastChar = inputValue.slice(-1); //取出输入的最后一个字符
    if (lastChar === '/') {
      setOpen(true);
    }
  };
  return (
    <>
      <Input
        ref={inputRef}
        placeholder="输入「/」唤起菜单"
        onChange={checkInput}
      />
      <ContextMenu
        open={open}
        menuList={menuList}
        onCloseContextMenu={() => {
          console.log('onCloseContextMenu');
          setOpen(false);
        }}
        //trigger的位置，在鼠标点击时跟随鼠标，输入的位置跟随/的位置
        trigger={<div />}
      />
    </>
  );
};
