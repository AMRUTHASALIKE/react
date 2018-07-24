import React, { Component } from 'react';
import {Menu} from 'react-menu';
import {MenuTrigger} from 'react-menu';
import {MenuOptions} from 'react-menu';
import {MenuOption} from 'react-menu';

class Menu1 extends Component {
  render() {
    return (
        <Menu className='myMenu'>
          <MenuTrigger>
            ⚙
          </MenuTrigger>
          <MenuOptions>
   
            <MenuOption>
              1st Option
            </MenuOption>
   
            <MenuOption onSelect={this.someHandler}>
              2nd Option
            </MenuOption>
   
            <div className='a-non-interactive-menu-item'>
              non-selectable item
            </div>
   
            <MenuOption disabled={true} onDisabledSelect={this.otherHanlder}>
              disabled option
            </MenuOption>
   
          </MenuOptions>
        </Menu>
      );
  }
}

export default Menu1;