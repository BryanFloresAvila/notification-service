import httpErrors from 'http-errors'

import { EFNotification, GE, MFN } from './messages'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const errorHandling = (error: any, message?: string): never => {
  console.error(error)

  if (error instanceof httpErrors.HttpError) throw error
  throw new httpErrors.InternalServerError(message ?? error.message)
}

export { EFNotification, GE, MFN, errorHandling }
