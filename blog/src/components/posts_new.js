import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField() {
        return (
            <div>
                <input  
                    
                />
            </div>
        )
    }

    render() {
        return (
            <form action="">
                <Field 
                    name="title" 
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);


// PostEdit.js
