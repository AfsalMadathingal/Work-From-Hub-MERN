import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { AlertCircle } from "lucide-react";
import UserProfileDialog from './UserProfileDialog';

const ModalForConfirmation = ({ 
  title, 
  message, 
  confirmText = "Confirm", 
  cancelText = "Cancel",
  onConfirm,
  isOpen,
  onOpenChange
}) => {







  
  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        }
      }}
      className="z-50"
      backdrop="blur"
      size="md"
      placement="center"
    >
      <ModalContent className="sm:max-w-[95%] md:max-w-[500px]">
        {(onClose) => (
          <>
            <ModalHeader className="flex gap-1 items-center">
              <AlertCircle className="text-warning w-5 h-5" />
              <span>{title}</span>
            </ModalHeader>
            <ModalBody>
              <p>{message}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {cancelText}
              </Button>
              <Button color="primary" onPress={() => {
                onConfirm();
                onClose();
              }}>
                {confirmText}
              </Button>
            </ModalFooter>
          </>
        )}
        
      </ModalContent>
    </Modal>
  );
};

export default ModalForConfirmation;