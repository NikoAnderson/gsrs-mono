import { Disease, DiseaseNode, Phenotype } from "@ncats-frontend-library/models/rdas";
import { Page } from "@ncats-frontend-library/models/utils";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DiseasesActions from './diseases.actions';

export const DISEASES_FEATURE_KEY = 'diseases';

export interface State extends EntityState<Disease> {
  selectedId?: string | number; // which Diseases record has been selected
  loaded: boolean; // has the Diseases list been loaded
  error?: string | null; // last known error (if any)
  typeahead?: Disease[];
  disease?: Disease;
  page?: Page;
  diseases?: Disease[];
  tree?: DiseaseNode[];
  phenotypes?: {term: string, count: number}[]
}

export interface DiseasesPartialState {
  readonly [DISEASES_FEATURE_KEY]: State;
}

export const diseasesAdapter: EntityAdapter<Disease> =
  createEntityAdapter<Disease>({
    selectId: disease => disease.gardId
  });

export const initialState: State = diseasesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  error: 'No Error Available',
  typeahead: [],
  phenotypes: []
});

export const diseasesReducer = createReducer(
  initialState,
  on(DiseasesActions.init,
    DiseasesActions.loadDiseases,
    DiseasesActions.fetchDisease,
    DiseasesActions.loading,
    (state) => ({...state, loaded: false, error: null})),

  on(DiseasesActions.loadDiseaseTreeSuccess, (state, {diseases}) =>({
    ...state, tree: diseases
  })),

  on(DiseasesActions.loadDiseasesSuccess, (state, { diseases, page}) =>
       diseasesAdapter.setAll(diseases, {...state, page: page, loaded: true})
  ),

  on(DiseasesActions.fetchDiseaseSuccess, (state, { disease }) =>
    diseasesAdapter.setOne(disease, {...state, selectedId: disease.gardId, loaded: true})
  ),

  on(DiseasesActions.searchDiseasesSuccess, (state, { typeahead }) =>
       ({...state, typeahead: typeahead, loaded: true})
  ),

  on(DiseasesActions.fetchPhenotypesSuccess, (state, { phenotypes }) =>
       ({...state, phenotypes: phenotypes, loaded: true})
  ),

  on(DiseasesActions.clearTypeahead, (state) =>
       ({...state, typeahead: [], loaded: true})
  ),

  on(
    DiseasesActions.loadDiseasesFailure,
    DiseasesActions.searchDiseasesFailure,
    DiseasesActions.fetchDiseaseFailure,
    DiseasesActions.fetchPhenotypesFailure,
    DiseasesActions.loadDiseaseTreeFailure,
    (state, { error }) => ({
      ...state,
      error,
    }))
);

export function reducer(state: State | undefined, action: Action) {
  return diseasesReducer(state, action);
}
