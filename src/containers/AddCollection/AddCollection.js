import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

import css from "./AddCollection.module.css";

const AddCollection = () => {
  const initialValues = {
    name: "",
    colour: "#ffffff",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter a valid collection name"),
  });
  const onSubmit = (values) => {
    console.log(values);
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
                <label className={css.Label}>Collection Name</label>
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
                <label className={css.Label}>Colour</label>
                <Field
                  className={css.Input}
                  type="color"
                  id="colour"
                  name="colour"
                />
                {errors.colour && touched.colour ? (
                  <div className={css.ValidationError}>{errors.colour}</div>
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

export default AddCollection;
