import { defineMock, createDefineMock } from 'rspack-plugin-mock/helper'

export default defineMock([
  {
    url: '/api/test',
    response(req, res, next) {
      const { query, body, params, headers } = req

      res.setHeader('Content-Type', 'application/json')
      res.end(
        JSON.stringify({
          query,
          body,
          params,
        })
      )
    },
  },
])
