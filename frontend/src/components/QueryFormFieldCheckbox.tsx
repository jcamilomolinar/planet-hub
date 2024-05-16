import { Checkbox } from "@/components/ui/Checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription
} from "@/components/ui/Form"

function QueryFormFieldCheckbox({ form, name, description, label, changes }:
  { form: any, name: string, description: string, label: string, changes: any }) {

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              onClick={changes}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              {label}
            </FormLabel>
            <FormDescription>
              {description}
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  )
}

export default QueryFormFieldCheckbox;