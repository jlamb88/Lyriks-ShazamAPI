import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamAPI = createApi({
    reducerPath: 'shazamAPI',
    baseQuery: fetchBaseQuery({
        baseURL: 'https://shazam8.p.rapidapi.com',
        prepareHeaders: () => {
            headers.set('x-RapidAPI-Key', '913df6397fmsh03cd288e42a6810p17e0eejsnef8826802277')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getCharts: builder.query({ query: () => '/track/top/country' })
    }),
});

export const {
    useGetChartsQuery
} = shazamAPI