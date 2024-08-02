import CloudsOverlay from "./CloudsOverlay/CloudsOverlay";
import Sun from "./Sun/Sun";
import Terrain from "./Terrain/Terrain";

interface Props {
  progress: number;
}

const Composition = ({ progress }: Props) => {
  const step = Math.floor(progress / 25);

  return (
    <>
      {step > 0 && <Sun />}

      {step > 1 && <CloudsOverlay />}

      {step > 2 && <Terrain showFlowers={step > 3 ? true : false} />}
    </>
  );
};

export default Composition;
