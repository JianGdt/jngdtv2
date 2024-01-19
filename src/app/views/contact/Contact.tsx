import Link from "next/link";

export default function Contact() {

    return (
        <section className="container text-center flex flex-col justify-center min-h-[52rem]">
            <div>
                <h1 className="text-5xl md:text-7xl font-medium text-center drop-shadow-text">Contact</h1>
            </div>
            <div className="justify-center mt-12 flex flex-col h-[28rem] shadow-md rounded-xl">
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