import { Button } from "@/shared/components/button";
import { ButtonGroup } from "@/shared/components/button-group";
import { Field, FieldLabel } from "@/shared/components/field";
import { Input } from "@/shared/components/input";
import { SearchIcon } from "lucide-react";

function LayoutSearch() {
  return (
    <Field dir="ltr">
      <ButtonGroup className="rounded-full!">
        <Button variant="outline" className="bg-content-primary">
          <SearchIcon />
        </Button>
        <Input
          className="bg-content-primary placeholder:text-content-tertiary-inverse"
          dir="rtl"
          id="input-button-group"
          placeholder="جستجو در آگهی‌ها..."
        />
      </ButtonGroup>
    </Field>
  );
}

export { LayoutSearch };
