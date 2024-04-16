import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from '../../config/Axios'

export const getColorsService = createAsyncThunk(
    'get/colors',
    // eslint-disable-next-line no-unused-vars
    async function (_) {
        try {
            let res = await Axios({
                method: 'get',
                url: '/?count=5',
            });
            return res.data.colors;
        } catch (err) {
            console.log("Error in fetching colors**", err);
        }
    }
)