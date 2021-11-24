import { createReducer } from '@reduxjs/toolkit';
import { FilmsData } from '../../types/state';
import { setFavoriteFilms, setFilm, setFilmReviews, setFilms } from '../action';
import { setPromoFilm, setSimilarFilms } from './../action';

const initialState: FilmsData = {
  filmsList: [],
  film: [][0],
  favoriteFilms: [],
  similarFilms: [],
  filmReviews: [],
  promoFilm: [][0],
  isLoadData: true,
};


export const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilms, (state, action) => {
      const { films } = action.payload;
      state.filmsList = films;
      state.isLoadData = false;
    })
    .addCase(setFilm, (state, action) => {
      const { film } = action.payload;
      state.film = film;
      state.isLoadData = false;
    })
    .addCase(setFavoriteFilms, (state, action) => {
      const { films } = action.payload;
      state.favoriteFilms = films;
      state.isLoadData = false;
    })
    .addCase(setPromoFilm, (state, action) => {
      const { film } = action.payload;
      state.promoFilm = film;
      state.isLoadData = false;
    })
    .addCase(setFilmReviews, (state, action) => {
      const { reviews } = action.payload;
      state.filmReviews = reviews;
      state.isLoadData = false;
    })
    .addCase(setSimilarFilms, (state, action) => {
      const { films } = action.payload;
      state.similarFilms = films;
      state.isLoadData = false;
    });
});
