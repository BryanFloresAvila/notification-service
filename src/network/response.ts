type ExpressResponse = import('express').Response
interface ResponseProps {
  error: boolean
  message: unknown
  res: ExpressResponse
  status: number
}

const response = ({ error, message, res, status }: ResponseProps): void => {
  res.status(status).send({ error, message })
}

export { response }
