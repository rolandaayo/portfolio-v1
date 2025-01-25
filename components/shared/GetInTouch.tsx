import Link from "next/link";
import Image from "next/image";

function GetInTouch() {
  const socialLinks = [
    {
      title: "LinkedIn",
      icon: "/assets/images/assets/linkedin.avif",
      href: "https://www.linkedin.com/in/roland-ibiwoye/",
    },
    {
      title: "Threads",
      icon: "/assets/images/assets/thread.avif",
      href: "https://www.threads.net/@rolandaayo",
    },
    {
      title: "Instagram",
      icon: "/assets/images/assets/instagram.avif",
      href: "https://instagram.com/rolandaayo",
    },
    {
      title: "Twitter",
      icon: "/assets/images/assets/x.avif",
      href: "https://x.com/theayotomiwa",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl">🙋🏻‍♂️</span>
        <h2 className="text-2xl font-semibold text-white">get in touch!</h2>
      </div>

      <div className="w-full max-w-3xl bg-[#171717] rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm mb-1">Reach out to me →</span>
          <Link 
            href="mailto:ibiwoyeroland@gmail.com"
            className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300 hover:text-pink-500 transition-colors"
          >
            ibiwoyeroland@gmail.com
          </Link>
        </div>

        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C1C1C] p-3 rounded-xl hover:scale-110 transition-transform"
            >
              <Image
                src={link.icon}
                alt={link.title}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetInTouch; 