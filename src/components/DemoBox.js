import React from 'react';

const DemoBox = props => {
    return (
        <div>
            <p className={`height-${props.value}`}>{props.children}</p>
        </div>
    );
};

export default DemoBox;
