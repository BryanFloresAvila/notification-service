import { DtoNotification } from 'dto-interfaces'
import { sendNotification } from 'lib/services'

class Notification {
  private notification: DtoNotification | null
  constructor(notification: DtoNotification | null = null) {
    this.notification = notification
  }

  public async sendNotification() {
    if (this.notification)
      await sendNotification(this.notification)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
  }
}

export { Notification }
