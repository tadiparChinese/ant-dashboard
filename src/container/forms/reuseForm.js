import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import { getLatLng, geocodeByAddress } from 'react-places-autocomplete';
import TextInput from '../../components/common/forms/textInput';
import PlaceInput from '../../components/common/forms/placeInput';
import GoogleMap from '../../components/google/googleMap';
class ReuseForm extends Component {
    onSubmit = values => console.log(values)
    
    handleSelect = address => {
        console.log(this.props, address)
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .then(() => this.props.change('location', address))
            .catch(error => console.error('Error', error));
    };

    renderInput = ({ input, meta, label, ...custom }) => (
        <div >
            <label>{label}</label>
            <TextInput  {...input} />
        </div>
    )
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name="field1"
                        component={this.renderInput}
                        label='Event' />
                    <Field
                        name="location"
                        component={PlaceInput}
                        label='Enter Event Location'
                        width={400} 
                        onSelect={this.handleSelect}/>
                    <button>Submit</button>
                </form>
                <div>
                <GoogleMap/>
                </div>
            </div>
        )
    }
}
ReuseForm = reduxForm({
    form: 'reuseForm'
})(ReuseForm)

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ReuseForm);