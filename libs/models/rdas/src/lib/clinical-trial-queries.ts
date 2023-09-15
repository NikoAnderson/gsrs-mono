import { gql } from "apollo-angular";

export const TRIALFIELDS = `
fragment trialFields on ClinicalTrial {
      briefTitle: BriefTitle
      officialTitle: OfficialTitle
      briefSummary: BriefSummary
      studyType: StudyType
      phase: Phase
      NCTId: NCTId
      completionDate: CompletionDate
      lastKnownStatus: LastKnownStatus
      lastUpdatePostDate: LastUpdatePostDate
      overallStatus: OverallStatus
      primaryCompletionDate: PrimaryCompletionDate
      resultsFirstPostDate: ResultsFirstPostDate
      interventions: hasInterventionInterventions {
        interventionName: InterventionName
        interventionType: InterventionType
      }
      paticipants: hasParticipantInfoParticipants {
        eligibilityCriteria: EligibilityCriteria
      }
      studyDesigns: hasStudyDesignStudyDesigns {
        designAllocation: DesignAllocation
        designInterventionModel: DesignInterventionModel
        designInterventionModelDescription: DesignInterventionModelDescription
        designMasking: DesignMasking
        designMaskingDescription: DesignMaskingDescription
        designObservationalModel: DesignObservationalModel
        designPrimaryPurpose: DesignPrimaryPurpose
        designTimePerspective: DesignTimePerspective
        detailedDescription: DetailedDescription
        #    primaryOutcomeDescription: PrimaryOutcomeDescription
        #    primaryOutcomeMeasure: PrimaryOutcomeMeasure
        #    primaryOutcomeTimeFrame: PrimaryOutcomeTimeFrame
        samplingMethod: SamplingMethod
      }
      locations: inLocationsLocations {
        locationCity: LocationCity
        locationCountry: LocationCountry
        locationFacility: LocationFacility
        locationState: LocationState
        locationStatus: LocationStatus
        locationZip: LocationZip
      }
      conditions: investigatesConditionConditions {
        condition: Condition
      }
      references: referencesisAbout {
        referenceCitation: ReferenceCitation
        referencePMID: ReferencePMID
        referenceType: ReferenceType
      }
      sponsors: sponsoredBySponsors {
        leadSponsorClass: LeadSponsorClass
        leadSponsorName: LeadSponsorName
      }
}
`



export const FETCHTRIALDETAILS = gql`
  query ClinicalTrials($ctwhere: ClinicalTrialWhere) {
    clinicalTrials(where: $ctwhere) {
     ...trialFields
    }
  }
  ${TRIALFIELDS}
`
export const FETCHTRIALSQUERY = gql`
query ClinicalTrialsList($gardId: String, $offset: Int, $limit: Int) {
  clinicalTrials: clinicalTrialsByGardList(gardId: $gardId, offset: $offset, limit: $limit) {
    ...trialFields
  }
  count: clinicalTrialsByGardCount(gardId: $gardId)
}
${TRIALFIELDS}
`

export const FETCHTRIALSQUERYOLD = gql`
  query ClinicalTrials($ctwhere: ClinicalTrialWhere, $ctoptions: ClinicalTrialOptions) {
    clinicalTrials(where: $ctwhere, options: $ctoptions) {
     ...trialFields
    }
    clinicalTrialsAggregate(where: $ctwhere) {
      count
    }
  }
  ${TRIALFIELDS}
`

export const TRIALDETAILSVARIABLES: {
  ctwhere: {
    NCTId: null | undefined | string;

  }
} = {
  ctwhere: {
    NCTId: ""
  }
}

export const FETCHTRIALSVARIABLES: {
  gardId?: string,
  limit?: number,
  offset?: number
} = {
  limit: 10,
  offset: 0
}
export const FETCHTRIALSVARIABLESOLD: {
  ctwhere?: {
    investigatesConditionConditions_SINGLE?: {
      hasAnnotationAnnotationsConnection_SINGLE?: {
        node?: {
          mappedToGardGards_SINGLE?: {
            GardId?: null | string
          }
        }
      }
    }
  },
  ctoptions: {
    sort: [{StartDate?: string }],
    limit?: number,
    offset?: number
  },
} = {
  ctwhere: {
    investigatesConditionConditions_SINGLE: {
      hasAnnotationAnnotationsConnection_SINGLE: {
        node: {
          mappedToGardGards_SINGLE: {
            GardId: null
          }
        }
      }
      }
    },
  ctoptions: {
    sort: [
      {
        StartDate: "DESC"
      }
    ],
    limit: 10,
    offset: 0
  },
}
