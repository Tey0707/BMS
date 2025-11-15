"use client";

import { ReactNode, useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";

interface AmplifyProviderProps {
  children: ReactNode;
}

export default function AmplifyProvider({ children }: AmplifyProviderProps) {
  useEffect(() => {
    Amplify.configure(awsExports);
  }, []);

  return <>{children}</>;
}
