import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';

import genreOrCategoryRuducer from '../features/currentGenreOrCategory';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryRuducer,
  },
});
