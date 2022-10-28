import React, { DOMAttributes } from "react";
import { AriaTextFieldOptions } from "react-aria";
interface TextFieldProps extends AriaTextFieldOptions<"input"> {
    renderLabel?: (props: DOMAttributes<any>, label: React.ReactNode, isRequired?: boolean) => React.ReactNode;
    renderInput?: (props: React.InputHTMLAttributes<HTMLInputElement>, ref: React.MutableRefObject<null>) => React.ReactNode;
    renderDescription?: (props: DOMAttributes<any>, description: any) => React.ReactNode;
    renderError?: (props: DOMAttributes<any>, errorMessage: React.ReactNode) => React.ReactNode;
}
export declare const TextField: React.FC<TextFieldProps>;
export {};
