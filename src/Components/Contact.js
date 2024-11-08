import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" items-center mt-20">
      <h1 className="font-manrope  text-center font-bold text-slate-600 text-5xl" > Contact Us</h1>
      
      <p className=" mt-20 w-[800px] text-center  ml-96">
        freestar Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>

      <div className="text-center mt-20 mb-20  ml-[650px] items-center  flex space-x-10 text-xl">
        <FaFacebook className=" cursor-pointer text-center text-6xl"></FaFacebook>
        <FaInstagram className=" cursor-pointer text-6xl"></FaInstagram>
        <FaTwitter className=" cursor-pointer text-6xl"></FaTwitter>
      </div>
      
    </div>
  );
};

export default Contact;
