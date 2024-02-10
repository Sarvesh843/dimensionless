// import './App.css';
import {
  ChakraProvider, Flex
} from "@chakra-ui/react";
import LeftBar from "./Components/LeftBar";
import { SearchBar } from "./Components/Searchbar";
import DataFlow from "./Components/DataFlow";
import PieChart from "./Components/PieChart";
import News from "./Components/News";
import Topten from "./Components/Topten";



function App() {
  return (
    <ChakraProvider >
      <LeftBar />
      <SearchBar />
      <Flex marginLeft="350px" marginTop="50px" flexWrap="wrap">
      <DataFlow />
      <PieChart />
      <News />
      <Topten />

      </Flex>
 
      
    </ChakraProvider>
  );
}

export default App;
