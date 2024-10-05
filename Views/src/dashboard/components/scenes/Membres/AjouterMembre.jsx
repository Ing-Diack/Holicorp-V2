import React, { useState, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { hostUrl, PostRequest } from "../../../../utils/Request_Http/Resquest";
import { Loader } from "../../../../utils/Loader/Loader";
import { AuthContext } from "../../../../utils/Context/AuthContext";
import { Alert } from "@mui/material";

const AjouterMembre = () => {
  const { user } = useContext(AuthContext);
  const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    role: "",
    password: "",
    isVerified: true,
    numberConnexion: 1,
    ID_PARENT: `${user.id}`,
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isLoading, setIsLoading] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState(null);

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    const response = await PostRequest(
      `${hostUrl}/utilisateur/signUpMembre`,
      JSON.stringify(values)
    );
    setIsLoading(false);
    if (response.error) {
      setTypeAlert("error");
      setMessage("Oups il veuillez verifier votre connexion");
    } else {
      setTypeAlert("success");
      setMessage("votre mot de passe a été modifié avec succes");
    }
  };

  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nom}
                name="nom"
                error={!!touched.nom && !!errors.nom}
                helperText={touched.nom && errors.nom}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Prénom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prenom}
                name="prenom"
                error={!!touched.prenom && !!errors.prenom}
                helperText={touched.prenom && errors.prenom}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Téléphone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tel}
                name="tel"
                error={!!touched.tel && !!errors.tel}
                helperText={touched.tel && errors.tel}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Rôle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                name="role"
                error={!!touched.role && !!errors.role}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mot de passe"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              {isLoading ? (
                <Loader />
              ) : (
                <div>
                  <Button type="submit" color="secondary" variant="contained">
                    Ajouter
                  </Button>
                </div>
              )}
              <div className="pt-1">
                <Alert severity={typeAlert}> {message} </Alert>
              </div>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  nom: yup.string().required("required"),
  prenom: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  tel: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  role: yup.string().required("required"),
  password: yup.string().required("required"),
});

export default AjouterMembre;
