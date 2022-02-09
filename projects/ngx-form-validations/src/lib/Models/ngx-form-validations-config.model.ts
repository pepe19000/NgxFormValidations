export interface INgxFormValidationsConfig {
    [errorType: string]: (label: string, error: any) => string   
}