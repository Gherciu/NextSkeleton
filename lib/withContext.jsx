import React from 'react';

const withContext = Context => Component => props => (
    <Context.Consumer>
        {ctx => <Component {...props} context={ctx} />}
    </Context.Consumer>
);
export default withContext;
