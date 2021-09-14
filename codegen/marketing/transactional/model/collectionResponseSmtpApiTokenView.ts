/**
 * Transactional Email
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
import { Paging } from './paging';
import { SmtpApiTokenView } from './smtpApiTokenView';

/**
* A collection of SMTP API tokens.
*/
export class CollectionResponseSmtpApiTokenView {
    /**
    * The actual collection of tokens.
    */
    'results': Array<SmtpApiTokenView>;
    'paging'?: Paging;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SmtpApiTokenView>"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging"
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseSmtpApiTokenView.attributeTypeMap;
    }
}

