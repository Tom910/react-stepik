import React, { Component } from 'react';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FileFolder from 'material-ui/svg-icons/file/folder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
            title="Счета"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
          <div>
              <List>
                  <Subheader inset={true}>Folders</Subheader>
                  <ListItem
                      leftAvatar={<Avatar icon={<FileFolder />} />}
                      rightIcon={<ActionInfo />}
                      primaryText="Photos"
                      secondaryText="Jan 9, 2014"
                  />
              </List>
              <Divider inset={true} />
          </div>
      </div>
    );
  }
}

export default App;
