/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object\'s type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AssociationDefinition } from './associationDefinition';
import { ObjectTypeDefinitionLabels } from './objectTypeDefinitionLabels';
import { Property } from './property';

/**
* Defines an object schema, including its properties and associations.
*/
export class ObjectSchema {
    'labels': ObjectTypeDefinitionLabels;
    /**
    * The names of properties that should be **required** when creating an object of this type.
    */
    'requiredProperties': Array<string>;
    /**
    * Names of properties that will be indexed for this object type in by HubSpot\'s product search.
    */
    'searchableProperties': Array<string>;
    /**
    * The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.
    */
    'primaryDisplayProperty'?: string;
    /**
    * The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.
    */
    'secondaryDisplayProperties': Array<string>;
    'archived': boolean;
    /**
    * A unique ID for this schema\'s object type. Will be defined as {meta-type}-{unique ID}.
    */
    'id': string;
    /**
    * An assigned unique ID for the object, including portal ID and object name.
    */
    'fullyQualifiedName': string;
    /**
    * When the object schema was created.
    */
    'createdAt'?: Date;
    /**
    * When the object schema was last updated.
    */
    'updatedAt'?: Date;
    'objectTypeId': string;
    /**
    * Properties defined for this object type.
    */
    'properties': Array<Property>;
    /**
    * Associations defined for a given object type.
    */
    'associations': Array<AssociationDefinition>;
    /**
    * A unique name for the schema\'s object type.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labels",
            "baseName": "labels",
            "type": "ObjectTypeDefinitionLabels"
        },
        {
            "name": "requiredProperties",
            "baseName": "requiredProperties",
            "type": "Array<string>"
        },
        {
            "name": "searchableProperties",
            "baseName": "searchableProperties",
            "type": "Array<string>"
        },
        {
            "name": "primaryDisplayProperty",
            "baseName": "primaryDisplayProperty",
            "type": "string"
        },
        {
            "name": "secondaryDisplayProperties",
            "baseName": "secondaryDisplayProperties",
            "type": "Array<string>"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "fullyQualifiedName",
            "baseName": "fullyQualifiedName",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "objectTypeId",
            "baseName": "objectTypeId",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<Property>"
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "Array<AssociationDefinition>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ObjectSchema.attributeTypeMap;
    }
}

