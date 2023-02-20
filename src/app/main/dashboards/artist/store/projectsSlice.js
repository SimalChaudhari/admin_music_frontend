import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProjects = createAsyncThunk(
  'artistApp/projects/getProjects',
  async () => {
    const response = await axios.get('/api/dashboards/project/projects');
    return response.data;
  }
);

const projectsAdapter = createEntityAdapter({});

export const {
  selectAll: selectProjects,
  selectEntities: selectProjectsEntities,
  selectById: selectProjectById,
} = projectsAdapter.getSelectors((state) => state.artistApp.projects);

const projectsSlice = createSlice({
  name: 'artistApp/projects',
  initialState: projectsAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getProjects.fulfilled]: projectsAdapter.setAll,
  },
});

export default projectsSlice.reducer;
