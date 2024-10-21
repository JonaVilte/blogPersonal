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
      <Header/>
      {user ? (
        <div className="posicionButton animate__animated animate__bounceIn">
          <h1>Authenticated</h1>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div className="posicionButton animate__animated animate__bounceIn">
          <button onClick={login}>login Github</button>
        </div>
      )}
      <div>
        <Post
          titulo={"Un día lindo"}
          description={"Un hermoso rio"}
          link={"./image/rio.jpg"}
          parrafo={"Imagen tomada en nuestro campamento, un día hermoso al lodo del rio con un aire refrescante, fue divertido o eso creo la pasamos toda la mañana ahí meditando y opinando sobre algunas leyes importantes para nosotros. Almorzamos pollo a la parilla, mientras comiamos no dejaba de pensar en irme a dormir."}
        />
      </div>
      <div>
        <Post
          titulo={"Gato banana"}
          description={"Un cato con una banana en la cabeza"}
          link={"./image/gatoBanana.jpg"}
          parrafo={"Hola, mi nombre es tornado, mi amo dejo su celular desbloqueado asi que aproveche para postear esto, como veran tengo una cascara de banana en mi cabeza eso se debe a que mi amo me la tiro y cayo en mi cabeza, se que no fue intencional seguro me la tiro para que jugara con él ya que el me ama como yo lo amo. "}
        />
      </div>
      <div>
        <Post
          titulo={"hes ball"}
          description={"good night"}
          link={"./image/cerezo.jpeg"}
          parrafo={"apple is good"}
        />
      </div>
      <div className="centrarTodo animate__animated  animate__bounceInLeft">
        <div className='pelis marg'>
          <p className="title">Pelicualas favoritas</p>
          <img src="./image/calabazaMagica.jpg" alt="" />
          <img src="./image/robotSalvaje.webp" alt="" />
          <img src="./image/cars2.jpg" alt="" />
          <img src="./image/Shrek.jpg" alt="" />
          <img src="./image/Chihiro.webp" alt="" />
          <img src="./image/interestelar.jpg" alt="" />
          <img src="./image/jurassic.jpg" alt="" />
          <img src="./image/Spiderman.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
