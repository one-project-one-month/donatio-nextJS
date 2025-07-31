"use client";
import BreadCrumbUI from "@/components/common/breadcrumb-ui";
import React, { FormEvent, useEffect, useState } from "react";
import userCoverPhoto from "@/assets/image/userCoverPhoto.png";
import { Pencil, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import profile from "@/assets/icons/profile.svg";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import API from "@/lib/api/axios";
import { useGetUser } from "@/features/user/hooks/donor-user-queries";

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

const page = () => {
  type Attachment = {
    id: string;
    file: string;
  };

  type Donation = {
    id: string;
    organization: any;
    actor: string;
    event: string | null;
    title: string;
    amount: string;
    type: string;
    status: string;
    review_required: boolean;
    created_at: string;
    updated_at: string;
    attachments: Attachment[];
  };

  const [lists, setLists] = useState<Donation[]>([]);

  const { data: user } = useGetUser();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await API.get("/transactions/history/");

        setLists(response.data);
      } catch (err) {
        console.error("Failed to fetch user's transsactions:", err);
      }
    };
    getUserInfo();
  }, []);

  interface FormState {
    full_name: string;
    phone_number: string;
    profile_picture: File | null;
  }
  interface AdminFormState {
    organization_name: string;
    uploaded_attachments: File | null;
    type: string;
  }
  const [form, setForm] = useState<FormState>({
    full_name: "",
    phone_number: "",
    profile_picture: null,
  });
  const [adminForm, setAdminForm] = useState<AdminFormState>({
    organization_name: "",
    uploaded_attachments: null,
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
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

      console.log(response.data);

      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error(error);
    }
  };

  const handleAdminForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("organization_name", adminForm.organization_name);
      formData.append("type", adminForm.type);
      if (adminForm.uploaded_attachments) {
        formData.append("uploaded_attachments", adminForm.uploaded_attachments);
      }

      const response = await API.post("/organization-requests/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error(error);
    }
  };
  return (
    <div className="px-4 pt-10">
      <BreadCrumbUI
        links={[{ name: "Donor", path: "/donor/events" }]}
        currentPageTitle={"Settings"}
      />

      {/* cover photo  */}
      <div className="relative">
        <img src={userCoverPhoto.src} alt="img" className="mt-8 rounded-3xl" />
        <div className="absolute cursor-pointer p-4 flex items-center justify-center rounded-full bg-white top-5 right-5 hover:bg-white/80 duration-150 transition ease-in-out">
          <Pencil size={15} />
        </div>

        {/* info section  */}
        <div className="my-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src={
                  user?.profile?.profile_picture ||
                  "https://github.com/shadcn.png"
                }
              />

              <AvatarFallback>{user?.username?.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="">
              <div>
                {user?.profile?.full_name
                  ? user?.profile?.full_name
                  : user?.username}
              </div>
              <div className="text-gray-500">{user?.email}</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-end">
            <Dialog>
              <DialogTrigger className="bg-white/0 text-gray-500 flex space-x-2 justify-center items-center shadow-none hover:bg-white/0 cursor-pointer w-fit rounded-full py-6 ">
                <Pencil />
                <div className="text-lg font-normal">Edit info</div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you are
                    done.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleForm} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="full_name">Fullname</label>
                    <Input
                      type="text"
                      name="full_name"
                      className="mt-2"
                      placeholder="fullname"
                      value={form.full_name}
                      onChange={(e) =>
                        setForm({ ...form, full_name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <Input
                      type="number"
                      name="phone_number"
                      className="mt-2"
                      placeholder="+ 848380"
                      value={form.phone_number}
                      onChange={(e) =>
                        setForm({ ...form, phone_number: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="profile_picture">Profile Picture</label>
                    <Input
                      type="file"
                      name="profile_picture"
                      className="mt-2"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0];
                        setForm({ ...form, profile_picture: file || null });
                      }}
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        className="cursor-pointer"
                        type="button"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      className="cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Saving..." : "Save Changes"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-full py-6 cursor-pointer">
                  <img src={profile.src} alt="icon" />
                  <div className="text-lg font-normal">Become an admin</div>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Become an admin</DialogTitle>
                  <DialogDescription>
                    Fill the form and push submit.
                  </DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={handleAdminForm}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label htmlFor="full_name">Orgnization Name</label>
                    <Input
                      type="text"
                      name="orgnization_name"
                      className="mt-2"
                      placeholder="orgnization name"
                      value={adminForm.organization_name}
                      onChange={(e) =>
                        setAdminForm({
                          ...adminForm,
                          organization_name: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="full_name">Uploaded Attachements</label>
                    <Input
                      type="file"
                      name="uploaded_attachments"
                      className="mt-2"
                      placeholder="image"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0];
                        setAdminForm({
                          ...adminForm,
                          uploaded_attachments: file || null,
                        });
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="full_name">Type</label>
                    <Input
                      type="text"
                      name="type"
                      className="mt-2"
                      placeholder="type"
                      value={adminForm.type}
                      onChange={(e) =>
                        setAdminForm({ ...adminForm, type: e.target.value })
                      }
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        className="cursor-pointer"
                        type="button"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      className="cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* history  */}
        <div className="my-10">
          {/* this is title and search box  */}
          <div>
            <div className="text-xl font-semibold">Donation History</div>

            <div className="relative mt-6">
              <Input
                className="rounded-full pl-12 py-6 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50 placeholder:text-neutral-400 w-2/5"
                type="text"
                placeholder="Search for events"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
                size={20}
              />
            </div>
          </div>
          {/* this is title and search box  */}

          {/* table  */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow mt-10">
            <Table>
              <TableHeader>
                <TableRow className="text-lg bg-[#FAFDFF]">
                  <TableHead className="pl-10 py-6">Date</TableHead>
                  <TableHead className="py-6">Time</TableHead>
                  <TableHead className="py-6">Organization</TableHead>
                  <TableHead className="py-6">Amount</TableHead>
                  <TableHead className="py-6">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-gray-500">
                {lists.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-10 text-gray-400 text-sm italic"
                    >
                      No donation found
                    </TableCell>
                  </TableRow>
                ) : (
                  lists.map((list, index) => {
                    const { date, time } = formatDateTime(list.updated_at);
                    return (
                      <TableRow key={index}>
                        <TableCell className="pl-10 py-6">{date}</TableCell>
                        <TableCell className="py-6">{time}</TableCell>
                        <TableCell className="py-6">
                          {list?.organization?.name}
                        </TableCell>
                        <TableCell className="py-6">{list?.amount}</TableCell>
                        <TableCell className="py-6">
                          <span
                            className={`py-2 px-4 rounded-full ${
                              list?.status === "success"
                                ? "text-[#00D018] bg-[#F3FFF4]"
                                : "text-[#d0a300] bg-[#fffcf3]"
                            }`}
                          >
                            {list?.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

function formatDateTime(isoString: string) {
  const dateObj = new Date(isoString);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const date = `${day}/${month}/${year}`;

  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "P.M" : "A.M";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const time = `${hours}:${minutes}:${seconds} ${ampm}`;
  return { date, time };
}

export default page;
