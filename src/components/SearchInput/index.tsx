import { Formik, Field, Form, FormikHelpers } from "formik";
import { api } from "../../pages/api/api";
import { Button } from "../Button";
import * as S from "./styles";

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
    <S.Container>
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
          <Field
            id="search"
            name="search"
            placeholder="Search Characters"
            type="search"
            autocomplete="off"
          />

          <Button type="submit" text="Search" />
        </Form>
      </Formik>
    </S.Container>
  );
}
