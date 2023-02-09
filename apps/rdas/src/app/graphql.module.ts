import {NgModule} from '@angular/core';
import { ApolloModule, APOLLO_NAMED_OPTIONS, NamedOptions } from "apollo-angular";
import { InMemoryCache } from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { environment } from "../environments/environment";

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS, // <-- Different from standard initialization
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          diseases: /* <-- this settings will be saved as default client */ {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: `${environment.baseUrl}:4000`,
            }),
          },
          articles: /* <-- this settings will be saved as default client */ {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: `${environment.baseUrl}:4001`,
            }),
          },
          projects: {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: `${environment.baseUrl}:4002`,
            }),
          },
          trials: /* <-- these settings will be saved by name: newClientName */ {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: `${environment.baseUrl}:4003`,
            }),
          }
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
