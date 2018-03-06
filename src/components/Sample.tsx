import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { InjectedIntlProps, injectIntl } from 'react-intl';
import { fooAction } from '../actions/foo';
import {IReduxState} from '../types/store';

interface IConnectedDispatch {
    foo: (foo: number) => Action;
}

interface IConnectedProps {
    bar: string;
}

interface IOwnProps {
    baz: number;
}

interface IReduxProps extends IOwnProps, IConnectedProps, IConnectedDispatch {}

interface IProps extends IOwnProps, IConnectedProps, IConnectedDispatch, InjectedIntlProps {}

class MyComponent extends React.Component<IProps, undefined> {
    constructor(props: IProps) {
        super(props);

        props.foo(props.baz);
    }

    public render() {
        return <div>Hello</div>;
    }
}

const Injected = injectIntl<IReduxProps>(MyComponent);

export default connect<IConnectedProps, IConnectedDispatch, IOwnProps>(
    (state: IReduxState) => ({
        bar: state.bar,
    }),
    (dispatch) => ({
        foo: (foo: number) => dispatch(fooAction(foo)),
    }),
)(Injected);
