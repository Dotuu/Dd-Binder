import { TemplateContent } from "./TemplateContent";
import { TemplateTitle } from "./TemplateTitle";

export interface Bind {
  id?: number;
  name: string;
  content: string;
}

export const BindTemplate = () => {
  return (
    <>
      <TemplateTitle />
      <TemplateContent />
    </>
  );
};
