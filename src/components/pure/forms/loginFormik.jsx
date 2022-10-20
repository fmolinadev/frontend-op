import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("El e-mail ingresado no es valido.")
      .required("El e-mail es obligatorio")
      .min(6, "El e-mail ingresado es muy corto.")
      .max(38, "El e-mail ingresado es muy largo."),
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña es muy corta.")
      .max(18, "La contraseña es muy larg."),
  });
  return (
    <div>
      <h3>Login</h3>
      <Formik
        initialValues={initialCredentials}
        validationSchema={validateSchema}
        onSubmit={async (values) => {
          /* El setTimeout es para mostrar el "isSubmitting" forzado por el momento */
          await new Promise((r) => setTimeout(r, 1500));
          /* Guardo las credenciales en LocalStorage para simular un acceso real hasta tener las rutas listas */
          localStorage.setItem("Credenciales", values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email:</label>
            <Field
              id="email"
              name="email"
              placeholder="tumejoremail@mail.com"
              type="email"
            />
            {errors.email && touched.email && (
              <ErrorMessage component="div" name="email" />
            )}
            <label htmlFor="password">Contraseña:</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="*****"
            />
            {errors.password && touched.password && (
              <ErrorMessage component="div" name="password" />
            )}
            <button type="submit">Ingresar</button>
            {isSubmitting ? (
              <div>
                <p>Enviando credenciales...</p>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
