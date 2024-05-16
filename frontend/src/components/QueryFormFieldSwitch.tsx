import { Switch } from "@/components/ui/Switch"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/Form"

function QueryFormFieldSwitch({ form, name, description }:
  { form: any, name: string, description: string }) {

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <div className="space-y-0.5">
            <FormLabel>{description}</FormLabel>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default QueryFormFieldSwitch;