import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reportsApi = createApi(
    {
        "reducerPath": "api",
            baseQuery: fetchBaseQuery({baseUrl:"https://random-data-api.com/api/v2/"}),
            endpoints: (builder) => ({
                getReportsData: builder.query({
                    query: () => ({
                        url:"beers",
                        method: "GET",
                    })
            })
        })
    }
)

export const { useGetReportsDataQuery } = reportsApi