"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { indianStates, getCitiesByState } from "@/data/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  eventType: z.string().min(1),
  isBRM: z.boolean(),
  isFree: z.boolean(),
  price: z.number().nonnegative(),
  eventDate: z.string().min(1),
  registrationDeadline: z.string().min(1),
  state: z.string().min(1),
  city: z.string().min(1),
  locationText: z.string().min(3),
  organizer: z.string().min(2),
  officialLink: z.string().url(),
  bannerImage: z.string().optional()
});

type FormData = z.infer<typeof schema>;

const eventTypes = ["Road Cycling", "Mountain Bike (MTB)", "BRM", "Government Event", "Casual Ride"];

export default function SubmitPage() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      isBRM: false,
      isFree: true,
      price: 0,
      state: "Maharashtra",
      city: "Mumbai"
    }
  });

  const state = watch("state");
  const isFree = watch("isFree");
  const isBRM = watch("isBRM");
  const cities = getCitiesByState(state).filter((item) => item !== "All Cities");

  const onSubmit = (_data: FormData) => {
    toast.success("Event submitted successfully! (Mock submit)");
    reset();
  };

  return (
    <div className="container py-8">
      <h1 className="mb-2 text-3xl font-bold">Submit an Event</h1>
      <p className="mb-6 text-muted-foreground">Share your cycling event with riders across India. This is a frontend-only mock flow.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="glass-card grid gap-4 p-6 md:grid-cols-2">
        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Event Name</label>
          <Input {...register("title")} />
          {errors.title && <p className="text-xs text-red-600">Event name is required.</p>}
        </div>

        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Description</label>
          <Textarea {...register("description")} />
          {errors.description && <p className="text-xs text-red-600">Please provide at least 10 characters.</p>}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Event Type</label>
          <Select options={eventTypes} {...register("eventType")} />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Is it BRM?</label>
          <div className="pt-2"><Switch checked={isBRM} onChange={(checked) => setValue("isBRM", checked)} /></div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Free Event?</label>
          <div className="pt-2"><Switch checked={isFree} onChange={(checked) => {
            setValue("isFree", checked);
            if (checked) setValue("price", 0);
          }} /></div>
        </div>

        {!isFree && (
          <div className="space-y-1">
            <label className="text-sm font-medium">Price (INR)</label>
            <Input type="number" {...register("price", { valueAsNumber: true })} />
          </div>
        )}

        <div className="space-y-1">
          <label className="text-sm font-medium">Event Date</label>
          <Input type="date" {...register("eventDate")} />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Registration Deadline</label>
          <Input type="date" {...register("registrationDeadline")} />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">State</label>
          <Select options={indianStates.filter((item) => item !== "All States")} {...register("state")} />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">City</label>
          <Select options={cities.length ? cities : ["Select City"]} {...register("city")} />
        </div>

        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Location</label>
          <Input {...register("locationText")} placeholder="E.g. Marine Drive, Mumbai" />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Organizer Name</label>
          <Input {...register("organizer")} />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Official Event Link</label>
          <Input {...register("officialLink")} placeholder="https://..." />
          {errors.officialLink && <p className="text-xs text-red-600">Please enter a valid URL.</p>}
        </div>

        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium">Banner Image URL (UI only)</label>
          <Input {...register("bannerImage")} placeholder="https://images..." />
        </div>

        <div className="md:col-span-2 pt-2">
          <Button type="submit" size="lg">Submit Event</Button>
        </div>
      </form>
    </div>
  );
}
