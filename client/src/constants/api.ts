// Source: https://stackoverflow.com/questions/53163595/how-to-define-static-constants-in-typescript-and-angular
export abstract class ApiConstants {
    static readonly URL: string =
        process.env.DEV_OR_PROD === 'prod' ? 'TODO: production url' : 'http://localhost:8080';
}