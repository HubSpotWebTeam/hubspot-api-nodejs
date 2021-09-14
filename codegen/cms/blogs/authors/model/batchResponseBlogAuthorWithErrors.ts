/**
 * Blog Post endpoints
 * \"Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags\"
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BlogAuthor } from './blogAuthor';
import { StandardError } from './standardError';

export class BatchResponseBlogAuthorWithErrors {
    'status': BatchResponseBlogAuthorWithErrors.StatusEnum;
    'results': Array<BlogAuthor>;
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
            "type": "BatchResponseBlogAuthorWithErrors.StatusEnum"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<BlogAuthor>"
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
        return BatchResponseBlogAuthorWithErrors.attributeTypeMap;
    }
}

export namespace BatchResponseBlogAuthorWithErrors {
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Processing = <any> 'PROCESSING',
        Canceled = <any> 'CANCELED',
        Complete = <any> 'COMPLETE'
    }
}
