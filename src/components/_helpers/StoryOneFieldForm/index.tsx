import React, { FC, ReactNode } from 'react';
import { Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';
import { Button } from 'src/components';

export const FIELD_NAME = 'field';

type TProps = {
    children: ReactNode;
    initialValue: any;
};

export const StoryOneFieldForm: FC<TProps> = ({ children, initialValue }) => (
    <Form onSubmit={action('submit')} initialValues={{ [FIELD_NAME]: initialValue }}>
        {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                {children}
                <div style={{ marginTop: 20 }}>
                    <Button type="primary" htmlType="submit">
                        Done
                    </Button>
                </div>
            </form>
        )}
    </Form>
);
