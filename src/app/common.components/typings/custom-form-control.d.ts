interface ICustomFormControl {
    id: string;
    value: any;
    label: string;
    placeholder: string;
    isRequired: boolean;
    minlength: number;
    maxlength: number;
    error: IError;
    options: Array<IOption>;
}

interface IError {
    [key: string]: string;
}
interface IOption {
    value: string;
    text: string;
    isSelected: boolean;
}
