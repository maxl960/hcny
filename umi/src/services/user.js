import request from '@/utils/request';

export async function getUser(params) {
  return request('/power/user', {
    method: 'GET',
    data: params,
  });
}
export async function editUser(params) {
    return request('/user/edit', {
      method: 'PUT',
      data: params,
    });
}
export async function login(params) {
  return request('/user/login', {
    method: 'post',
    data: params,
  });
}
export async function register(params) {
  return request('/user/register', {
    method: 'post',
    data: params,
  });
}
export async function delUser(params) {
  return request('/user/del', {
    method: 'delete',
    data: params,
  });
}
export default {
  getUser,
  editUser,
  login,
  register
}