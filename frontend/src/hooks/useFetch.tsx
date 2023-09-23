import React, { useEffect, useState } from 'react'
import Axios from '../api/axios'

const useFetch = ({ dependencies, url }: { dependencies: any, url: string }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await Axios.get(url)
                    setData(response.data)
                } catch (error: any) {
                    setError(error?.message || error)
                } finally {
                    setLoading(false)
                }
            }
        )()

    }, [...dependencies])

    return {
        loading,
        data,
        error
    }
}

export default useFetch