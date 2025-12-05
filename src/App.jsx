import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // before animation
      animate={{ opacity: 1, x: 0 }} // after animation
      transition={{ duration: 1 }}
      className="w-[200px] h-[200px] bg-blue-300 border-2 border-blue-400 m-3"
      // style={{
      //   width: "200px",
      //   height: "200px",
      //   background: "lightblue",
      //   borderRadius: "10px",
      //   margin: "50px auto",
      // }}
    >
      Hello world
    </motion.div>
  );
}

export default App;
