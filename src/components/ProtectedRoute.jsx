import React, { useEffect } from 'react'
import BaseLayout from '../pages/BaseLayout';
import { Outlet, useNavigate } from 'react-router-dom';

const BaseComponent = () => {
    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    );
}

export default BaseComponent