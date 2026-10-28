import { BadgeCheck, Dot, FilePen } from "lucide-react";
import ProjectImageCarousel from "./ProjectImageCarousel";
import { projects } from "@/staticData/ProjectsPage/ProjectsData";

export default function ProjectsSection() {
  return (
    <>
      <section className="conatiner mx-auto px-4 my-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Our Project Portfolio
        </h1>

        <div className="container  mx-auto my-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-wrap md:flex-nowrap gap-y- my-28 border rounded-md"
            >
              {/* <div className="w-full md:w-5/12  h-[70dvh] 2xl:h-[55dvh]  roun"> */}
              <div className="w-full md:w-5/12   ">
                <ProjectImageCarousel images={project.images} />
              </div>

              <div className="w-full md:w-7/12 md:mx-auto  min-h-[75dvh] lg:min-h-[80dvh] 2xl:min-h-[85dvh] odd:bg-white even:bg-teal-100 round px-4 py-12">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <hr className="border border-l border-teal-300 my-8" />
                <h4 className="text-lg font-semibold mb-4">Project Scope:</h4>
           
                <ul className="list-disc space-y-8 lg:ml-2 h-[30dvh] overflow-y-auto px-0 lg:px-2 bg-lime-3000 ">
                  {project.scope.map((scopeList) => (
                    <li key={scopeList} className="grid grid-cols-12 gap-7 lg:gap-1 items-center">
                      <Dot
                        className="text-teal-500 block size-8 lg:size-12 ml-auto col-span-1"
                      />
                      <p className="col-span-10 lg:col-span-11">

                      {scopeList}
                      </p>
                    </li>
                  ))}
                </ul>
                <hr className="border border-teal-300 my-8" />
                <h4 className="text-lg font-semibold  mb-4">Outcome:</h4>
                <div className="space-y-2 ml-2">
                  {project.outcome.map((outcomeList) => (
                    <p key={outcomeList} className="grid grid-cols-12 gap-7 lg:gap-1 items-center">
                      <BadgeCheck
                        className="text-green-300 block size-8 lg:size-12 ml-auto col-span-1"
                      />
                      <span className="block col-span-10 lg:col-span-11 ml-4 lg:ml-2">

                      {outcomeList}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
