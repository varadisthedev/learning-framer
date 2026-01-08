import "./App.css";
import { motion } from "framer-motion";
import { Tappable } from "./components/Tappable";
import { Card } from "./components/Card";
import { PulseCircle } from "./elements/PulseCircle";
import { FramerVarients } from "./components/FramerVarients";
import { test_component } from "./components/test_component";
import Header from "./components/Header";
// ease: easeIn easeOut anticipate

function App() {
  return (
    <StatCard />
    // <div className="flex flex-col justify-between items-center m-36">
    //   <motion.div
    //     initial={{ opacity: 0, x: -100, rotate: -45 }} // before animation
    //     animate={{ opacity: 1, x: 0, rotate: 0 }} // after animation
    //     transition={{ duration: 0.8, ease: "easeIn" }}
    //     className="w-[200px] h-[200px] bg-blue-300 border-2 border-blue-400 m-3"
    //     // style={{
    //     //   width: "200px",
    //     //   height: "200px",
    //     //   background: "lightblue",
    //     //   borderRadius: "10px",
    //     //   margin: "50px auto",
    //     // }}
    //   >
    //     Hello world
    //   </motion.div>

    //   <motion.div
    //     initial={{ x: 100, opacity: 0 }}
    //     animate={{ x: 50, opacity: 1 }}
    //     transition={{ duration: 0.8, ease: "easeIn" }}
    //     className="bg-amber-600 border-2 border-amber-700 rounded-sm p-4 w-[200px] h-[200px] m-3"
    //   >
    //     <h3 className="text-2xl font-extrabold text-white">HELLO AGAIN</h3>
    //   </motion.div>

    //   <Tappable />
    //   <Card
    //     title="HELLO"
    //     children="hello , this is a sample text you can add, as much text as you need here"
    //   />

    //   <PulseCircle />
    //   <FramerVarients />
    //   <test_component />

    //   <Header />
    //</div>
  );
}

export default App;
