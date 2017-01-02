import { Method } from './api.service';
import { autoinject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';
import appConfig from '../config';

@autoinject()
export abstract class UploadService {

    constructor(private http: HttpClient) {
        this.http.configure(config => {
        config
            .useStandardConfiguration();
        });
    }

    upload<U>(url: string, form: FormData): Promise<U> {
        return this.http.fetch(appConfig.baseUrl + url, { method: Method.POST, body : form}) as any;
    }
}
