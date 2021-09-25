export const items = [
  {
    icon: 'm1-icon',
    label: 'Menu1',
    value: 'm1',
    children: [
      {
        icon: 'm1-1-icon',
        label: 'Menu1-1',
        value: 'm1-1',
        children: [
          {
            icon: 'm1-1-1-icon',
            label: 'Menu-1-1',
            value: 'm1-1-1'
          },
          {
            icon: 'm1-1-2-icon',
            label: 'Menu-1-2',
            value: 'm1-1-2'
          }
        ]
      }
    ]
  },
  {
    icon: 'm2-icon',
    label: 'Menu2',
    value: 'm2'
  },
  {
    icon: 'mxx-icon',
    label: '-',
    value: '-'
  },
  {
    disabled: false,
    icon: 'm3-icon',
    label: 'Menu3',
    value: 'm3'
  }
];
