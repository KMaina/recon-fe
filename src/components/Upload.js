import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, Row, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Upload = ({setReports}) => {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append('files', data.file_1[0])
    formData.append('files', data.file_2[0])

    axios.post('https://ken-recon-backend.herokuapp.com/process_csv', formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    .then(
      (res) => {
        setReports(res.data.result)
      })
    .catch(
      (error) => {
        console.log(error)
      }
    )
  }

  const handleClear = () => {
    axios.post('https://ken-recon-backend.herokuapp.com/clear_data')
    .then(
      (res) => {
        setReports([])
      })
    .catch(
        (error) => {
          console.log(error)
      }
    )
  }

  return (
    
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group controlId="file1Input">
          <Form.Label>Select file 1</Form.Label><br />
          <p><input {...register("file_1", {required: true})} multiple type="file" accept=".csv" /></p>
        </Form.Group>
        <Form.Group controlId="file2Input">
          <Form.Label>Select file 2</Form.Label><br />
          <p><input {...register("file_2", {required: true})} multiple type="file" accept=".csv" /></p>
        </Form.Group>
      </Row>
      <Stack direction="horizontal" gap={3}>
        <Button type="submit">
          Compare
        </Button>
        <Button type="button" onClick={() => handleClear()} >
          Clear
        </Button>
      </Stack>
    </Form>
  )
}

export default Upload