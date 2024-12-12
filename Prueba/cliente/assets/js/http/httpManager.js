import { Http } from "./http.js";

export const httpManager = {
    http:null, 
    getInstance: (url) => {
        if (httpManager.http === null) {
            httpManager.http =  new Http(url);
        }
        return httpManager.http;
    }
}