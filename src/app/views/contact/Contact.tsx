import Link from "next/link";

export default function Contact() {

    return (
        <section className="container py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-start md:text-center">Contact</h1>
            <div className="justify-center mt-12 mb-16 sm:mb-28 md:mb-24 flex flex-col h-[28rem] shadow-md rounded-xl">
            <h1 className="text-4xl text-center mb-10">Get in Touch</h1>
            <p>I’m open to new opportunities and would appreciate it, Feel free to send me an <Link
              href="mailto:Jgodito27@gmail.com" className="font-bold">
              Email
            </Link>
            </p>
            </div>
        </section>
    )

}