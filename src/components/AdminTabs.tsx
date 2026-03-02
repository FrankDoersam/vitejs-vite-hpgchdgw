'use client';

import * as React from 'react';
import { Tabs, TabList, Tab, TabPanel, Box } from '@mui/joy';
import type { SxProps } from '@mui/joy/styles/types';

export interface AdminTabItem {
  label: string;
  value: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  count?: number;
}

export interface AdminTabsProps {
  tabs: AdminTabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  lazy?: boolean;
  actions?: React.ReactNode;
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
        backgroundColor: 'background.surface',
        borderRadius: 'md',
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
          minHeight: 48,
        }}
      >
        {/* Tab List */}
        <TabList
          sx={{
            flex: 1,
            border: 'none',
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
              {tab.count !== undefined && (
                <Box
                  component="span"
                  sx={{
                    ml: 0.5,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 20,
                    height: 20,
                    borderRadius: 'xl',
                    bgcolor: 'neutral.100',
                    color: 'text.secondary',
                    fontSize: 'xs',
                    fontWeight: 'lg',
                    px: 0.75,
                    lineHeight: 1,
                    ...(currentValue === tab.value && {
                      bgcolor: 'primary.softBg',
                      color: 'primary.softColor',
                    }),
                  }}
                >
                  {tab.count}
                </Box>
              )}
            </Tab>
          ))}
        </TabList>

        {/* Action Bar */}
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
              py: 0,
            }}
          >
            {tab.content}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};
