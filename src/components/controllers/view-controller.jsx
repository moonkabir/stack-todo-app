import React from 'react';
import {Label , CustomInput} from 'reactstrap'

const ViewController = ({view , changeView}) => {
    return (
        <div className='d-flex'>
            <Label for ='list-view' className='mx-4'>
                <CustomInput
                    type = 'radio'
                    name = 'view'
                    value = 'list'
                    id='list-view'
                    onChange = {changeView}
                    className = 'd-inline-block mx-1'
                    checked = {view === 'list'}
                />
                List view
            </Label>
            <Label for ='table-view' className='mx-4'>
                <CustomInput
                    type = 'radio'
                    name = 'view'
                    value = 'table'
                    id='table-view'
                    onChange = {changeView}
                    className = 'd-inline-block mx-1'
                    checked = {view === 'table'}
                />
                Table view
            </Label>
        </div>
    );
};

export default ViewController;