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
 * @interface TokenError
 */
export interface TokenError {
    /**
     * 
     * @type {string}
     * @memberof TokenError
     */
    detail?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenError
     */
    code?: string;
}

export function TokenErrorFromJSON(json: any): TokenError {
    return TokenErrorFromJSONTyped(json, false);
}

export function TokenErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function TokenErrorToJSON(value?: TokenError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detail': value.detail,
        'code': value.code,
    };
}

