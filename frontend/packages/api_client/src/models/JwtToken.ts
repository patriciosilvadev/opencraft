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
 * @interface JwtToken
 */
export interface JwtToken {
    /**
     * 
     * @type {string}
     * @memberof JwtToken
     */
    refresh: string;
    /**
     * 
     * @type {string}
     * @memberof JwtToken
     */
    access: string;
}

export function JwtTokenFromJSON(json: any): JwtToken {
    return JwtTokenFromJSONTyped(json, false);
}

export function JwtTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): JwtToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refresh': json['refresh'],
        'access': json['access'],
    };
}

export function JwtTokenToJSON(value?: JwtToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refresh': value.refresh,
        'access': value.access,
    };
}


