import req from '@/utils/req'

export function getTemplate(data) {
  return req('/test', { method: 'GET', params: data })
}