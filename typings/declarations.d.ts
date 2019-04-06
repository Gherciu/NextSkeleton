declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.svg' {
    const content: {[src: string]: string};
    export = content;
}
