 import request from '../utils/request.js'
import { PAGE_SIZE } from '../constants'

export function fetch({ page = 1}){
  return request(`/api/users?_page=${page}$_limit=${ PAGE_SIZE }`);
}

/**
 * 根据id删除用户
 * @param id
 * @returns {Object}
 */
export function remove( id ) {
  return request(`/api/users/${id}`,{
    method: 'DELETE',
  })
}

export function patch(id, values) {
  return request(`/api/users/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}
