"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ConfirmActionButtonProps {
  icon: ReactNode;
  buttonClassName?: string;
  buttonTitle: string;
  dialogTitle: string;
  dialogDescription: string;
  onConfirm: () => void;
  disabled?: boolean;
}

const ConfirmActionButton = ({
  icon,
  buttonClassName,
  buttonTitle,
  dialogTitle,
  dialogDescription,
  onConfirm,
  disabled,
}: ConfirmActionButtonProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          title={buttonTitle}
          className={buttonClassName}
          disabled={disabled}
        >
          {icon}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={onConfirm}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmActionButton;
