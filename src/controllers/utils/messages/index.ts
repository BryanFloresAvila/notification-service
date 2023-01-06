import { EFN as EFNotification, MFN } from './notification'

enum GenericErrors {
  INTERNAL_SERVER_ERROR = 'Something went wrong',
  NOT_FOUND = 'Invalid credentials'
}

export { EFNotification, GenericErrors as GE, MFN }
