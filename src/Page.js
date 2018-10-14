import React, { Component } from 'react';
import store from './stores'
import { observer, inject } from 'mobx-react';

@inject('first_store')
@observer class Page extends Component {
    componentDidMount () {
        this.props.first_store.first_to_root()
    }
    render() {
        return (
            <div>
                {this.props.first_store.first_ob}
                PAGE
            </div>
        );
    }
}

export default Page;
