'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  Button,
  Input,
  Sheet,
  Breadcrumbs,
  Link,
  Chip,
  IconButton,
  Avatar,
  Tooltip,
  Divider,
  Modal,
  ModalDialog,
  ModalClose,
  FormControl,
  FormLabel,
  Stack,
  Select,
  Option,
} from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';

import theme from './lib/theme';
import { AdminTabs } from './components/AdminTabs';

/* ─── Mock Data ──────────────────────────────────────────────────── */

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
  property?: string;
}

const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Luisa Bergmann',
    email: 'l.bergmann@immobilien.de',
    phone: '+49 173 123 4567',
    role: 'Verwalterin',
    status: 'active',
    property: 'Gartenstr. 12-14',
  },
  {
    id: '2',
    name: 'Tobias Keller',
    email: 't.keller@immogroup.de',
    phone: '+49 170 987 6543',
    role: 'Hausmeister',
    status: 'active',
    property: 'Parkweg 5',
  },
  {
    id: '3',
    name: 'Anna Schmidt',
    email: 'a.schmidt@realty.de',
    phone: '+49 152 456 7890',
    role: 'Buchhaltung',
    status: 'pending',
    property: 'Seeblick 22',
  },
  {
    id: '4',
    name: 'Markus Braun',
    email: 'm.braun@hv-service.de',
    phone: '+49 163 222 3344',
    role: 'Mieterbetreuung',
    status: 'inactive',
    property: 'Am Marktplatz 8',
  },
  {
    id: '5',
    name: 'Sandra Lehmann',
    email: 's.lehmann@propmanage.de',
    phone: '+49 157 111 2233',
    role: 'Verwalterin',
    status: 'active',
    property: 'Lindenallee 3',
  },
];

/* ─── Status Chip ───────────────────────────────────────────────── */

const statusConfig: Record<
  User['status'],
  { label: string; color: 'success' | 'danger' | 'warning' }
> = {
  active: { label: 'Aktiv', color: 'success' },
  inactive: { label: 'Inaktiv', color: 'danger' },
  pending: { label: 'Ausstehend', color: 'warning' },
};

function StatusChip({ status }: { status: User['status'] }) {
  const cfg = statusConfig[status];
  return (
    <Chip
      size="sm"
      variant="soft"
      color={cfg.color}
      sx={{ fontWeight: 600, letterSpacing: '0.02em' }}
    >
      {cfg.label}
    </Chip>
  );
}

/* ─── User Row ──────────────────────────────────────────────────── */

function UserRow({ user }: { user: User }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        px: 3,
        py: 1.5,
        borderBottom: '1px solid',
        borderColor: 'neutral.100',
        transition: 'background-color 100ms ease',
        '&:hover': {
          backgroundColor: 'neutral.50',
        },
        '&:last-of-type': {
          borderBottom: 'none',
        },
      }}
    >
      {/* Avatar + Name */}
      <Avatar
        size="sm"
        sx={{
          bgcolor: 'primary.softBg',
          color: 'primary.softColor',
          fontWeight: 700,
          fontSize: '0.75rem',
        }}
      >
        {user.name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </Avatar>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          level="body-sm"
          sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.4 }}
        >
          {user.name}
        </Typography>
        <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
          {user.role}
        </Typography>
      </Box>

      {/* Property */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: 0.75,
          minWidth: 160,
        }}
      >
        <BusinessRoundedIcon sx={{ fontSize: 15, color: 'text.tertiary' }} />
        <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
          {user.property}
        </Typography>
      </Box>

      {/* Contact Icons */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <Tooltip title={user.email} size="sm">
          <IconButton size="sm" variant="plain" color="neutral">
            <MailRoundedIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Tooltip>
        <Tooltip title={user.phone} size="sm">
          <IconButton size="sm" variant="plain" color="neutral">
            <PhoneRoundedIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Status */}
      <StatusChip status={user.status} />

      {/* Actions */}
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <Tooltip title="Bearbeiten" size="sm">
          <IconButton size="sm" variant="plain" color="neutral">
            <EditRoundedIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Tooltip>
        <IconButton size="sm" variant="plain" color="neutral">
          <MoreHorizRoundedIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    </Box>
  );
}

/* ─── Add User Modal ────────────────────────────────────────────── */

function AddUserModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        sx={{
          width: { xs: '95vw', sm: 440 },
          maxHeight: '90vh',
          overflow: 'auto',
        }}
      >
        <ModalClose />
        <Typography level="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
          Benutzer hinzufuegen
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.secondary', mb: 2.5 }}>
          Neues Teammitglied zur Hausverwaltung hinzufuegen.
        </Typography>
        <Divider sx={{ mb: 2.5 }} />

        <Stack spacing={2}>
          <FormControl required>
            <FormLabel>Vollstaendiger Name</FormLabel>
            <Input placeholder="Vor- und Nachname" />
          </FormControl>

          <FormControl required>
            <FormLabel>E-Mail-Adresse</FormLabel>
            <Input type="email" placeholder="name@unternehmen.de" />
          </FormControl>

          <FormControl>
            <FormLabel>Telefon</FormLabel>
            <Input type="tel" placeholder="+49 ..." />
          </FormControl>

          <FormControl required>
            <FormLabel>Rolle</FormLabel>
            <Select placeholder="Rolle waehlen" defaultValue="">
              <Option value="verwalterin">Verwalterin</Option>
              <Option value="hausmeister">Hausmeister</Option>
              <Option value="buchhaltung">Buchhaltung</Option>
              <Option value="mieterbetreuung">Mieterbetreuung</Option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Zugewiesene Immobilie</FormLabel>
            <Input placeholder="z.B. Gartenstr. 12-14" />
          </FormControl>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1.5,
            mt: 3,
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Button variant="plain" color="neutral" onClick={onClose}>
            Abbrechen
          </Button>
          <Button variant="solid" color="primary" onClick={onClose}>
            Benutzer erstellen
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
}

