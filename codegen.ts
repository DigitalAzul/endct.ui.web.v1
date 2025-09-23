import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:65300/graphql',
    documents: ['src/**/*.tsx'],
    ignoreNoDocuments: true,
    generates: {
        './src/infra/graphql/': {
            preset: 'client',
            config: {
                documentMode: 'string',
                useTypeImports: true
            }
        },
        './src/infra/graphql/schema.graphql': {
            plugins: ['schema-ast'],
            config: {
                includeDirectives: true,
            }
        }
    }
}

export default config