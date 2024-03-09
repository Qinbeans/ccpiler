export interface PageInfo {
    name: string
    url: string
}

// Export type ToolBoxConfig
// {
//     kind: string;
//     contents: ({
//         kind: string;
//         name: string;
//         colour: string | number;
//         contents: {
//             kind: string;
//             type: string;
//         }[];
//         custom?: undefined;
//     } | {
//         kind: string;
//         name: string;
//         custom: string;
//         colour: string | number;
//         contents?: undefined;
//     })[];
// }

export type ToolBoxConfig = {
    kind: string;
    contents: ({
        kind: string;
        name: string;
        colour: string | number;
        contents: {
            kind: string;
            type: string;
        }[];
        custom?: undefined;
    } | {
        kind: string;
        name: string;
        custom: string;
        colour: string | number;
        contents?: undefined | {
            kind: string;
            type: string;
        }[];
    })[];
}