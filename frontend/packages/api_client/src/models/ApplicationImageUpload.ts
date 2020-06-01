/* tslint:disable */
/* eslint-disable */
/**
 * OpenCraft Instance Manager
 * API for OpenCraft Instance Manager
 *
 * The version of the OpenAPI document: api
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApplicationImageUpload
 */
export interface ApplicationImageUpload {
    /**
     * 
     * @type {string}
     * @memberof ApplicationImageUpload
     */
    readonly logo?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationImageUpload
     */
    readonly favicon?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationImageUpload
     */
    readonly heroCoverImage?: string;
}

export function ApplicationImageUploadFromJSON(json: any): ApplicationImageUpload {
    return ApplicationImageUploadFromJSONTyped(json, false);
}

export function ApplicationImageUploadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationImageUpload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'favicon': !exists(json, 'favicon') ? undefined : json['favicon'],
        'heroCoverImage': !exists(json, 'hero_cover_image') ? undefined : json['hero_cover_image'],
    };
}

export function ApplicationImageUploadToJSON(value?: ApplicationImageUpload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


