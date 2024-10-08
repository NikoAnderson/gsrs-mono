import { gql } from 'apollo-angular';

//pubType

export const ARTICLEFIELDS = `
  fragment articleFields on Article {
    abstractText
    affiliation
    citedByCount
    doi
    firstPublicationDate
    isEpi
    pubmed_id
    source
    title
    authorsWrote {
                firstName
                lastName
                fullName
            }
  }
`;

export const FETCHARTICLESQUERY = gql`
  query Articles(
    $gardWhere: GARDWhere
    $articleWhere: ArticleWhere
    $articleOptions: ArticleOptions
  ) {
    articles: gards(where: $gardWhere) {
      _count: mentionedInArticlesAggregate(where: $articleWhere) {
        count
      }

      articles: mentionedInArticles(
        options: $articleOptions
        where: $articleWhere
      ) {
        ...articleFields
      }
    }
  }
  ${ARTICLEFIELDS}
`;

class ARTICLEVARIABLES {
  gardWhere!: { GardId: undefined | string };
  articleWhere!: {
    isEpi?: null | string | boolean;
    publicationYear_IN?: unknown;
  };
  articleOptions!: {
    limit: number;
    offset?: number;
    sort: [{ firstPublicationDate?: string }];
  };
  meshTermsMeshTermForArticleOptions?: { limit?: number };
}

export const EPIARTICLES: ARTICLEVARIABLES = {
  gardWhere: { GardId: undefined },
  articleWhere: {
    isEpi: true,
    publicationYear_IN: undefined
  },
  articleOptions: {
    limit: 10,
    sort: [
      {
        firstPublicationDate: 'DESC',
      },
    ],
  },
};
export const NONEPIARTICLES: ARTICLEVARIABLES = {
  gardWhere: { GardId: undefined },
  articleWhere: {
    isEpi: false,
    publicationYear_IN: undefined
  },
  articleOptions: {
    limit: 10,
    sort: [
      {
        firstPublicationDate: 'DESC',
      },
    ],
  },
};

export const FETCHARTICLECOUNTS = gql`
  query ArticleCount($diseasesWhere: GARDWhere) {
    diseases(where: $diseasesWhere) {
      GardId
      mentionedInArticlesAggregate {
        count
      }
    }
  }
`;

export const FETCHARTICLEDETAILS = gql`
  query ArticleDetails($articleWhere: ArticleWhere) {
    articles(where: $articleWhere) {
      ...articleFields
      authorsWrote {
        firstName
        lastName
        fullName
      }
      epidemiologies: epidemiologyAnnotationsEpidemiologyAnnotationFor {
        epidemiology_rate
        epidemiology_type
        ethnicity
        location
        sex
      }
      journals: appearsInJournalVolumes {
        dateOfPublication
        printPublicationDate
        volume
        _title: contentOfJournals {
          title
        }
      }
      diseases: gardsmentionedIn {
        gardId: GardId
        name: GardName
      }
      sources: fullTextUrlsContentFor {
        availability
        documentStyle
        site
        url
      }
      keywords: keywordsKeywordFor {
        keyword
      }
      meshTerms: meshTermsMeshTermFor {
        descriptorName
        #  majorTopic_YN
        _qualifier: meshQualifiersMeshQualifierFor {
          abbreviation
          qualifierName
        }
      }
      annotations: pubtatorAnnotationsAnnotationFor {
        infons_identifier
        infons_type
        type
        text
      }
      substances: substancesSubstanceAnnotatedByPubmed {
        name
        registryNumber
      }
    }
  }
  ${ARTICLEFIELDS}
`;

export const ARTICLEDETAILSVARIABLES: {
  articleWhere: {
    pubmed_id: null | undefined | string;
  };
} = {
  articleWhere: {
    pubmed_id: '',
  },
};

export const ARTICLEFILTERS = gql`
  query ArticleFilters(
  $gardId: String
) {
  countsByYear(gardId: $gardId) {
    term
    count
    label
  }
}
`;
