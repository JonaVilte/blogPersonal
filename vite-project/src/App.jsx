import Header from "./components/Header";
import Footer from "./components/Footer";
import { Post } from "./components/Post";
import { useEffect, useState } from "react";
import supabase from "../lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user || null);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {user ? (
        <div className="posicionButton">
          <h1>Authenticated</h1>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div className="posicionButton">
          <button onClick={login}>login Github</button>
        </div>
      )}

      <Header />
      <div className="animacion">
        <Post
          titulo={"hes ball"}
          description={"good night"}
          link={"./image/cerezo.jpeg"}
          parrafo={"apple is good"}
        />
      </div>
      <div className="animacion">
        <Post
          titulo={"hes ball"}
          description={"good night"}
          link={"./image/cerezo.jpeg"}
          parrafo={"apple is good"}
        />
      </div>
      <div className="animacion">
        <Post
          titulo={"hes ball"}
          description={"good night"}
          link={"./image/cerezo.jpeg"}
          parrafo={"apple is good"}
        />
      </div>
      <Footer />
    </>
  );
}
