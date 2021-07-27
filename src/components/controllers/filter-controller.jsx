import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import PropTypes from "prop-types";

const FilterController = ({ handlefilter }) => (
    <ButtonGroup>
        <Button onClick={() => handlefilter('all')}>All</Button>
        <Button onClick={() => handlefilter('running')}>Running</Button>
        <Button onClick={() => handlefilter('completed')}>Completed</Button>
    </ButtonGroup>
);

FilterController.propTypes = {
    handlefilter: PropTypes.func.isRequired,
}

export default FilterController;