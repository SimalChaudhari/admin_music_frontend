import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWidgets = createAsyncThunk('DashboardApp/widgets/getWidgets', async () => {
  const response = await axios.get('/api/dashboards/analytics/widgets');

  const data = await response.data;

  return data;
});

const widgetsSlice = createSlice({
  name: 'DashboardApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ DashboardApp }) => DashboardApp.widgets;

export default widgetsSlice.reducer;
