import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
    ChangeGenre = 'film/changeGenre',
    SetFilms = 'film/setFilms',
    ChangeIsLoadData = 'data/changeIsLoadData',
    RequireAuthorization = 'user/requireAuthorization',
    RequireLogout = 'user/requireLogout'
}


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>
