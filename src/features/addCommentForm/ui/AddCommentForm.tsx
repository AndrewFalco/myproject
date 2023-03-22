import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { Textarea } from 'shared/ui/Input/Textarea';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getAddCommentFormError, getAddCommentFormText } from '../model/selectors/addCommentFormSelector';
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommentFormSlice';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void,
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onChangeText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onChangeText('');
    }, [onChangeText, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.AddCommentForm, {}, [className]) }>
                <Textarea
                  className={ cls.input }
                  name={ t('Comment') }
                  value={ text }
                  onChange={ onChangeText }
                  cols={ 100 }
                  rows={ 2 }
                />
                <Button
                  onClick={ onSendHandler }
                  colorType="success"
                >
                    { t('Send comment') }
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);