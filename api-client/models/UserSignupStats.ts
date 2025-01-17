/* tslint:disable */
/* eslint-disable */
/**
 * Basic
 * The most amazing SaaS application the world has ever seen
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserSignupStats
 */
export interface UserSignupStats {
    /**
     * 
     * @type {Date}
     * @memberof UserSignupStats
     */
    date: Date;
    /**
     * 
     * @type {number}
     * @memberof UserSignupStats
     */
    count: number;
}

/**
 * Check if a given object implements the UserSignupStats interface.
 */
export function instanceOfUserSignupStats(value: object): value is UserSignupStats {
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('count' in value) || value['count'] === undefined) return false;
    return true;
}

export function UserSignupStatsFromJSON(json: any): UserSignupStats {
    return UserSignupStatsFromJSONTyped(json, false);
}

export function UserSignupStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSignupStats {
    if (json == null) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
        'count': json['count'],
    };
}

  export function UserSignupStatsToJSON(json: any): UserSignupStats {
      return UserSignupStatsToJSONTyped(json, false);
  }

  export function UserSignupStatsToJSONTyped(value?: UserSignupStats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'date': ((value['date']).toISOString().substring(0,10)),
        'count': value['count'],
    };
}

