import { DashboardSquare01Icon, CellsIcon, CheckmarkBadge04Icon, RankingIcon, Note04Icon, CancelCircleIcon, Notebook02Icon, CreditCardPosIcon } from 'hugeicons-react';

export const participantMenu = [
    {
        name: 'Dashboard',
        link: `/participant`,
        icon: <DashboardSquare01Icon color='#000' />,
    },
    {
        name: 'Registration',
        link: `/participant/registration`,
        icon: <Notebook02Icon color='#000' />,
    },
    {
        name: 'Payment History',
        link: `/participant/payment-details`,
        icon: <CreditCardPosIcon color='#000' />,
    },
]
export const eventHeadMenu = [
    {
        name: 'Dashboard',
        link: `/event-heads`,
        icon: <DashboardSquare01Icon color='#000' />,
    },
    {
        name: 'Event Details',
        link: `/event-heads/event-details`,
        icon: <CellsIcon color='#000' />,
    },
    {
        name: 'Update Scores',
        link: `/event-heads/update-scores`,
        icon: <CheckmarkBadge04Icon color='#000' />,
    },
    {
        name: 'Rankinhs',
        link: `/event-heads/rankings`,
        icon: <RankingIcon color='#000' />,
    },
    {
        name: 'Registration Details',
        link: `/event-heads/registration-details`,
        icon: <Note04Icon color='#000' />,
    },
]