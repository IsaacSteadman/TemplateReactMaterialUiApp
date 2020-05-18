import * as React from 'react';
import { render } from 'react-dom';

import { Toolbar, AppBar, Button } from '@material-ui/core';

interface ReactAppProps {
};

interface ReactAppState extends ReactAppProps {
};

class ReactApp extends React.Component<ReactAppProps, ReactAppState> {
  constructor(props: ReactAppProps) {
    super(props);
    this.state = Object.assign({}, props);
  }
  render() {
    return (
      <div>
        this is a React App
        <AppBar position="static">
          <Toolbar>
            Hello world
        </Toolbar>
          <Toolbar>
            Another toolbar
        </Toolbar>
        </AppBar>
        <Button>
          Nope
      </Button>
      </div>
    );
  }
}

console.log('hello world');

document.addEventListener('DOMContentLoaded', function () {
  const div = document.getElementById('container') as HTMLDivElement;
  render(<ReactApp />, div);
});
