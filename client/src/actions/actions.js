import * as types from './types'
export function fetchStudentsById(id) {
  return {
    type: types.FETCH_STUDENT_REQUEST,
    key: 'id',
    val: id
  }
}

export function fetchStudentsByClass(className) {
  return {
    type: types.FETCH_STUDENT_REQUEST,
    key: 'class',
    val: className
  }
}

export function fetchStudentsByName(name) {
  return {
    type: types.FETCH_STUDENT_REQUEST,
    key: 'name',
    val: name
  }
}

export function fetchStudentsByPage(key, val, page) {
  return {
    type: types.FETCH_STUDENT_REQUEST,
    key,
    val,
    page
  }
}
