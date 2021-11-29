import cors from 'cors'

export const beforeParser = async (app) => {
  app.use(cors())
}