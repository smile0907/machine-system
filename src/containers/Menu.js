import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/common/Menu';
import { actions } from '../stores';

const action = actions.menu;

export default connect(
    state => ({ state: state.menu, app: state.index }),
)(({ state, app }) => (
    <Menu
        data={state.list}
        active={state.active}
        mark={state.mark}
        app={app}
        {...action}
    />
));