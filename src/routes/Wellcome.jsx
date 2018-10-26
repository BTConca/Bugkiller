import Wellcome from "layouts/Wellcome.jsx"
import SignIn from "layouts/SignIn.jsx"
import SignUp from "layouts/SignUp.jsx"
import UpdateProject from "layouts/updateproject.jsx"
import ForgotPassword from "layouts/ForgotPassword"
import SettingNotification from "layouts/SettingNotification"


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
  {
    path: "/profile/notification",
    component: SettingNotification
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default wellcomeRoutes;
