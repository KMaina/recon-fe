import Upload from './components/Upload'
import Report from './components/Report'
import List from './components/List'
import {Container} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [reports, setReports] = useState([])
  useEffect(() => {

    axios.get('https://ken-recon-backend.herokuapp.com/comparison_results/')
    .then(
      (res) => {
        const allReports = res.data.result
        setReports((prevState) => ([...allReports]))
      }
    )
    .catch(
      (error) => {
        console.log(error)
      }
    )
  }, [])

  return (
    <Container>
      <Upload setReports={setReports} />
      <Report reports={reports} /> 
      <List reports={reports} />
    </Container>
  );
}

export default App;
