import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

export interface FormFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

interface FormData {
  [key: string]: string;
}

function AuthForm({
  form,
  formfields,
  onSubmit,
  buttonText,
}: {
  form: UseFormReturn<FormData>;
  formfields: FormFieldProps[];
  onSubmit: (data: FormData) => Promise<void>;
  buttonText: string;
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formfields.map((item, index) => (
          <FormField
            key={index}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{item.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={item.placeholder}
                    type={item.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">{buttonText}</Button>
      </form>
    </Form>
  );
}

export default AuthForm;
