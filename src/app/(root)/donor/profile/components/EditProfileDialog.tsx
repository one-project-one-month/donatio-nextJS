import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import API from "@/lib/api/axios";
import { showToast } from "@/lib/toast";
import { User } from "@/types/User";
import axios from "axios";
import { Pencil } from "lucide-react";
import React, { FormEvent, useState } from "react";

interface EditProfileDialogProps {
  user?: User;
}

interface FormState {
  full_name: string;
  phone_number: string;
  profile_picture: File | null;
}

export const EditProfileDialog: React.FC<EditProfileDialogProps> = ({
  user,
}) => {
  const [form, setForm] = useState<FormState>({
    full_name: user?.profile?.full_name || "",
    phone_number: user?.profile?.phone_number || "",
    profile_picture: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("full_name", form.full_name);
      formData.append("phone_number", form.phone_number);

      if (form.profile_picture) {
        formData.append("profile_picture", form.profile_picture);
      }

      const response = await API.put("/auth/users/me/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response) {
        // Show success toast
        showToast.success("Profile updated successfully!");

        // Reload page to refresh user data
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const errorData = error.response.data;
        Object.values(errorData).forEach((messages) => {
          if (Array.isArray(messages)) {
            messages.forEach((message: string) => {
              showToast.error(message);
            });
          }
        });
      } else {
        showToast.error(
          error instanceof Error
            ? error.message
            : "An error occurred while updating your profile."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, profile_picture: file }));
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-white/0 text-gray-500 flex space-x-2 justify-center items-center shadow-none hover:bg-white/0 cursor-pointer w-fit rounded-full py-6">
        <Pencil />
        <div className="text-lg font-normal">Edit info</div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="full_name" className="text-sm font-medium">
              Full Name
            </label>
            <Input
              type="text"
              name="full_name"
              className="mt-2"
              placeholder="Enter your full name"
              value={form.full_name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, full_name: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="text-sm font-medium">
              Phone Number
            </label>
            <Input
              type="tel"
              name="phone_number"
              className="mt-2"
              placeholder="+1 234 567 8900"
              value={form.phone_number}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, phone_number: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="profile_picture" className="text-sm font-medium">
              Profile Picture
            </label>
            <Input
              type="file"
              name="profile_picture"
              className="mt-2"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
