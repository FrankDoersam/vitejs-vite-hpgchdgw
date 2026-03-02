import * as React from 'react';
import { Tabs, TabList, Tab, TabPanel, Box } from '@mui/joy';
import type { SxProps } from '@mui/joy/styles/types';

export interface AdminTabItem {
  label: string;
  value: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AdminTabsProps {
  tabs: AdminTabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  lazy?: boolean;
  actions?: React.ReactNode; // 🔥 Action Bar
  sx?: SxProps;
}

export const AdminTabs: React.FC<AdminTabsProps> = ({
  tabs,
  value,
  defaultValue,
  onChange,
  lazy = true,
  actions,
  sx,
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(
    defaultValue ?? tabs[0]?.value
  );

  const currentValue = isControlled ? value : internalValue;

  const handleChange = (
    _event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (!newValue) return;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  return (
    <Tabs
      value={currentValue}
      onChange={handleChange}
      sx={{
        backgroundColor: 'background.body',
        ...sx,
      }}
    >
      {/* Header Row */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Tabs */}
        <TabList
          sx={{
            flex: 1,
            minHeight: 48,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.icon}
              {tab.label}
            </Tab>
          ))}
        </TabList>

        {/* 🔥 Action Bar */}
        {actions && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              pr: 2,
              pl: 2,
            }}
          >
            {actions}
          </Box>
        )}
      </Box>

      {/* Panels */}
      {tabs.map((tab) => {
        if (lazy && tab.value !== currentValue) return null;

        return (
          <TabPanel
            key={tab.value}
            value={tab.value}
            sx={{
              px: 0,
              pt: 3,
            }}
          >
            {tab.content}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};
