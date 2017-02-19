import { TSprint } from '../types/TSprint'
import { Sprint } from './Sprint'

export class ScrumlyUtility {
    static createInstanceFromObject(object: TSprint): Sprint {
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

    static getEntityType(entity: TSprint): string {
        console.log(typeof(entity));
        return typeof(entity);
    }
}
