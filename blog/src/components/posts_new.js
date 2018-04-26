import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input  
                    className="form-control"
                    /* onChange={field.input.onChange}
                    onBlur={field.input.onBlur} */
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="title"
                    label="Title For Post" 
                    component={this.renderField}
                />
                <Field 
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field 
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the input from 'values';
    // if(values.title.length < 3) {
    //     errors.title = 'Title must be at least 3 characters.'
    // }
    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title";
    }
    if(!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if(!values.content) {
        errors.content = "Enter some content please!";
    }

    // If errors is empty, the form is fine to submit
    //If erros has *any* properties, redux form assumes form is invalid.
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);


// PostEdit.js
