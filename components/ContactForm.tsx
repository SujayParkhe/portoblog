"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/app/services/resend";
import { toast } from "react-toastify";
import { ContactFormSchema } from "@/app/lib/schema";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      toast.success("Form submitted successfully!");
      reset();
      return;
    }
    toast.error("Form submission failed!, Please try again.");
  };
  return (
    <form onSubmit={handleSubmit(processForm)} className="mt-16 flex flex-col">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="mr-0 sm:mr-4 py-2 pl-2 border rounded-sm border-hoary focus:border-mandarin focus:outline-none"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <input
            type="email"
            placeholder="Email"
            className="mt-4 sm:mt-0 py-2 pl-2 border rounded-sm border-hoary focus:border-mandarin focus:outline-none"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <textarea
          placeholder="Message"
          className="h-32 mt-4 sm:mt-8 pl-2 border rounded-sm border-hoary focus:border-mandarin focus:outline-none"
          rows={4}
          maxLength={500}
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="mt-8 py-2 bg-mandarin text-white font-semibold rounded-sm hover:bg-azure focus:outline-none"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
