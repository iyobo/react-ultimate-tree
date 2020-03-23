import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import * as React from 'react';

export const SortableList = SortableContainer(({children}) => {
    return <ul>{children}</ul>;
});

export const SortableItem = SortableElement(({children}) => <div >{children}</div>);
