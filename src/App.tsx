import Background from "./components/Background";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";

function App() {
    const [jobItems, setJobItems] = useState([]);

    const [searchText, setSearchText] = useState('');

    // This is how the data fetching is used in the use Effects
    useEffect(() => {
        if (!searchText) return;
        const fetchData = async () => {
            const response = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`);
            const data = await response.json();
            setJobItems(data.jobItems);
        }
        fetchData();
    }, [searchText]);

  return (
      <>
        <Background />

        <Header  searchText={searchText}  setSearchText={setSearchText} />

        <Container  jobItems={jobItems} />

        <Footer />
      </>
  );
}

export default App;
