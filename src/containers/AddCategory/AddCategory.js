import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

import css from "./AddCategory.module.css";
import * as actions from "../../store/actions/index";

export const AddCategory = (props) => {
  const { history, categories, onSetCategories } = props;

  const initialValues = {
    name: "",
    color: "#ffffff",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter a valid collection name"),
  });
  const onSubmit = (values) => {
    const newCats = { ...categories, [values.name.toLowerCase()]: values };
    onSetCategories(newCats);

    history.push("/collection");
  };

  return (
    <section className={css.Container}>
      <h1 className={css.Heading}>Add Collection</h1>
      <Formik {...{ initialValues, validationSchema, onSubmit }}>
        {({ errors, touched }) => {
          const errLength = Object.keys(errors).length;
          const isDisabled = errLength > 0;

          return (
            <Form className={css.Form}>
              <div className={css.InputContainer}>
                <label className={css.Label} htmlFor="name">
                  Collection Name
                </label>
                <Field
                  className={css.Input}
                  type="input"
                  id="name"
                  name="name"
                />
                {errors.name && touched.name ? (
                  <div className={css.ValidationError}>{errors.name}</div>
                ) : null}
              </div>
              <div className={css.InputContainer}>
                <label className={css.Label} htmlFor="color">
                  Colour
                </label>
                <Field
                  className={css.Input}
                  type="color"
                  id="color"
                  name="color"
                />
                {errors.color && touched.color ? (
                  <div className={css.ValidationError}>{errors.color}</div>
                ) : null}
              </div>
              <div className={css.Controls}>
                <button
                  className={css.Button}
                  type="submit"
                  disabled={isDisabled}
                >
                  Add Collection
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

AddCategory.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  categories: PropTypes.objectOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  onSetCategories: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    categories: state.hygge.categories,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSetCategories: (newCategories) =>
      dispatch(actions.setCategories(newCategories)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
