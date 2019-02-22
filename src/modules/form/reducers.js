import * as types from './constants';

export function form(config) {
  const initialState = {
    id: '',
    isActive: false,
    lastUpdated: 0,
    form: {},
    error: ''
  };

  return (state = initialState, action) => {
    // Only proceed for this form.
    if (action.name !== config.name) {
      return state;
    }
    switch (action.type) {
      case types.FORM_REQUEST:
        return {
          ...state,
          isActive: true,
          id: action.id,
          error: ''
        };
      case types.FORM_SUCCESS:
        return {
          ...state,
          id: action.form._id,
          form: action.form,
          isActive: false,
          error: ''
        };
      case types.FORM_FAILURE:
        return {
          ...state,
          isActive: false,
          isInvalid: true,
          error: action.error
        };
      case types.FORM_CREATE:
        return {
          ...state,
          isActive: true
        };
      case types.FORM_SAVE:
        return {
          ...state,
          isActive: true
        };
      default:
        return state;
    }
  };
}
