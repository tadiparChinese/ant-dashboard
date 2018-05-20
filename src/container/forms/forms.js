import React, { Component } from 'react';
import { Card, Divider } from 'antd';
import SimpleForm from "./simpleForm";
import ComplexForm from "./complexForm";
import ReduxForm from './reduxForm';
import FormArray from './formArray';
import ReduxFormArray from './reduxFormArray';
import NewFormArray from './newFormArray';
import ExampleForm from './exampleForm';
class Forms extends Component {
  render() {
    return (
      <div>
        <Card>
          <Divider />
          {/* <SimpleForm /> 
          <Divider />
          <ComplexForm />
          <Divider />
          <ReduxForm />
          <Divider />
          <FormArray />
          <Divider />
          <ReduxFormArray />
         <NewFormArray/> */}
         <ExampleForm data={[1,2,3,4,5]}/>
        </Card>
      </div>
    )
  }
}
export default Forms;