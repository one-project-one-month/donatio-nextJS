import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import API from "@/lib/api/axios";
import profile from "@/assets/icons/profile.svg";
import { showToast } from "@/lib/toast";

interface AdminFormState {
  organization_name: string;
  uploaded_attachments: File | null;
  type: string;
}

const ORGANIZATION_TYPES = [
  "Non-Profit",
  "Charity",
  "Foundation",
  "Religious Organization",
  "Educational Institution",
  "Other",
];

export const BecomeAdminDialog = () => {
  const [form, setForm] = useState<AdminFormState>({
    organization_name: "",
    uploaded_attachments: null,
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("organization_name", form.organization_name);
      formData.append("type", form.type);

      if (form.uploaded_attachments) {
        formData.append("uploaded_attachments", form.uploaded_attachments);
      }

      const response = await API.post("/organization-requests/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      if (response) {
        showToast.success(
          "Wait Son. We gonna review you request and make sure you are legit."
        );

        // Reset form and close dialog
        setForm({
          organization_name: "",
          uploaded_attachments: null,
          type: "",
        });
        setIsOpen(false);
      }
    } catch (error) {
      console.error(error);
      showToast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, uploaded_attachments: file }));
  };

  const isFormValid =
    form.organization_name && form.type && form.uploaded_attachments;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full py-6 cursor-pointer">
          <img src={profile.src} alt="Profile icon" />
          <div className="text-lg font-normal">Become an admin</div>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Become an Admin</DialogTitle>
          <DialogDescription>
            Submit your organization details to become an admin. All fields are
            required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="organization_name" className="text-sm font-medium">
              Organization Name *
            </label>
            <Input
              type="text"
              name="organization_name"
              className="mt-2"
              placeholder="Enter organization name"
              value={form.organization_name}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  organization_name: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="text-sm font-medium">
              Organization Type *
            </label>
            <Select
              value={form.type}
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, type: value }))
              }
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select organization type" />
              </SelectTrigger>
              <SelectContent>
                {ORGANIZATION_TYPES.map((type) => (
                  <SelectItem
                    key={type}
                    value={type.toLowerCase().replace(/\s+/g, "_")}
                  >
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label
              htmlFor="uploaded_attachments"
              className="text-sm font-medium"
            >
              Supporting Documents *
            </label>
            <Input
              type="file"
              name="uploaded_attachments"
              className="mt-2"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload registration certificate, tax-exempt letter, or other
              supporting documents
            </p>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting || !isFormValid}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
