// import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { fetchFail, fetchStart  } from "../features/authSlice"
import { getSuccess } from "../features/stockSlice"
// import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice"

import useAxios from "./useAxios"

const useStockCall = () => {
  const dispatch = useDispatch()

  const { axiosWithToken } = useAxios()

  const getStockData = async (url) => {
    dispatch(fetchStart())
    try {
    
      const { data } = await axiosWithToken(`stock/${url}/`)
      console.log(data)
      dispatch(getSuccess({ data, url }))
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  }

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`)
    //   toastSuccessNotify(`${url} successfuly deleted`)
      getStockData(url)
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    //   toastErrorNotify(`${url} can not be deleted`)
    }
  }

  const postStockData = async (url, info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`stock/${url}/`, info)
    //   toastSuccessNotify(`${url} successfuly posted`)
      getStockData(url)
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    //   toastErrorNotify(`${url} can not be posted`)
    }
  }

  const putStockData = async (url, info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info)
    //   toastSuccessNotify(`${url} successfuly updated`)
      getStockData(url)
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    //   toastErrorNotify(`${url} can not be updated`)
    }
  }

  return { getStockData, deleteStockData, postStockData, putStockData }
}

export default useStockCall
