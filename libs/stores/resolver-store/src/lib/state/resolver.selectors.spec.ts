import { ResolverEntity } from './resolver.models';
import {
  resolverAdapter,
  ResolverPartialState,
  initialResolverState,
} from './resolver.reducer';
import * as ResolverSelectors from './resolver.selectors';

describe('Resolver Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getResolverId = (it: ResolverEntity) => it.id;
  const createResolverEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    }) as ResolverEntity;

  let state: ResolverPartialState;

  beforeEach(() => {
    state = {
      resolver: resolverAdapter.setAll(
        [
          createResolverEntity('PRODUCT-AAA'),
          createResolverEntity('PRODUCT-BBB'),
          createResolverEntity('PRODUCT-CCC'),
        ],
        {
          ...initialResolverState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        },
      ),
    };
  });

  describe('Resolver Selectors', () => {
    it('selectAllResolver() should return the list of Resolver', () => {
      const results = ResolverSelectors.selectAllResolver(state);
      const selId = getResolverId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ResolverSelectors.selectEntity(state) as ResolverEntity;
      const selId = getResolverId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectResolverLoaded() should return the current "loaded" status', () => {
      const result = ResolverSelectors.selectResolverLoaded(state);

      expect(result).toBe(true);
    });

    it('selectResolverError() should return the current "error" state', () => {
      const result = ResolverSelectors.selectResolverError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
