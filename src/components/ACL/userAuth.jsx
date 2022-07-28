import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Auth from "../../services/auth";

export const MustLoginFirst = ({ children }) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(Auth);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      navigate("/auth/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return;
  } else {
    return children;
  }
};

export const AlreadyLogin = ({ children }) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(Auth);
  
  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return;
  } else {
    return children;
  }
};
