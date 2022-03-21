import { Formik, Field, Form, FormikHelpers } from "formik";
import { api } from "../../pages/api/api";

interface Values {
  search: string;
}

export function SearchInput({
  setCharacterInfo,
  setCharacterPackageInfo,
  setSearchValues,
  setPage,
}) {
  return (
    <div>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setSearchValues(values);
          setPage(1);
          api
            .get(`character/?name=${values.search}`)
            .then((response) => setCharacterPackageInfo(response));

          api
            .get(`character/?name=${values.search}`)
            .then((response) => setCharacterInfo(response.data.results));
          setSubmitting(false);
        }}
      >
        <Form>
          <Field id="search" name="search" placeholder="search" type="search" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
