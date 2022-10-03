import logo from './logo.svg';
import './App.css';
import './styles/index.scss';
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import { DatePicker, Space } from 'antd';
import Select from 'react-select';

import 'antd/dist/antd.css';
import './styles/create.scss'

function Create() {
  return (
    <>
      <main>
        <div className=''>
          <Row className=''>
            <Col className='col_1 d-flex flex-row justify-content-center align-items-center'>
              <center>
                <div className='h2 '>
                  <b>Create Event</b>
                </div>
              </center>
            </Col>
            <Col className='mt-3'>
              <Form>
                <FormGroup>
                  <Label>Event Name</Label>
                  <input
                    type='text'
                    className='form-control bg-light p-2'
                    name='event_name'
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Host Name</Label>
                  <input
                    type='text'
                    className='form-control bg-light p-2'
                    name='host_name'
                  />
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label>Start Date</Label>
                  </Row>
                  <DatePicker picker='day' />
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label>End Date</Label>
                  </Row>{' '}
                  <DatePicker picker='day' />
                </FormGroup>
                <FormGroup>
                  <Label>Location</Label>
                  <Select />
                </FormGroup>
                <FormGroup>
                  <Label>Event Photo</Label>
                  <input
                    type='text'
                    className='form-control bg-light p-2'
                    name='end_date'
                  />
                </FormGroup>
                <FormGroup>
                  <button className='btn mt-4 btn_create'>Next</button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
}

export default Create;
