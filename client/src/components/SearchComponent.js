import React, { Component } from 'react'
import {FormControl, FormGroup, Form, Col, ControlLabel} from 'react-bootstrap'
export default class SearchComponent extends Component {
  handleStudentId(e) {
    if(e.key === 'Enter')
    this.props.fetchStudentsById(e.target.value)
  }
  handleStudentClass(e) {
    if(e.key === 'Enter')
    this.props.fetchStudentsByClass(e.target.value)
  }
  handleStudentName(e) {
    if(e.key === 'Enter')
    this.props.fetchStudentsByName(e.target.value)
  }
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="classStudent">
          <Col componentClass={ControlLabel} sm={2}>
            Tìm theo lớp sinh viên
          </Col>
          <Col sm={3}>
            <FormControl type="text"  placeholder="Nhập tên lớp sinh viên" onKeyUp={this.handleStudentClass.bind(this)} />
          </Col>
        </FormGroup>
        <FormGroup controlId="studentId">
          <Col componentClass={ControlLabel} sm={2}>
            Tìm theo MSSV
          </Col>
          <Col sm={3}>
            <FormControl type="text"  placeholder="Nhập MSSV" onKeyUp={this.handleStudentId.bind(this)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="studentClass">
          <Col componentClass={ControlLabel} sm={2}>
            Tìm theo tên sinh viên
          </Col>
          <Col sm={3}>
            <FormControl type="text" placeholder="Nhập tên sinh viên" onKeyUp={this.handleStudentName.bind(this)}/>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}