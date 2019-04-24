import { Form } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import _ from 'lodash/fp';
import React, { FormEvent } from 'react';
import { IFormField } from '../models/form-field';

export const getFormHelpers = (formProps: WrappedFormUtils) => {
  const {
    getFieldDecorator,
    getFieldError,
    isFieldTouched,
    validateFields,
  } = formProps;

  const _shouldShowError = (fieldId: string) => {
    return isFieldTouched(fieldId) && getFieldError(fieldId);
  };

  const _formHasErrors = (errors: Record<string, any>) => {
    return _.pipe(
      _.keys,
      _.some((field) => errors[field]),
    )(errors);
  };

  const _renderFields = (field: IFormField) => {
    const _error = _shouldShowError(field.id);

    const _decorator = getFieldDecorator(field.id, field.config);
    const _field = _decorator(field.component);
    const _validateStatus = _error ? 'error' : '';
    const _help = _error || '';
    return <Form.Item
      key={field.id}
      validateStatus={_validateStatus}
      help={_help}
      {...field.formItemProps}
    >
      {_field}
    </Form.Item>;
  };

  const _handleSubmit = (e: FormEvent, cb: (values: any) => unknown) => {
    e.preventDefault();
    return new Promise<any>((resolve, reject) => {
      validateFields(async (err, values) => {
        if (err) {
          reject(err);
        }
        resolve(cb(values));
      });
    });
  };

  return {
    shouldFieldShowError: _shouldShowError,
    renderFields: _renderFields,
    formHasErrors: _formHasErrors,
    handleSubmit: _handleSubmit,
  };
};