import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWidgets = createAsyncThunk('usersApp/widgets/getWidgets', async () => {
  const response = await axios.get('/api/dashboards/project/widgets');
  const data = await response.data;

  return data;
});

const widgetsSlice = createSlice({
  name: 'usersApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ usersApp }) => usersApp.widgets;

export default widgetsSlice.reducer;
