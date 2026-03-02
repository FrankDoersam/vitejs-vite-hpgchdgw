import * as React from 'react';
import { Box, Typography, Button, Input } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { AdminTabs } from './AdminTabs';

export const UsersPage: React.FC = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {/* Page Title */}
      <Typography level="h3" sx={{ fontWeight: 500 }}>
        User Management
      </Typography>

      {/* Admin Tabs */}
      <AdminTabs
        defaultValue="users"
        tabs={[
          {
            label: 'Users',
            value: 'users',
            content: (
              <Box sx={{ p: 2 }}>
                <Typography level="body-md">
                  User list content goes here.
                </Typography>
              </Box>
            ),
          },
          {
            label: 'Groups',
            value: 'groups',
            content: (
              <Box sx={{ p: 2 }}>
                <Typography level="body-md">
                  Group management content goes here.
                </Typography>
              </Box>
            ),
          },
        ]}
        actions={
          <>
            <Input
              size="sm"
              placeholder="Search users"
              startDecorator={<SearchIcon />}
            />
            <Button size="sm" startDecorator={<AddIcon />}>
              Add User
            </Button>
          </>
        }
      />
    </Box>
  );
};
