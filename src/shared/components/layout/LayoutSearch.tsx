import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
import { Field } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { SearchIcon } from "lucide-react";

function LayoutSearch() {
  return (
    <Field dir="ltr" className="max-w-60">
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
