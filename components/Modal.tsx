import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";

type Props = {
  target?: {
    image: string;
    title?: string;
    description?: string;
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
};

const Modal = ({ target, isOpen, setIsOpen, onClose }: Props) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30 "
        onClose={() => {
          setIsOpen(false);
          if (onClose) {
            onClose();
          }
        }}
      >
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            {target && (
              <Dialog.Panel className="inline-block w-fit min-w-[40%] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onClose) {
                      onClose();
                    }
                  }}
                >
                  <XCircleIcon className="w-6 h-6 text-gray-300"></XCircleIcon>
                </button>
                <div className="flex flex-col items-center space-y-5 h-fit w-full">
                  <img
                    src={target.image}
                    alt={target.description}
                    className="h-[50vh]"
                  />

                  {target.title != "" && (
                    <Dialog.Title>{target.title}</Dialog.Title>
                  )}

                  {target.description != "" && <p>{target.description}</p>}
                </div>
              </Dialog.Panel>
            )}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
