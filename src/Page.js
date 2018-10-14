import React, { Component } from 'react';
import store from './stores'
import { observer, inject } from 'mobx-react';

@inject('first_store')
@observer class Page extends Component {
    render() {
        return (
            <div>
                PAGE
            </div>
        );
    }
}

export default Page;
