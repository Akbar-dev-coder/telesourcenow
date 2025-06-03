"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";

export default function JobDetailPage() {
  const [tab, setTab] = useState("overview");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">
      <div className="flex flex-col items-center text-center gap-2">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={250}
          height={100}
          className="rounded"
        />
        <h1 className="text-xl md:text-2xl font-semibold">
          Junior UI/UX Designer
        </h1>
        <div className="text-sm text-gray-500 flex flex-wrap justify-center items-center gap-2">
          <span>Remote</span>
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span>Full time</span>
          <span>· RL</span>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="w-full flex justify-center border-b">
          <TabsTrigger value="overview" className="px-4 py-2">
            OVERVIEW
          </TabsTrigger>
          <TabsTrigger value="application" className="px-4 py-2">
            APPLICATION
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="bg-gray-50 p-4 md:p-6 rounded-md space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Description</h2>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
            <div className="text-gray-700 space-y-3">
              <p className="font-semibold">Company Overview:</p>
              <p>
                Join our innovative team as a Junior UI/UX Designer at
                TelesourceNow, a leading Seivice Based company committed to
                creating exceptional user experiences. We specialize in [brief
                company description].
              </p>
            </div>
            <h3 className="font-bold">Job Description:</h3>
            <p>
              As a Junior UI/UX Designer, you will collaborate with our design
              and development teams to craft intuitive user interfaces and
              engaging experiences for our digital products. You will be
              involved in the entire design process, from user research and
              wireframing to prototyping and usability testing.
            </p>
            <h3 className="font-bold">Key Responsibilities:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Assist in gathering and analyzing user requirements.</li>
              <li>
                Create wireframes, user flows, and prototypes to communicate
                design ideas.
              </li>
              <li>
                Collaborate with cross-functional teams to ensure designs meet
                user needs and business goals.
              </li>
              <li>
                Conduct usability testing and gather feedback to iterate on
                designs.
              </li>
              <li>
                Stay updated on industry trends and best practices in UI/UX
                design.
              </li>
              <h3 className="font-bold">Requirements:</h3>
              <li>
                Degree in Design, Human-Computer Interaction, or a related
                field.
              </li>
              <li>
                Proficiency in design tools such as Sketch, Adobe XD, or Figma.
              </li>
              <li>
                Strong visual design skills with an eye for aesthetics and
                detail.
              </li>
              <li>Excellent communication and teamwork skills.</li>
              <li>
                Ability to work in a fast-paced, collaborative environment.
              </li>
              <h3 className="font-bold">Preferred Qualifications:</h3>
              <li>
                Portfolio showcasing UI/UX projects (academic or professional).
              </li>
              <li>
                Basic understanding of HTML/CSS and responsive design
                principles.
              </li>
              <li>Familiarity with user research methodologies.</li>
              <h3 className="font-bold"> Preferred Qualifications:</h3>
              <li>Mentorship and training from experienced designers.</li>
              <li>
                Opportunity to work on diverse projects and gain hands-on
                experience.
              </li>
              <li>
                Competitive compensation package and career growth
                opportunities.
              </li>
            </ul>

            <Button
              size={"lg"}
              className="w-full mt-4"
              onClick={() => setTab("application")}
            >
              Apply Now
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="application">
          <div className="p-4 text-gray-600 text-sm">
            <form
              onSubmit={handleSubmit}
              className=" p-6 space-y-6 bg-white shadow rounded-md"
            >
              <h2 className="text-xl font-bold">Personal information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="space-y-2">
                  <Label>
                    <span className="text-red-500">*</span>
                    First Name
                  </Label>
                  <Input
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>
                    <span className="text-red-500">*</span>
                    Last Name
                  </Label>
                  <Input
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>
                  <span className="text-red-500">*</span>
                  Email
                </Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>
                  <span className="text-red-500">*</span>
                  Phone
                </Label>
                <div className="flex gap-2 items-center">
                  <span className="border rounded p-2 bg-gray-50">+91</span>
                  <Input
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>
                  <span className="text-red-500">*</span>
                  Address
                </Label>
                <Input
                  name="address"
                  placeholder="Address incl. city, region, and country"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>
                  Photo <span className="text-gray-400"> (Optional)</span>
                </Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center text-gray-500 cursor-pointer">
                  <UploadCloud className="w-8 h-8 mb-2" />
                  <p>Upload a file or drag and drop here</p>
                  <input type="file" name="resume" className="cursor-pointer" />
                </div>
              </div>

              <Label>
                {" "}
                <span className="text-red-500">*</span>How did you hear about
                SupportYourApp?
              </Label>
              <RadioGroup
                name="source"
                className="grid md:grid-cols-2 gap-2"
                onChange={handleChange}
              >
                {[
                  "LinkedIn",
                  "Glassdoor",
                  "Indeed",
                  "Recommendation",
                  "Google search",
                  "YouTube",
                  "Telegram",
                  "Twitter",
                  "Facebook",
                  "EuropeLanguageJobs",
                  "Jooble",
                  "Jobs.ua",
                  "Work.ua",
                  "Sjobs",
                  "Career fair",
                  "Other",
                ].map((option) => (
                  <Label key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} />
                    <span>{option}</span>
                  </Label>
                ))}
              </RadioGroup>

              <Textarea
                name="country"
                placeholder="What country are you based in?"
                onChange={handleChange}
                required
              />

              <Label>
                {" "}
                <span className="text-red-500">*</span>Do you have a personal
                laptop / PC?
              </Label>
              <RadioGroup
                name="hasPC"
                className="flex gap-4"
                onChange={handleChange}
              >
                <Label className="flex items-center space-x-2">
                  <RadioGroupItem value="Yes" />
                  <span>Yes</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <RadioGroupItem value="No" />
                  <span>No</span>
                </Label>
              </RadioGroup>

              <Label>
                {" "}
                <span className="text-red-500">*</span>Have you worked with
                SupportYourApp before?
              </Label>
              <RadioGroup
                name="workedBefore"
                className="flex gap-4"
                onChange={handleChange}
              >
                <Label className="flex items-center space-x-2">
                  <RadioGroupItem value="Yes" />
                  <span>Yes</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <RadioGroupItem value="No" />
                  <span>No</span>
                </Label>
              </RadioGroup>
              <div className="space-y-2">
                <Label>
                  <span className="text-red-500">*</span>What is your
                  citizenship? If more than one, mention it as well.
                </Label>
                <Textarea name="citizenship" onChange={handleChange} required />
              </div>

              <Label>
                {" "}
                <span className="text-red-500">*</span>
                Are you located or originate from any of the following
                countries: Cuba, Iran, North Korea, Syria, Sudan, Russian
                Federation, Belarus, Crimea, Donetsk region, Luhansk region, or
                other Russia-sanctioned territories?
              </Label>
              <RadioGroup
                name="restrictedOrigin"
                className="flex gap-4"
                onChange={handleChange}
              >
                <Label className="flex items-center space-x-2">
                  <RadioGroupItem value="Yes" />
                  <span>Yes</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <RadioGroupItem value="No" />
                  <span>No</span>
                </Label>
              </RadioGroup>

              <h2 className="text-xl font-bold">Profile</h2>
              <div className="space-y-2">
                <Label>
                  <span className="text-red-500">*</span>
                  Resume
                </Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center text-gray-500 cursor-pointer">
                  <UploadCloud className="w-8 h-8 mb-2" />
                  <p>Upload a file or drag and drop here</p>
                  <input
                    type="file"
                    name="profileUpload"
                    className="cursor-pointer"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>
                  LinkedIn profile link{" "}
                  <span className="text-gray-400">(Optional) </span>
                </Label>
                <Input name="linkedin" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label>
                  Instagram profile link{" "}
                  <span className="text-gray-400">(Optional) </span>
                </Label>
                <Input name="instagram" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label>
                  Facebook profile link{" "}
                  <span className="text-gray-400">(Optional) </span>
                </Label>
                <Input name="facebook" onChange={handleChange} />
              </div>

              <Label>
                <span className="text-red-500">*</span> Are you at least 18
                years of age?
              </Label>
              <RadioGroup
                name="age"
                className="flex gap-4"
                onChange={handleChange}
              >
                <Label className="flex items-center space-x-2">
                  <RadioGroupItem value="Yes" />
                  <span>Yes</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <RadioGroupItem value="No" />
                  <span>No</span>
                </Label>
              </RadioGroup>

              <Label>
                {" "}
                <span className="text-red-500">*</span>Date of birth
              </Label>
              <Input name="date" type="date" onChange={handleChange} required />

              <Label>
                {" "}
                <span className="text-red-500">*</span>Cover Letter{" "}
              </Label>
              <Textarea name="coverLetter" onChange={handleChange} required />
              <div className="space-y-2">
                <Label>
                  {" "}
                  <span className="text-red-500 mr-1">*</span>Do you have
                  experience in customer support?
                </Label>
                <RadioGroup
                  name="customerSupport"
                  className="flex gap-4"
                  onChange={handleChange}
                >
                  <Label className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" />
                    <span>Yes</span>
                  </Label>
                  <Label className="flex items-center space-x-2">
                    <RadioGroupItem value="No" />
                    <span>No</span>
                  </Label>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>
                  <span className="text-red-500 mr-1">*</span> When will you be
                  able to start a new role?
                </Label>
                <Textarea
                  name="startDate"
                  className="border p-2 rounded w-full"
                  rows={2}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
