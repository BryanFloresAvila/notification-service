import { DtoNotification } from 'dto-interfaces'
import { sendNotification } from '../lib'
import { errorHandling, GE, EFNotification, MFN } from './utils'
import { AxiosError } from 'axios'
class Notification {
  private notification: DtoNotification | null
  constructor(notification: DtoNotification | null = null) {
    this.notification = notification
  }

  public async sendNotification(): Promise<string> {
    try {
      const response = await sendNotification(
        this.notification as DtoNotification
      )
      if (response.status !== 200) return EFNotification.NOTIFICATION_SEND_ERROR

      return MFN.NOTIFICATION_SEND_SUCCESS
    } catch (err) {
      if (err instanceof AxiosError)
        return errorHandling(err, EFNotification.NOTIFICATION_SEND_ERROR)

      return errorHandling(err, GE.INTERNAL_SERVER_ERROR)
    }
  }
}

export { Notification }
