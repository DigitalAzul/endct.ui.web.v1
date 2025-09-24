import type { CodegenConfig } from "@graphql-codegen/cli";


const config: CodegenConfig = {
    schema: "http://localhost:65300/graphql",
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/infra/graphql/": {
            overwrite: true,
            preset: "client",
            config: {
                useTypeImports: true,
                documentMode: 'string'
            },
        },
        "./src/infra/graphql/types.ts": {
            plugins: ["typescript"],
            config: {
                useIndexSignature: true
            }
        },
    },
    ignoreNoDocuments: true,
};


export default config;