import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./user/home_page/HomePage";
import DetailCourse from "./user/detail_course/DetailCourse";
import Dashboard from "./admin/homepage/Dashboard";
import Tables from "./admin/feature/Tables";
import CustomRoute from "./utils/CustomRoute";
import CustomRouteAdmin from "./utils/CustomRouteAdmin";
import PageNotFound from "./page_not_found/PageNotFound";
import Login from "./admin/login/Login";
import ScrollToTop from "./utils/ScrollToTop";
import CourseByTag from "./user/course_by_tag/CourseByTag";
import EditPage from "./admin/feature/EditPage";
import SearchCourse from "./user/search_course/SearchCourse";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>

          <Switch>
            <CustomRoute path="/" exact component={HomePage} />
            <CustomRoute path="/search" exact component={SearchCourse} />

            <CustomRoute
              path="/course/:category/:id"
              exact
              component={DetailCourse}
            />
            <CustomRoute
              path="/courses/:category"
              exact
              component={CourseByTag}
            />
            <CustomRoute
              path="/courses/:category/:tag"
              exact
              component={CourseByTag}
            />

            <CustomRouteAdmin
              path="/v1/admin/dashboard"
              exact
              component={Dashboard}
            />
            <CustomRouteAdmin
              path="/v1/admin/edit/:id"
              exact
              component={EditPage}
            />
            <CustomRouteAdmin
              path="/v1/admin/tables"
              exact
              component={Tables}
            />
            <Route path="/v1/admin/login" exact component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};
export default App;
