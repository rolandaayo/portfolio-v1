import Link from "next/link";
import Image from "next/image";

function Contact() {
  const contactlinks = [
    {
      title: "Linkedin",
      icon: "/assets/images/assets/linkedin.avif",
      href: "https://www.linkedin.com/in/roland-ibiwoye/",
    },
    {
      title: "Instagram",
      icon: "/assets/images/assets/instagram.avif",
      href: "https://github.com/rolandaayo",
    },
    {
      title: "Thread",
      icon: "/assets/images/assets/thread.avif",
      href: "mailto:ibiwoyeroland@gmail.com",
    },
    {
      title: "Twitter",
      icon: "/assets/images/assets/x.avif",
      href: "https://x.com/rolandaayo",
    }
  ];

  return (
    <div id="contact" className="hover:cursor-pointer lg:px-40 sm:px-9 py-8 mt-14">
      {/* <!-- Use flex-col to stack on small screens, flex-row for larger screens --> */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <span className="text-gray-500 text-sm">Reach out to me <span aria-hidden="true">→</span></span> <br />
          <Link href="mailto:ibiwoyeroland@gmail.com">
            <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-100 hover:text-pink-500 tracking-wide font-sans">ibiwoyeroland@gmail.com</span>
          </Link>
        </div>

        {/* <!-- Keep icons in a straight line using flex-row on all screen sizes --> */}
        <div className="flex flex-row items-center space-x-4">
          {contactlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-neutral-300 hover:shadow-md"
              aria-label={link.title}
            >
              <Image
                src={link.icon}
                alt={link.title}
                width={24}
                height={24}
                className="text-gray-600 dark:text-neutral-300 hover:text-black"
              />
            </Link>
          ))}
        </div>
      </div>

      <footer className="mt-10 text-center">
        <hr />
        <br />
        <span className="font-light text-sm text-gray-600">Copyright  2025 - Roland Ibiwoye Ayotomiwa.</span>

      </footer>
    </div>
  )
}

export default Contact