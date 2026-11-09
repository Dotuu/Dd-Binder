import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export const TemplateTitle = () => {
  return (
    <Field id={"template_field_title"}>
      <FieldLabel htmlFor={"template_title"}>Enter template title</FieldLabel>
      <Input id={"template_title"} placeholder={"Enter template title"} />
    </Field>
  );
};
