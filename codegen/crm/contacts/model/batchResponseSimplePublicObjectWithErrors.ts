/**
 * Contacts
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SimplePublicObject } from './simplePublicObject';
import { StandardError } from './standardError';

export class BatchResponseSimplePublicObjectWithErrors {
    'status': BatchResponseSimplePublicObjectWithErrors.StatusEnum;
    'results': Array<SimplePublicObject>;
    'numErrors'?: number;
    'errors'?: Array<StandardError>;
    'requestedAt'?: Date;
    'startedAt': Date;
    'completedAt': Date;
    'links'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseSimplePublicObjectWithErrors.StatusEnum"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObject>"
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<StandardError>"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseSimplePublicObjectWithErrors.attributeTypeMap;
    }
}

export namespace BatchResponseSimplePublicObjectWithErrors {
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Processing = <any> 'PROCESSING',
        Canceled = <any> 'CANCELED',
        Complete = <any> 'COMPLETE'
    }
}
