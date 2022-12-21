import React, { useState } from "react";

interface Istate {
  authenticated: boolean;
}


const Auth: React.FC = () => {
  let [auth, setAuth] = useState<Istate>({
    authenticated: false,
  });

  const login = (): void => {
    setAuth({ authenticated: true });
  };
  const logout = (): void => {
    setAuth({ authenticated: false });
  };


  return (
    <>
      {auth.authenticated ? (
        <div>
          <h3>Wellcome</h3>
          <p>
            S Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            voluptatem cumque sunt magni! Modi quidem sint id deserunt quas
            tenetur cupiditate ipsa et numquam nisi? Esse atque repellat nihil
            nesciunt.
          </p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>Not Login</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            recusandae quas facere in ipsum, quae eos esse quasi laboriosam odio
            quod, architecto ipsam nihil magni. Nam culpa veritatis quos
            excepturi!
          </p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </>
  );
};
export default Auth;
