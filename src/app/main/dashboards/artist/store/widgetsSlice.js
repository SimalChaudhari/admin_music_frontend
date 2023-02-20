import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWidgets = createAsyncThunk('artistApp/widgets/getWidgets', async () => {
  const response = await axios.get('/api/dashboards/project/widgets');
  const data = await response.data;

  return data;
});

const widgetsSlice = createSlice({
  name: 'artistApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ artistApp }) => artistApp.widgets;

export default widgetsSlice.reducer;
