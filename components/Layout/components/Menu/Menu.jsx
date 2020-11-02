
import React, { Component } from 'react';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';

const menudata = [
    { name: 'MENU-1', biography: 'assets/img/Menu_inner.jpg' },
    { name: 'MENU-2', biography: 'assets/img/menu_outer.jpg' },
  ];

  function getTabs() {
    return menudata.map((menu, index) => ({
      title: menu.name,
      getContent: () => <img src={menu.biography} width="100%"/>,
      key: index,
      tabClassName: 'tab',
      panelClassName: 'panel',
    }));
  }
  
  
export default function Menu() {
    return (
        <div className="container">
        <Tabs items={getTabs()} />
        </div>
    )
}
