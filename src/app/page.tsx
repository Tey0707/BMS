"use client";

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import BarangayDashboard from "./components/sidebar/page";

function Home() {
  return <BarangayDashboard />;
}

export default withAuthenticator(Home, {
  loginMechanisms: ['email'],
  hideSignUp: false,
});
