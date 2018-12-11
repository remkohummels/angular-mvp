import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'home',
        title: 'Home',
        translate: 'NAV.HOME.TITLE',
        type: 'item',
        icon: 'home',
        url: '/dashboard',
      },
      {
        id: 'role',
        title: 'Role',
        translate: 'NAV.ROLE.TITLE',
        type: 'item',
        icon: 'local_activity',
        url: '/roles',
      },
      {
        id: 'user',
        title: 'User',
        translate: 'NAV.USER.TITLE',
        type: 'item',
        icon: 'supervisor_account',
        url: '/users',
      },
      {
        id: 'country',
        title: 'Country',
        translate: 'NAV.COUNTRY.TITLE',
        type: 'item',
        icon: 'flag',
        url: '/countries',
      },
      {
        id: 'currency',
        title: 'Currency',
        translate: 'NAV.CURRENCY.TITLE',
        type: 'item',
        icon: 'attach_money',
        url: '/currencies',
      },
      {
        id: 'bank',
        title: 'Bank',
        translate: 'NAV.BANK.TITLE',
        type: 'item',
        icon: 'home',
        url: '/banks',
      },
      {
        id: 'withdraw',
        title: 'Withdraw',
        translate: 'NAV.WITHDRAW.TITLE',
        type: 'item',
        icon: 'account_balance_wallet',
        url: '/withdraws',
      },
      {
        id: 'top-up',
        title: 'Top-Up',
        translate: 'NAV.TOP-UP.TITLE',
        type: 'item',
        icon: 'reorder',
        url: '/top-ups',
      },
      {
        id: 'transaction',
        title: 'Transaction',
        translate: 'NAV.TRANSACTION.TITLE',
        type: 'item',
        icon: 'laptop',
        url: '/transactions',
      },
      {
        id: 'deposit',
        title: 'Deposit',
        translate: 'NAV.DEPOSIT.TITLE',
        type: 'item',
        icon: 'payment',
        url: '/deposits',
      },
      {
        id: 'transfer',
        title: 'Transfer',
        translate: 'NAV.TRANSFER.TITLE',
        type: 'item',
        icon: 'send',
        url: '/transfers',
      },
    ]
  }
];