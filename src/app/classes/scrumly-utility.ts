import { SprintType } from '../types/sprint-type'
import { Sprint } from '../classes/sprint'

export class ScrumlyUtility {
    static createInstanceFromObject(object: SprintType): Sprint {
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

    static getEntityType(entity: SprintType): string {
        console.log(typeof(entity));
        return typeof(entity);
    }
}
