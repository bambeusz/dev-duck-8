import * as React from 'react';

import ApiResource, { IResource } from '../services/ApiResource';

interface IState {
    resources: IResource[],
}

class MyComponent extends React.Component<undefined, IState> {
    constructor(props: undefined) {
        super(props);

        this.state = {
            resources: [],
        }
    }

    componentDidMount() {
        ApiResource.getAll()
            .then((resources: IResource[]) => {
                this.setState({
                    resources
                });
            });
    }

    public render() {
        return <ul>
            {this.state.resources.map((resource: IResource) => {
                return <li key={resource.id}>
                    Bar: {resource.bar}; Baz.Zar: {resource.baz.zar}
                </li>;
            })}
        </ul>;
    }
}

export default MyComponent;
