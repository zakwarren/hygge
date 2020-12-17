import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

import css from "./AddImage.module.css";
import * as actions from "../../store/actions/index";

export const AddImage = (props) => {
  const { history, categories, onSaveNewHygge } = props;
  const imgRef = useRef();

  if (!categories) {
    return null;
  }

  const catKeys = Object.keys(categories);
  const catArray = catKeys.map((cat) => categories[cat].name);
  const initialValues = {
    image: "",
    attribution: "",
    category: catArray[0],
  };
  const validationSchema = yup.object().shape({
    image: yup.mixed().required("Please upload a valid image"),
    attribution: yup.string(),
    category: yup.string().required("Please select a valid category"),
  });
  const onSubmit = (values) => {
    const imgField = document.getElementById("image");
    const file = imgField.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.addEventListener(
      "load",
      () => {
        imgRef.current.src = reader.result;
        onSaveNewHygge(reader.result, values.attribution, values.category);
        history.push("/collection");
      },
      false
    );
  };

  return (
    <section className={css.Container}>
      <h1 className={css.Heading}>Add Hygge Image</h1>
      <Formik {...{ initialValues, validationSchema, onSubmit }}>
        {({ errors, touched }) => {
          const errLength = Object.keys(errors).length;
          const isDisabled = errLength > 0;

          return (
            <Form className={css.Form}>
              <div className={css.InputContainer}>
                <label className={css.Label} htmlFor="image">
                  Hygge image
                </label>
                <Field
                  className={css.Input}
                  type="file"
                  accept="image/*"
                  id="image"
                  name="image"
                />
                {errors.name && touched.name ? (
                  <div className={css.ValidationError}>{errors.image}</div>
                ) : null}
                <img
                  ref={imgRef}
                  className={css.UploadedImage}
                  alt="Uploaded file"
                />
              </div>
              <div className={css.InputContainer}>
                <label className={css.Label} htmlFor="attribution">
                  Image attribution
                </label>
                <Field
                  className={css.Input}
                  type="text"
                  id="attribution"
                  name="attribution"
                />
                {errors.color && touched.color ? (
                  <div className={css.ValidationError}>
                    {errors.attribution}
                  </div>
                ) : null}
              </div>
              <div className={css.InputContainer}>
                <label className={css.Label} htmlFor="category">
                  Category
                </label>
                <Field
                  className={css.Input}
                  as="select"
                  id="category"
                  name="category"
                >
                  {catArray.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Field>
                {errors.color && touched.color ? (
                  <div className={css.ValidationError}>{errors.category}</div>
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

AddImage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  categories: PropTypes.objectOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  onSaveNewHygge: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  return {
    categories: state.hygge.categories,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSaveNewHygge: (image, attribution, category) =>
      dispatch(actions.saveNewHygge(image, attribution, category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
