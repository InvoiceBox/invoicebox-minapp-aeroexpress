import React, { FC, ReactNode } from 'react';
import { Form } from 'react-final-form';
import { action } from 'storybook/actions';
import { SecondaryButton } from '@invoicebox/ui';

export const FIELD_NAME = 'field';

type TProps = {
    children: ReactNode;
    initialValue: unknown;
};

export const StoryOneFieldForm: FC<TProps> = ({ children, initialValue }) => (
    <Form onSubmit={action('submit')} initialValues={{ [FIELD_NAME]: initialValue }}>
        {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                {children}
                <div style={{ marginTop: 20 }}>
                    <SecondaryButton element="button" type="submit">
                        Done
                    </SecondaryButton>
                </div>
            </form>
        )}
    </Form>
);
