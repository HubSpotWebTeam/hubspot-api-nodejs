/**
 * Companies
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
import { SimplePublicObjectId } from './simplePublicObjectId';

export class BatchReadInputSimplePublicObjectId {
    'properties': Array<string>;
    'idProperty'?: string;
    'inputs': Array<SimplePublicObjectId>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<string>"
        },
        {
            "name": "idProperty",
            "baseName": "idProperty",
            "type": "string"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<SimplePublicObjectId>"
        }    ];

    static getAttributeTypeMap() {
        return BatchReadInputSimplePublicObjectId.attributeTypeMap;
    }
}

