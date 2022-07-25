import { Routes as RouterDOM, Route } from "react-router-dom";

import { AuthTemplate, HomeTemplate } from "../containers/Templates";
import { Login, Signup } from "../containers/Auth";
import { News, DetailNews } from "../containers/News";

import { NotFound } from "../containers/Exception";

const Routes = () => {
  return (
    <>
      <RouterDOM>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/" element={<News />} />
          <Route
            path="/detail-news/:provider/:newsId"
            element={<DetailNews />}
          />
        </Route>
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </RouterDOM>
    </>
  );
};

export default Routes;