/* ─── Users Page ────────────────────────────────────────────────── */

export default function UsersPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const filteredUsers = MOCK_USERS.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <CssVarsProvider theme={theme} defaultMode="light">
      <CssBaseline />
      <Box
        sx={{
          px: { xs: 2, md: 5 },
          py: 3,
          minHeight: '100vh',
          backgroundColor: 'background.body',
        }}
      >
        {/* ── Breadcrumbs ─────────────────────── */}
        <Breadcrumbs
          separator={<ChevronRightRoundedIcon sx={{ fontSize: 14 }} />}
          sx={{ p: 0, mb: 1 }}
        >
          <Link
            level="body-xs"
            underline="hover"
            color="neutral"
            href="/"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <HomeRoundedIcon sx={{ fontSize: 14 }} />
            Dashboard
          </Link>
          <Typography level="body-xs" sx={{ fontWeight: 600, color: 'primary.500' }}>
            Benutzerverwaltung
          </Typography>
        </Breadcrumbs>

        {/* ── Page Title ──────────────────────── */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Box>
            <Typography
              level="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.4rem', md: '1.7rem' },
                color: 'text.primary',
                letterSpacing: '-0.01em',
              }}
            >
              Benutzerverwaltung
            </Typography>
            <Typography level="body-sm" sx={{ color: 'text.secondary', mt: 0.25 }}>
              Verwalten Sie Teammitglieder und deren Zugriffsrechte.
            </Typography>
          </Box>
        </Box>

        {/* ── Main Content Card ───────────────── */}
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: 'md',
            boxShadow: 'sm',
            overflow: 'hidden',
          }}
        >
          <AdminTabs
            defaultValue="users"
            tabs={[
              {
                label: 'Benutzer',
                value: 'users',
                icon: <PersonRoundedIcon sx={{ fontSize: 18 }} />,
                count: filteredUsers.length,
                content: (
                  <Box>
                    {/* ── List Header ── */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3,
                        py: 1.5,
                        borderBottom: '1px solid',
                        borderColor: 'neutral.100',
                        backgroundColor: 'background.level1',
                      }}
                    >
                      <Typography
                        level="body-xs"
                        sx={{
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'text.secondary',
                        }}
                      >
                        {filteredUsers.length} Ergebnisse
                      </Typography>
                      <Button
                        size="sm"
                        variant="plain"
                        color="neutral"
                        startDecorator={<FilterAltRoundedIcon sx={{ fontSize: 16 }} />}
                      >
                        Filter
                      </Button>
                    </Box>

                    {/* ── User List ── */}
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <UserRow key={user.id} user={user} />
                      ))
                    ) : (
                      <Box sx={{ p: 6, textAlign: 'center' }}>
                        <PersonRoundedIcon
                          sx={{ fontSize: 48, color: 'neutral.300', mb: 1.5 }}
                        />
                        <Typography level="title-md" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Keine Benutzer gefunden
                        </Typography>
                        <Typography
                          level="body-sm"
                          sx={{ color: 'text.secondary', mb: 2 }}
                        >
                          Erstellen Sie Ihr erstes Teammitglied, um loszulegen.
                        </Typography>
                        <Button
                          variant="soft"
                          startDecorator={<AddRoundedIcon />}
                          onClick={() => setIsModalOpen(true)}
                        >
                          Benutzer hinzufuegen
                        </Button>
                      </Box>
                    )}
                  </Box>
                ),
              },
              {
                label: 'Gruppen',
                value: 'groups',
                icon: <GroupsRoundedIcon sx={{ fontSize: 18 }} />,
                count: 3,
                content: (
                  <Box sx={{ p: 4, textAlign: 'center', py: 8 }}>
                    <GroupsRoundedIcon
                      sx={{ fontSize: 48, color: 'neutral.300', mb: 1.5 }}
                    />
                    <Typography level="title-md" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Gruppenverwaltung
                    </Typography>
                    <Typography
                      level="body-sm"
                      sx={{ color: 'text.secondary', maxWidth: 360, mx: 'auto' }}
                    >
                      Organisieren Sie Benutzer in Gruppen fuer eine effiziente
                      Verwaltung von Immobilien und Zugriffsrechten.
                    </Typography>
                  </Box>
                ),
              },
            ]}
            actions={
              <>
                <Input
                  size="sm"
                  placeholder="Benutzer suchen..."
                  startDecorator={<SearchRoundedIcon sx={{ fontSize: 18 }} />}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    width: { xs: 150, md: 240 },
                    display: { xs: 'none', sm: 'flex' },
                  }}
                />
                <Button
                  size="sm"
                  variant="solid"
                  startDecorator={<AddRoundedIcon />}
                  onClick={() => setIsModalOpen(true)}
                >
                  Hinzufuegen
                </Button>
              </>
            }
          />
        </Sheet>
      </Box>

      {/* ── Modal ──────────────────────────── */}
      <AddUserModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </CssVarsProvider>
  );
}
