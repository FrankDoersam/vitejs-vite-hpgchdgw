import * as React from 'react';
import { Box, Typography, Button, Input, Sheet, Breadcrumbs, Link } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { AdminTabs } from './AdminTabs';
import { AddUserModal } from './AddUserModal';

export const UsersPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <Box
      sx={{
        px: { xs: 2, md: 5 },
        py: 4,
        minHeight: '100vh',
        backgroundColor: 'background.body', // Nutzt das Grau aus dem Theme
      }}
    >
      {/* Breadcrumbs - Sehr wichtig für Admin-Look */}
      <Breadcrumbs
        separator={<ChevronRightRoundedIcon />}
        sx={{ p: 0, mb: 1, ml: -0.5 }}
      >
        <Link level="body-sm" underline="hover" color="neutral" href="/">Dashboard</Link>
        <Typography level="body-sm" color="primary">User Management</Typography>
      </Breadcrumbs>

      {/* Page Title Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography level="h2" sx={{ fontWeight: 600, fontSize: '1.8rem' }}>
          User Management
        </Typography>
      </Box>

      {/* Main Content Card */}
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          boxShadow: 'sm',
          overflow: 'hidden', // Damit der Border-Radius bei den Tabs greift
          border: '1px solid',
          borderColor: 'neutral.200',
        }}
      >
        <AdminTabs
          defaultValue="users"
          tabs={[
            {
              label: 'Users',
              value: 'users',
              content: (
                <Box sx={{ p: 4, textAlign: 'center', py: 8 }}>
                  {/* Placeholder für eine Liste/Tabelle */}
                  <Typography level="title-lg">No users found</Typography>
                  <Typography level="body-md" sx={{ color: 'neutral.500', mb: 2 }}>
                    Get started by adding your first team member.
                  </Typography>
                  <Button
                    variant="soft"
                    startDecorator={<AddIcon />}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Add User
                  </Button>
                </Box>
              ),
            },
            {
              label: 'Groups',
              value: 'groups',
              content: (
                <Box sx={{ p: 4 }}>
                  <Typography level="body-md">Group management content.</Typography>
                </Box>
              ),
            },
          ]}
          actions={
            <>
              <Input
                size="sm"
                placeholder="Search users..."
                startDecorator={<SearchIcon />}
                sx={{
                  width: { xs: 150, md: 240 },
                  display: { xs: 'none', sm: 'flex' },
                }}
              />
              <Button
                size="sm"
                variant="solid"
                startDecorator={<AddIcon />}
                onClick={() => setIsModalOpen(true)}
              >
                Add User
              </Button>
            </>
          }
        />
      </Sheet>

      {/* Modal Integration */}
      <AddUserModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};