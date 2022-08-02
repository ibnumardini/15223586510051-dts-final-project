import { Routes as RouterDOM, Route } from "react-router-dom";

import { AuthTemplate, HomeTemplate } from "../containers/Templates";
import { Login, Signup } from "../containers/Auth";
import { News, DetailNews, ListNews, SearchNews } from "../containers/News";
import { MustLoginFirst, AlreadyLogin } from "../components";

import { NotFound } from "../containers/Exception";

const Routes = () => {
  return (
    <>
      <RouterDOM>
        <Route
          path="/"
          element={
            <MustLoginFirst>
              <HomeTemplate />
            </MustLoginFirst>
          }
        >
          <Route
            path="/"
            element={
              <MustLoginFirst>
                <News />
              </MustLoginFirst>
            }
          />
          <Route
            path="/detail-news/:provider/:slug"
            element={
              <MustLoginFirst>
                <DetailNews />
              </MustLoginFirst>
            }
          />
          <Route
            path="/list-news/:provider/:category"
            element={
              <MustLoginFirst>
                <ListNews />
              </MustLoginFirst>
            }
          />
          <Route
            path="/search"
            element={
              <MustLoginFirst>
                <SearchNews />
              </MustLoginFirst>
            }
          />
        </Route>
        <Route
          path="/auth"
          element={
            <AlreadyLogin>
              <AuthTemplate />
            </AlreadyLogin>
          }
        >
          <Route
            path="login"
            element={
              <AlreadyLogin>
                <Login />
              </AlreadyLogin>
            }
          />
          <Route
            path="signup"
            element={
              <AlreadyLogin>
                <Signup />
              </AlreadyLogin>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </RouterDOM>
    </>
  );
};

export default Routes;
