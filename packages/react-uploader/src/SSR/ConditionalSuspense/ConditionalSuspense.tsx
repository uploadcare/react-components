import React, { FC, Suspense } from 'react';

export type TProps = {
    fallback?: React.ReactChild | React.ReactFragment | React.ReactPortal | null;
    condition: boolean;
    children: React.ReactNode;
};

export const ConditionalSuspense: FC<TProps> = ({ condition, fallback, children, ...rest }) => {
    return condition ? (
        <Suspense fallback={fallback} {...rest}>
            {children}
        </Suspense>
    ) : (
        <>{fallback}</>
    );
};