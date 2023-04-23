import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader, VStack } from '@/shared/ui';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../Notification/NotificationItem';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string,
}

export const NotificationList = (props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    return (
        isLoading
            ? <VStack align="center" justify="center"><Loader /></VStack>
            : (
                <VStack
                  gap="16"
                  max
                  className={ classNames(cls.NotificationList, {}, [className]) }
                >
                    {
                data?.map(dataItem => <NotificationItem key={ dataItem.id } data={ dataItem } />)
            }
                </VStack>
            )
    );
};
