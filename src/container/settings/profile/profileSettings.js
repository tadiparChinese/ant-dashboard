import React, { Component } from 'react';
import Select from 'react-select';
import { Icon } from 'antd'
import { colourOptions, groupedOptions } from './options';
import Creatable from "./creatableSelect";
import SelectFormModal from "./selectFormModal";
const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span style={{ color: 'blue' }}> {data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);
class ProfileSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (selectedOption) => {
        console.log(selectedOption)
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        return (
            <div style={{ height: 500, width: 400 }}>
                <h3>Option group</h3>
                <Select
                    isClearable
                    isMulti
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                    onChange={this.handleChange}
                    placeholder="Choose Color or Flavour ..."
                />
                <br/>
                <h3>Creatable Select box</h3>
                <Creatable />
                <SelectFormModal />
            </div>
        )
    }
}

export default ProfileSettings;