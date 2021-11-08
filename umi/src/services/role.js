import request from '@/utils/request';

export async function getRole(params) {
  return request('/power/role', {
    method: 'GET',
    data: params,
  });
}
export async function delRole(params) {
  return request('/power/role', {
    method: 'DELETE',
    data: params,
  });
}
export async function creRole(params) {
  // return request('/power/role', params);
  let id = params['id'];
  return request('/power/role', {
    method: !!id?'PATCH':'POST',
    data: params,
  });
}
export default {
  getRole,
  delRole,
  creRole
}