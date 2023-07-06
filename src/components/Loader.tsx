import { Html, useProgress } from "@react-three/drei";
import solarsystem from "../assets/solar-system.svg";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="opacity-30 flex flex-col">
        <img
          src={solarsystem}
          alt="loader"
          className="animate-spin text-white"
        />

        <span className="canvas-load">
          <p
            style={{
              fontSize: 14,
              color: "#f1f1f1",
              fontWeight: 800,
              marginTop: 40,
            }}
          >
            {progress.toFixed(2)}%
          </p>
        </span>
      </div>
    </Html>
  );
};

export default Loader;
