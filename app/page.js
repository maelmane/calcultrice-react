import { Wrapper } from "./components/Wrapper";
import {Écran} from "./components/Écran";
import { BoxBoutons } from "./components/BoxBoutons";
import { Bouton } from "./components/Bouton";
import { CalcProvider } from "./context/CalculContext";

const btnValeurs = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9 , "x"],
  [4, 5, 6 , "+"],
  [1, 2, 3 , "-"],
  [0, ".", "="],

];

export default function Home() {
  return (
    <div>
      <h1 className="my-14 text-center text-3xl font-bold uppercase tracking-widest text-cyan-950" >Calculatrice</h1>
      <CalcProvider>
        <Wrapper>
          <Écran />
          <BoxBoutons>
            {btnValeurs.flat().map((btn, index) => (
              <Bouton
                value={btn}
                key={index}
              />
            ))}
          </BoxBoutons>
        </Wrapper>
      </CalcProvider>
      <h1 className="my-14 text-center text-3xl font-bold uppercase tracking-widest text-cyan-950" >par Maël Mane</h1>
    </div>
  );
}
