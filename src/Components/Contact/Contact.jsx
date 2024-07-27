import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-3 md:py-6 px-7 md:px-16 text-center " id="contact">
      <div className="text-center">
        <h4 className="text-4xl font-bold">Contect Me</h4>
      </div>
      <div className="items-center justify-center my-10">
        <div className=""><span className="text-xl font-bold">Email:</span> sohelrana266130@gmail.com</div>
        <div className="py-4"><span className="text-xl font-bold">WhatsApp:</span> +447309272502</div>
      </div>
      <div className="flex justify-center items-center mb-16 text-2xl gap-6">
          <a target="_blank" href="https://github.com/sohelrana15031996"><FaGithub></FaGithub></a>
          <a target="_blank" href="https://www.linkedin.com/in/sohel-rana-878490295/"><FaLinkedin/></a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100087671144546"><FaFacebookF/> </a>
          <a target="_blank" href="https://x.com/Sohel1996Rana"><FaXTwitter/></a>
        </div>
    </div>
  );
};

export default Contact;