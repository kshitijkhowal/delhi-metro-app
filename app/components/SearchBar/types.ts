export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSearch?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: () => void;
  disabled?: boolean;
  autoFocus?: boolean;
}

export interface SearchBarImperativeHandler {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  submit: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
}
