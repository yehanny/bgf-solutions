import { Dialog, Transition, TransitionChild, DialogPanel } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const t = useTranslations("Contacts");
  const [isOpen, setIsOpen] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const notify = (message: string) => toast(message);

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      reset({ firstname: "", lastname: "", email: "", message: "" });
      notify(t("email_sent"));
      setIsOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const inputClasses = "relative block w-full appearance-none bg-lightgrey rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm leading-tight focus:outline-none focus:bg-white focus:border-blue";

  return (
    <>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <Link href="#" onClick={() => setIsOpen(true)} className="bg-blue-950 rounded-full px-6 py-4 text-lg text-white shadow-sm transition-colors duration-75 group gap-[0.25em] inline-flex items-center hover:cursor-pointer hover:bg-opacity-90">
          {t("title")}
          <svg viewBox="0 0 16 16" height="1em" width="1em" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative transition-transform duration-200 motion-safe:-translate-x-1 group-hover:translate-x-0">
            <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
            <path stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round" className="origin-left transition-all duration-200 opacity-0 motion-safe:-translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"></path>
          </svg>
        </Link>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <Link href="/" className="text-2xl sm:text-4xl font-semibold text-black">
                        {t("title")}
                      </Link>
                    </div>
                    <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-md">{t("subtitle")}</p>
                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex gap-3">
                        <div>
                          <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {t("firstname")}
                          </label>
                          <input id="firstname" type="text" {...register("firstname")} className={inputClasses} placeholder="John..." />
                        </div>
                        <div>
                          <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {t("lastname")}
                          </label>
                          <input id="lastname" type="text" {...register("lastname", { required: true })} className={inputClasses} placeholder="Doe..." />
                          {errors.lastname && <div className="text-grey text-sm">{t("errors.lastname")}</div>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {t("email")}
                        </label>
                        <input id="email" type="email" {...register("email", { pattern: emailRegex, required: true })} className={inputClasses} placeholder="user@email.com" />
                        {errors.email && <div className="text-grey text-sm">{t("errors.email")}</div>}
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                          {t("message")}
                        </label>
                        <textarea id="message" {...register("message", { required: true, minLength: 30 })} className={inputClasses} placeholder={t("message_text")}></textarea>
                        {errors.message && <div className="text-grey text-sm">{t("errors.message")}</div>}
                      </div>
                      <button type="submit" disabled={errors.lastname || errors.email || errors.message ? true : false} className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        {t("send")}
                      </button>
                    </form>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ContactForm;
