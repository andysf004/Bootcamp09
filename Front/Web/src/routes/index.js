import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';
import SignIn from '~/pages/SignIn';

import StudentEdition from '~/pages/Edition/Student';
import PlanEdition from '~/pages/Edition/Plan';
import EnrollmentEdition from '~/pages/Edition/Enrollment';

import StudentManagement from '~/pages/Management/Student';
import PlanManagement from '~/pages/Management/Plan';
import EnrollmentManagement from '~/pages/Management/Enrollment';
import AssistenceReq from '~/pages/Management/Assistance';

import StudentRegister from '~/pages/Register/Student';
import PlanRegister from '~/pages/Register/Plan';
import EnrollmentRegister from '~/pages/Register/Enrollment';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/editionStudent" component={StudentEdition} isPrivate />
      <Route path="/editionPlan" component={PlanEdition} isPrivate />
      <Route
        path="/editionEnrollment"
        component={EnrollmentEdition}
        isPrivate
      />

      <Route
        path="/managementStudent"
        component={StudentManagement}
        isPrivate
      />
      <Route path="/managementPlan" component={PlanManagement} isPrivate />
      <Route
        path="/managementEnrollment"
        component={EnrollmentManagement}
        isPrivate
      />
      <Route path="/reqAssistance" component={AssistenceReq} isPrivate />

      <Route path="/registerStudent" component={StudentRegister} isPrivate />
      <Route path="/registerPlan" component={PlanRegister} isPrivate />
      <Route
        path="/registerEnrollment"
        component={EnrollmentRegister}
        isPrivate
      />
    </Switch>
  );
}
