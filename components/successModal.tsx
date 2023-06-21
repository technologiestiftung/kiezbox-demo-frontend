import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface SuccessModalProps {
  isopen: boolean;
  onClose: (e: React.FormEvent) => void;
}

export const SuccessModal = ({
  isopen = false,
  onClose,
}: SuccessModalProps) => {
  return (
    <AlertDialog open={isopen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Emergency Call Succesfully send</AlertDialogTitle>
          <AlertDialogDescription>
            Help is on the way to you. Please stay calm.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => onClose(e)}>
            Reset
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
