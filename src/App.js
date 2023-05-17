
import './App.css';
import {motion} from 'framer-motion'

function App() {
  return (
    <div className="App">
      <motion.div
      className="box"
      whileHover={{scale:1.1}}
      whileTap={{scale:0.8}}
    />
       
    </div>
  );
}

export default App;
