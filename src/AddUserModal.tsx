import * as React from 'react';
import {
  Modal,
  ModalDialog,
  ModalClose,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Box,
} from '@mui/joy';

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        aria-labelledby="add-user-modal-title"
        sx={{
          minWidth: { xs: '90%', sm: 500 },
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
        }}
      >
        <ModalClose />
        <Typography id="add-user-modal-title" level="h4" fontWeight="600">
          Create New User
        </Typography>
        <Typography level="body-sm" sx={{ mb: 2, color: 'neutral.500' }}>
          Enter the details to invite a new team member.
        </Typography>
        <Divider sx={{ my: 1 }} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <Stack spacing={2.5}>
            <FormControl required>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="e.g. Jane Doe" autoFocus />
            </FormControl>
            <FormControl required>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="jane@company.com" />
            </FormControl>
            <Box sx={{ mt: 3, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
              <Button variant="plain" color="neutral" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="solid" color="primary" type="submit">
                Create User
              </Button>
            </Box>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};