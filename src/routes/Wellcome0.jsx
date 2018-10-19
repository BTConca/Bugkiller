import Wellcome from "../layouts/Wellcome.jsx"

const wellcomeRoutes = [
  {
    path: "/dashboard",
    component: Wellcome
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default wellcomeRoutes;
