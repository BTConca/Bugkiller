import Wellcome from "../layouts/Wellcome.jsx"
import SignIn from "../layouts/SignIn.jsx"
import SignUp from "../layouts/SignUp.jsx"
import UpdateProject from "../layouts/updateproject.jsx"
const wellcomeRoutes = [
  {
    path: "/signin",
    component: SignIn
  },
  {
    path: "/signup",
    component: SignUp
  },
  {
    path: "/home",
    component: Wellcome
  },
  {
    path: "/update",
    component: UpdateProject
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default wellcomeRoutes;
