import React from 'react';
import DashboardLayout from 'components/ui/Layout/DashboardLayout/DashboardLayout';
import DashboardHome from 'components/dashboard/DashboardHome/DashboardHome';

const Dashboard = () => {
    return (
        <DashboardLayout>
           <DashboardHome />
        </DashboardLayout>
    );
};

export default Dashboard;