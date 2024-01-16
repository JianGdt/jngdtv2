import { experiences } from "@/app/constant/experiences";

export default function Experiences() {

return (
    <section className="container">
        <div>
            <h1 className="text-5xl md:text-7xl font-medium text-center drop-shadow-text">Experiences</h1>
        </div>
        <ul className="my-5 md:my-16">
            {experiences.map((experience) => (
                <li key={experience.companyName} className="bg-dark justify-center flex flex-col p-9 my-5 h-52 rounded-md shadow-2xl">
                    <div className="flex flex-col text-center md:flex-row justify-between ">
                        <h1 className="text-2xl font-bold">{experience.companyName}</h1>
                        <span className="text-sm bg-darkest text-white rounded-md p-2">{experience.years}</span>
                    </div>
                    <p className="text-sm text-light text-center md:text-start">{experience.skills}</p>
                </li>
            ))}
        </ul>
    </section>
    )

}
