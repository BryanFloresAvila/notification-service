import { AxiosResponse } from 'axios'
import { DtoNotification } from 'dto-interfaces'
import { instanceAxios } from 'lib/axios'

const sendNotification = async (
  data: DtoNotification
): Promise<AxiosResponse> => {
  return instanceAxios.post('/email/sendEmail', data)
}

export { sendNotification }
