import { FormItemProps } from 'antd/lib/form';
import { GetFieldDecoratorOptions } from 'antd/lib/form/Form';

export interface IFormField {
  id: string;
  component: JSX.Element | React.FunctionComponent;
  config: GetFieldDecoratorOptions;
  formItemProps?: Partial<FormItemProps>;
}
