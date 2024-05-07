// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};
import 'jest-preset-angular/setup-jest';


export const TOOLSTATE = {
  ifxTools: {
    selectedId: 'qhts-data-browser',
    ids: [
      'qhts-data-browser',
      'qhts-heatmap-browser',
      'qhts-plate-browser',
      'qhts-sample-client',
      'ncatsfind-excel',
      'predictor',
      'molecular-diagnosis-system',
      'gsrs',
      'shiny-apps',
      'qhts-tools',
      'raslseq-mapper',
      'canvass',
      'tox21-portal',
      'lychi',
      'scaffold-hopper',
      'ncatsfind-resolver',
      'renderer',
      'pcfp',
      'adme-web',
      'adme-loader',
      'curve',
      'pubchem-deposition',
      'fragment-activity-profiler',
      'overlap',
      'similarity-',
      'bioplanet',
      'informatics-apis',
      'ncgc-assay-tool',
      'iqc-convert',
      'chemkit',
      null
    ],
      entities: {
      'qhts-data-browser': {
        toolName: 'qHTS Data Browser',
          toolUrl: 'qhts-data-browser',
          category: 'qhts data',
          contact: 'Yuhong Wang',
          description: ' This application provides access to all qHTS data. It includes a flexible query tool that allows you to combine searches across qHTS screens, validation runs, sample lists, and compound libraries. Chemical substructure and similarity searching abilities are also available. This tool also includes a qHTS spreadsheet for data browsing, visualization of titration curves, chemical structures, multi-channel and kinetic data.',
          toolType: 'java webstart app',
          url: 'http://qhts/ws/qhtsclient2.jnlp',
          'public': 'false',
          audience: 'Data Scientist | Biologist | Chemist',
          codebase: 'http://qhts/ws/qhtsclient.jnlp',
          image: 'true',
          component: 'QhtsDataBrowserComponent'
      },
      'qhts-heatmap-browser': {
        toolName: 'qHTS Heatmap Browser',
          toolUrl: 'qhts-heatmap-browser',
          category: 'qhts data',
          contact: 'Dac-Trung Nguyen',
          description: 'This heatmap tool provides rapid viewing of assay profiles on compounds. It has several features such as ability to sort heatmap by compound similarity and/or activity profiles of selected assays. Selecting individual hetamap cells provides compound structure and associated qHTS curves.',
          toolType: 'java webstart app',
          url: 'http://qhts/ws/qhts_heatmap.jnlp',
          'public': 'false',
          audience: 'Data Scientist | Biologist | Chemist',
          image: 'true',
          component: 'QhtsHeatmapBrowserComponent'
      },
      'qhts-plate-browser': {
        toolName: 'qHTS Plate Browser',
          toolUrl: 'qhts-plate-browser',
          category: 'qhts data',
          contact: 'Yuhong Wang',
          description: 'Tool to provide performance stats of qHTS screens\' assay plates. This application allows you to query across any validation or primary screen runs. You can browse or export standard plate statistics, and there is a heatmap visualization to give summarized views of normalized and background-corrected qHTS data.',
          toolType: 'java webstart app',
          url: 'http://qhts/ws/plateclient2.jnlp',
          codebase: 'false',
          publicCodebase: 'false',
          image: '\'Data Scientist',
          component: ' Biologist'
      },
      'qhts-sample-client': {
        toolName: 'qHTS Sample Client',
          toolUrl: 'qhts-sample-client',
          category: 'NCGC compounds',
          contact: 'Yuhong Wang',
          description: 'This application provides access to all chemical structure info of NCGC sample collections.',
          toolType: 'java webstart app',
          url: 'http://qhts/ws/ncgc_sample.jnlp',
          'public': 'false',
          audience: 'Data Scientist | Biologist | Chemist',
          image: 'true',
          component: 'QhtsSampleClientComponent'
      },
      'ncatsfind-excel': {
        toolName: 'NCATSFind Excel',
          toolUrl: 'ncatsfind-excel',
          category: 'chemistry',
          contact: 'Tyler Peryea',
          description: 'Resolver and standardizer for names, structures, and chemical properties',
          toolType: 'Excel Plugin',
          'public': 'false',
          audience: 'Data Scientist | Biologist | Chemist',
          codebase: 'https://github.com/ncats/NCATSFindExcel',
          publicCodebase: 'false',
          image: 'true',
          component: 'NcatsFindExcelComponent'
      },
      predictor: {
        toolName: 'Predictor',
          toolUrl: 'predictor',
          category: 'QSAR models',
          contact: 'Alexey Zakharov | Tongan Zhao',
          description: 'QSAR models for targets and ADMET predictions',
          toolType: 'website',
          url: 'https://predictor.ncats.io',
          'public': 'true',
          audience: 'Data Scientist | Biologist | Chemist',
          publicCodebase: 'true',
          image: 'true'
      },
      'molecular-diagnosis-system': {
        toolName: 'Molecular Diagnosis System',
          toolUrl: 'molecular-diagnosis-system',
          category: 'ADMET Predictor',
          contact: 'Hongmao Sun | Yuhong Wang',
          description: '18 highly predictive models for ADMET properties',
          toolType: 'website',
          url: 'http://qhts.nih.gov/md/',
          'public': 'true',
          audience: 'Chemist',
          publicCodebase: 'false',
          image: 'true'
      },
      gsrs: {
        toolName: 'GSRS',
          toolUrl: 'gsrs',
          category: 'chemistry',
          contact: 'Tyler Peryea',
          description: 'Global Substance Registration System (GSRS) is FDA\'s database of regulated medicinal product ingredients and substances. The software was developed by NCATS scientists as part of the Global Ingredient Archival System (ginas) project which brings together medicinal product regulators to develop registration standards for the ingredients in medicinal products. The project goal is to make it easier for regulators and other stakeholders to exchange information about substances in medicines and support scientific research on the use and safety of these products.',
          toolType: 'website | API',
          url: 'http://ginas.ncats.nih.gov',
          'public': 'true',
          audience: 'Data Scientist | Chemist',
          codebase: 'https://spotlite.nih.gov/ncats/inxight',
          publicCodebase: 'false',
          image: 'true'
      },
      'shiny-apps': {
        toolName: 'shiny apps',
          toolUrl: 'shiny-apps',
          category: 'internal website',
          contact: 'Lu Chen',
          description: 'Various applications for qhts, matrix and rnai. Usually small, single function apps (generate plot or do a specific statistical test)',
          toolType: 'website | R package',
          url: 'http://shiny.ncats.nih.gov:3838',
          'public': 'false',
          audience: 'Data Scientist | Biologist | Chemist',
          codebase: 'https://spotlite.nih.gov/ncats/shiny',
          publicCodebase: 'false',
          image: 'true'
      },
      'qhts-tools': {
        toolName: 'qHTS Tools',
          toolUrl: 'qhts-tools',
          category: 'qhts',
          contact: 'Yuhong Wang',
          description: 'A list of java web applications that help process qHTS data',
          url: 'http://qhts/ws',
          audience: 'Data Scientist',
          codebase: 'https://bitbucket.org/ncgc/qhts-client'
      },
      'raslseq-mapper': {
        toolName: 'RASLSeq Mapper',
          toolUrl: 'raslseq-mapper',
          category: 'genomics',
          contact: 'John Braisted',
          description: 'Maps sequence reads to RASLSeq probes',
          toolType: 'CLI',
          audience: 'Data Scientist'
      },
      canvass: {
        toolName: 'CANVASS',
          toolUrl: 'canvass',
          category: 'qhts',
          contact: 'Tongan Zhao',
          description: 'Web interface to CanWeb interface to NCATS CANVASS datasets. CANVASS is a project working with total synthesis and natural product isolation groups to access novel natural products for high-throughput screening.vass assays',
          toolType: 'website',
          url: 'https://tripod.nih.gov/canvass',
          'public': 'true',
          audience: 'Data Scientist | Biologist | Chemist',
          image: 'true'
      },
      'tox21-portal': {
        toolName: 'Tox21 Portal',
          toolUrl: 'tox21-portal',
          category: 'Tox21',
          contact: 'Tongan Zhao | Ruili Huang',
          description: 'Tox21 internal tools',
          toolType: 'website | DB',
          url: 'https://tripod.nih.gov/tox',
          'public': 'true',
          audience: 'Data Scientist | Biologist | Chemist',
          image: 'true'
      },
      lychi: {
        toolName: 'lychi',
          toolUrl: 'lychi',
          category: 'chemistry',
          contact: 'Dac-Trung Nguyen',
          description: 'chemical structure standardizer',
          toolType: 'software',
          url: 'https://github.com/ncats/lychi',
          'public': 'true',
          audience: 'Data Scientist',
          codebase: 'https://github.com/ncats/lychi',
          publicCodebase: 'true'
      },
      'scaffold-hopper': {
        toolName: 'scaffold hopper',
          toolUrl: 'scaffold-hopper',
          contact: 'Dac-Trung Nguyen | Tyler Peryea',
          description: 'scaffold hopping, r-group decomposition, structure searching pubmed',
          toolType: 'java webstart app',
          url: 'https://tripod.nih.gov/ws/hopper/hopper.jnlp',
          'public': 'true',
          audience: 'Data Scientist | Biologist | Chemist',
          image: 'true',
          component: 'ScaffoldHopperComponent'
      },
      'ncatsfind-resolver': {
        toolName: 'NCATSFind Resolver',
          toolUrl: 'ncatsfind-resolver',
          category: 'chemistry',
          contact: 'Tyler Peryea',
          description: 'Resolves a name/code/structure to many other name/code/structures/properties',
          toolType: 'webservice',
          url: 'https://tripod.nih.gov/servlet/resolverBeta3?structure=gleevec%0A50-00-0',
          'public': 'true',
          audience: 'Developer',
          image: 'true',
          component: 'ResolverComponent'
      },
      renderer: {
        toolName: 'Renderer',
          toolUrl: 'renderer',
          category: 'chemistry',
          contact: 'Tyler Peryea',
          description: 'Renders a structure based on a smiles string, has lots of low-level options',
          toolType: 'webservice',
          url: 'https://tripod.nih.gov/servlet/renderServletv12?structure=C1CCCOC1',
          'public': 'true',
          audience: 'Developer',
          image: 'true'
      },
      pcfp: {
        toolName: 'pcfp',
          toolUrl: 'pcfp',
          category: 'pubchem fingerprint',
          contact: 'Dac-Trung Nguyen',
          description: 'pubchem fingerprint implementation',
          url: 'https://bitbucket.org/caodac/pcfp',
          audience: 'Data Scientist'
      },
      'adme-web': {
        toolName: 'adme web',
          toolUrl: 'adme-web',
          category: 'adme data browser',
          contact: 'Tongan Zhao',
          description: 'adme data browser',
          url: 'http://adme.ncats.nih.gov/adme',
          'public': 'false',
          audience: 'Data Scientist | Biologist | Chemist'
      },
      'adme-loader': {
        toolName: 'adme loader',
          toolUrl: 'adme-loader',
          category: 'adme data loader',
          contact: 'Dac-Trung Nguyen',
          description: 'adme data browser and loader',
          url: 'http://qhts.nih.gov/ws/adme/adme.jnlp',
          'public': 'false',
          audience: 'Data Scientist'
      },
      curve: {
        toolName: 'Curve',
          toolUrl: 'curve',
          category: 'tox21',
          contact: 'Tongan Zhao | Ruili Huang',
          description: 'Tox21 dose response curve service',
          toolType: 'website',
          url: 'http://128.231.10.203:8080/toxcurve/',
          'public': 'false',
          audience: 'Developer',
          image: 'true'
      },
      'pubchem-deposition': {
        toolName: 'pubchem deposition',
          toolUrl: 'pubchem-deposition',
          contact: 'Dac-Trung Nguyen',
          description: 'tool to generate data for pubchem deposition',
          url: 'http://qhts.nih.gov/ws/pcdep/pcdep.jnlp',
          'public': 'false',
          audience: 'Data Scientist'
      },
      'fragment-activity-profiler': {
        toolName: 'fragment activity profiler',
          toolUrl: 'fragment-activity-profiler',
          contact: 'Dac-Trung Nguyen',
          description: 'tool for analyzing of fragment activity relationship',
          url: 'https://tripod.nih.gov/ws/fap/fap.jnlp',
          audience: 'Data Scientist | Biologist | Chemist'
      },
      overlap: {
        toolName: 'overlap',
          toolUrl: 'overlap',
          category: 'chemical overlapping tool',
          contact: 'Dac-Trung Nguyen',
          description: 'tool for finding overlap between molecular dataset with our library or any datasets',
          url: 'http://qhts.nih.gov/overlap.html',
          'public': 'false',
          audience: 'Data Scientist | Biologist | Chemist'
      },
      'similarity-': {
        toolName: 'similarity ',
          toolUrl: 'similarity-',
          category: 'similarity tool',
          contact: 'Dac-Trung Nguyen',
          description: 'tool for finding similarity between any two molecular datasets',
          url: 'http://qhts.nih.gov/similarity.html',
          'public': 'false',
          audience: 'Data Scientist | Biologist | Chemist'
      },
      bioplanet: {
        toolName: 'bioplanet',
          toolUrl: 'bioplanet',
          contact: 'Tongan Zhao | Ruili Huang',
          description: 'website to browse and display curated pathways for gene set enrichment analysis',
          toolType: 'website',
          url: 'https://tripod.nih.gov/bioplanet/',
          'public': 'true',
          audience: 'Data Scientist | Biologist | Chemist',
          image: 'true'
      },
      'informatics-apis': {
        toolName: 'Informatics APIs',
          toolUrl: 'informatics-apis',
          category: 'API',
          contact: 'Tongan Zhao',
          description: 'informatics api',
          toolType: 'API',
          url: 'https://apis.ncats.nih.gov/ws',
          'public': 'false',
          audience: 'Developer'
      },
      'ncgc-assay-tool': {
        toolName: 'NCGC Assay Tool',
          toolUrl: 'ncgc-assay-tool',
          category: 'qhts data',
          description: 'This application is for quick analysis of assay results.',
          url: 'http://qhts.ncats.nih.gov/ws/ncgc_assay.jnlp',
          audience: 'Data Scientist'
      },
      'iqc-convert': {
        toolName: 'iqc convert',
          toolUrl: 'iqc-convert',
          category: 'iqc data management',
          contact: 'Dac-Trung Nguyen',
          description: 'IQC convert',
          toolType: '""',
          url: '""',
          'public': 'false',
          audience: 'Data Scientist',
          component: 'IqcConvertComponent'
      },
      chemkit: {
        toolName: 'ChemKit',
          toolUrl: 'chemkit',
          category: 'cheminformatics suite',
          contact: 'Gergely Zahoranszky-Kohalmi',
          description: 'Collection of common cheminformatics algorithms',
          toolType: 'API',
          url: 'https://spotlite.nih.gov/ncats/chemkit.git',
          'public': 'false',
          audience: 'Data Scientist',
          codebase: 'https://spotlite.nih.gov/ncats/chemkit',
          publicCodebase: 'false'
      },
      undefined: {}
    },
    loaded: true,
      audienceList: [
      'Data Scientist',
      'Biologist',
      'Chemist',
      'Developer'
    ],
      categoryList: [
      'qhts data',
      'NCGC compounds',
      'chemistry',
      'QSAR models',
      'ADMET Predictor',
      'internal website',
      'qhts',
      'genomics',
      'Tox21',
      'pubchem fingerprint',
      'adme data browser',
      'adme data loader',
      'tox21',
      'chemical overlapping tool',
      'similarity tool',
      'API',
      'iqc data management',
      'cheminformatics suite'
    ],
      error: "No Error Available"
  }
}
