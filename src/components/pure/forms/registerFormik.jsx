import { User } from "../../../models/user.class";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROL } from "../../../models/roles.enum";

const RegisterFormik = () => {
  let user = new User();

  const initialCredentials = {
    userName: "",
    userSurname: "",
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
    userRol: ROL.USER,
  };

  const registerSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "El nombre de usuario es muy corto.")
      .max(18, "El nombre de usuario es muy largo.")
      .required("El nombre de usuario es requerido"),
    userSurname: Yup.string().min(1, "El apellido de usuario es muy corto."),
    userEmail: Yup.string()
      .email("El e-mail ingresado no es valido.")
      .required("El e-mail es obligatorio")
      .min(6, "El e-mail ingresado es muy corto.")
      .max(38, "El e-mail ingresado es muy largo."),
    userPassword: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña es muy corta.")
      .max(18, "La contraseña es muy larg."),
    userPasswordConfirm: Yup.string().when("userPassword", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string()
        .oneOf([Yup.ref("userPassword")], "Las contraseñas no cohinciden.")
        .required("Debes volver a ingresar la contraseña en este campo."),
    }),
    /* userRol: Yup.string()
      .oneOf([ROL.USER, ROL.ADMIN], "Debes elegir un rol")
      .required("El rol es requerido"), */
  });

  return (
    <div>
      <h3>Registro</h3>
      <Formik
        initialValues={initialCredentials}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          /* El setTimeout es para mostrar el "isSubmitting" forzado por el momento */
          await new Promise((r) => setTimeout(r, 1500));
          /* Guardo las credenciales en LocalStorage para simular un acceso real hasta tener las rutas listas */
          localStorage.setItem("Creando usuario", values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <label htmlFor="userName">Nombre:</label>
            <Field
              id="userName"
              name="userName"
              placeholder="Ingresar nombre"
              type="text"
            />
            {errors.userName && touched.userName && (
              <ErrorMessage component="div" name="userName" />
            )}
            <label htmlFor="userSurname">Apellido:</label>
            <Field
              id="userSurname"
              name="userSurname"
              placeholder="Ingresar apellido"
              type="text"
            />
            {errors.userSurname && touched.userSurname && (
              <ErrorMessage component="div" name="userSurname" />
            )}
            <label htmlFor="userEmail">Email:</label>
            <Field
              id="userEmail"
              name="userEmail"
              placeholder="tumejoremail@mail.com"
              type="email"
            />
            {errors.userEmail && touched.userEmail && (
              <ErrorMessage component="div" name="userEmail" />
            )}
            <label htmlFor="userPassword">Contraseña:</label>
            <Field
              id="userPassword"
              name="userPassword"
              type="password"
              placeholder="*****"
            />
            {errors.userPassword && touched.userPassword && (
              <ErrorMessage component="div" name="userPassword" />
            )}
            <label htmlFor="userPasswordConfirm">Repetir contraseña:</label>
            <Field
              id="userPasswordConfirm"
              name="userPasswordConfirm"
              type="password"
              placeholder="Repite para confirmar la contraseña"
            />
            {errors.userPasswordConfirm && touched.userPasswordConfirm && (
              <ErrorMessage component="div" name="userPasswordConfirm" />
            )}
            <button type="submit">Registrarme</button>
            {isSubmitting ? (
              <div>
                <p>Creando la cuenta...</p>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
