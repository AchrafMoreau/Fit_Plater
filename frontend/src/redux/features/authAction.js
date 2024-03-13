import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const HOST = "http://127.0.0.1:8000";

export const registerUser = createAsyncThunk(
    'user/register',
    async (formdata, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
  
        await axios.post(
          `${HOST}/api/register`,
            {...formdata},
          config
        )
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )