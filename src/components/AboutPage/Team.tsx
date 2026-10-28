import { BookCheckIcon, FileCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { teamMembers } from "@/staticData/AboutPage/TeamMembersData";

export default function Team() {
  return (
    <>
      {/* <section className="container mx-auto px-4 pb-10 md:-mt-30"> */}
      <section className="container mx-auto px-4 pb-10 md:-mt-10 lg:-mt-20 xl:-mt-30">
        <h2 className="text-3xl font-bold text-center">The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className=" border bg-teal-50/20  hover:scale-100 transition duration-700"
            >
              <CardHeader className="flex flex-row gap-8">
                <Avatar size="lg" className="">
                  <AvatarImage src={member.image} />
                  <AvatarFallback>
                    {member.firstName.charAt(0).toUpperCase()}
                    {member.lastName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {member.image}
                <div className="c">
                  <CardTitle className="font-extrabold">
                    {member.firstName} {member.lastName}
                  </CardTitle>
                  <CardDescription className="text-xl">
                    {member.postition}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="">
                <Accordion type="single" collapsible>
                  <AccordionItem value="Profile">
                    <AccordionTrigger className="font-semibold hover:no-underline">
                      Profile:
                    </AccordionTrigger>
                    <AccordionContent className="ml-2 md:ml-10">
                      {member.profileDescription}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="Areas of Expertise">
                    <AccordionTrigger className="font-semibold hover:no-underline">
                      Areas of Expertise:
                    </AccordionTrigger>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {member.expertise.map((strength) => (
                        <AccordionContent
                          key={strength}
                          // className="ml-2 md:ml-10 flex items-center gap-2"
                          className="ml-2 md:ml-10 grid grid-cols-12 items-center gap-1"
                        >
                          <FileCheck size={10} className=" block col-span-1 text-teal-300" />{" "}
                          <span className="block col-span-11">
                          {strength}
                          </span>
                        </AccordionContent>
                      ))}
                    </div>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="Academic & Professional Qualifications">
                    <AccordionTrigger className="font-semibold hover:no-underline">
                      Academic & Professional Qualifications:
                    </AccordionTrigger>
                    {member.academics.map((strength) => (
                      <AccordionContent
                        key={strength}
                        // className="ml-2 md:ml-10 flex items-center gap-2"
                        className="ml-2 md:ml-10 grid grid-cols-12  items-center gap-1"
                      >
                        <BookCheckIcon size={10} className="block col-span-1 text-teal-300" />{" "}
                        <span className="block col-span-11 xl:-ml-8">
                          {strength}
                        </span>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
