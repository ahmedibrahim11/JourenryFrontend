
export interface SettingState{
    feedback:String;
    isSubmit:Boolean;
    errorMessage:String;
}

export const SettingInitialState:SettingState={
    feedback:"",
    isSubmit:false,
    errorMessage:''
};