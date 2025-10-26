import type { CodegenConfig } from "@graphql-codegen/cli";


const config: CodegenConfig = {
    schema: "http://localhost:65301/graphql",
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/infra/graphql/__gen__/": {
            overwrite: true,
            preset: "client",
            config: {
                useTypeImports: true,
                documentMode: 'string'
            },
        },
        "./src/infra/graphql/__gen__/types.ts": {
            plugins: ["typescript"],
            config: {
                useIndexSignature: true
            }
        },
    },
    ignoreNoDocuments: true,
};


export default config;