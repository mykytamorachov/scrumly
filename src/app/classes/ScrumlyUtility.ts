import { ISprint } from '../types/ISprint'
import { Sprint } from './Sprint'

export class ScrumlyUtility {
    static createInstanceFromObject(object: ISprint): Sprint {
        try {
        let sprint = new Sprint();
        this.getEntityType(object);
        Object.keys(object).map(function(key, index) {
            sprint[key] = object[key];
        });
            return sprint;
        }
        catch (e) {
            return;
        }
    }

    static getEntityType(entity: ISprint): string {
        console.log(typeof(entity));
        return typeof(entity);
    }
}
