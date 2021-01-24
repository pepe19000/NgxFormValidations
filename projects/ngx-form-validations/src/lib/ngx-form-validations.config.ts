import { INgxFormValidationsConfig } from "./Models/ngx-form-validations-config.model";

export const NgxFormValidationsConfig: INgxFormValidationsConfig = 
    {
      "required": requiredConfig,
      "minlength": minlengthConfig,
      "maxlength": maxlengthConfig,
      "requiredTrue": requiredTrueConfig,
      "pattern": patternConfig,
      "email": emailConfig,
      "max": maxConfig,
      "min": minConfig
    };

export function requiredConfig(label: string) {  
  return `'${label}' field is required`;
}
export function minlengthConfig(label: string, error: any) {
  return `${label} field must be no longer than ${error.requiredLength} characters`;
}
export function maxlengthConfig(label: string, error: any) {
  return `'${label}' field must be no longer than ${error.requiredLength} characters`;
}
export function requiredTrueConfig(label: string) {
  return `${label} field is required`;
}
export function patternConfig(label: string) {
  return `${label} field is invalid`;
}
export function emailConfig(label: string) {
  return `Invalid email address`;
}
export function maxConfig(label: string, error: any) {  
  return `${label} field must be no greater than ${error.max}`;
}
export function minConfig(label: string, error: any) {
  return `${label} field must be no less than ${error.min}`;
}