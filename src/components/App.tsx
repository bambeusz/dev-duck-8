import * as React from 'react';
import Sample from './Sample';

class App extends React.Component<undefined, undefined> {
    public render() {
        return <Sample baz={3} />;
    }
}

export default App;
