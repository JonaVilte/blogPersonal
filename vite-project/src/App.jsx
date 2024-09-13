import Header from "./components/Header";
import Footer from "./components/Footer";
import { Post } from "./components/Post";
import { useEffect, useState } from "react";
import supabase from "../lib - helper/supabaseClient";

export default function App() {
  const [user, setUser] = useEffect(null);

  useEffect(() => {
    const getSession = async () => {
      ///destructuracion
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };

    getSession();
  }, []);

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.singInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Header />
      <button onClick={handleLogin}>inicio sesion</button>
      <Footer />
      <Post
        titulo={"hes ball"}
        description={"good night"}
        link={"./image/cerezo.jpeg"}
        parrafo={"apple is good"}
      />
    </>
  );
}