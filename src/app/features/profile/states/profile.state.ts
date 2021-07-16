import { State, } from '@ngxs/store';

export interface ProfileStateModel {
  details: any;
}

@State<ProfileStateModel>({
  name: 'form',
  defaults: {
    details: {
      model: [],
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class ProfileState {
 
}
