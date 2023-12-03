import {IGroupClasses, IIndividualClasses} from './classes';
import {InstructorsStateType} from './instructors';
import {PartiesStateType} from './parties';
import {StudentsStateType} from './students';
import {TypesStateType} from './types';
import {UserStateType} from './user';

export * from './classes';
export * from './instructors';
export * from './parties';
export * from './students';
export * from './types';
export * from './user';

export type StoreType = {
  classes: {
    individualClasses: IIndividualClasses[];
    groupClasses: IGroupClasses[];
  };
  types: TypesStateType;
  user: UserStateType;
  parties: PartiesStateType;
  instructors: InstructorsStateType;
  students: StudentsStateType;
};
