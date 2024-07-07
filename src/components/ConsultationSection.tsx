"use client";
import { motion } from "framer-motion";
import BookACall from "./BookACall";

const ConsultationSection = () => {
  return (
    <div className="container-fluid my-5 px-0">
      <motion.div
        className="video relative px-8 py-48 sm:px-16 sm:py-24 lg:px-32 lg:py-32 xl:px-64 xl:py-40 2xl:px-80 2xl:py-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("/card/consultation-always-works.jpg")`,
          backgroundAttachment: "fixed", // change from fixed to scroll
        }}
      >
        <h1 className="text-white mb-32 drop-shadow-xl lg:mb-20 absolute inset-0 flex items-center justify-center">
          Consultation always works.
        </h1>
        <p className="mx-5 text-white mb-0 drop-shadow-xl absolute inset-0 flex items-center justify-center">
          Feel free to consult with our expert team members regarding solar
          investments.
        </p>
      </motion.div>
      <div
        className="container position-relative animate-fade-in-up"
        style={{ marginTop: "-6rem" }}
      >
        <BookACall />
      </div>
    </div>
  );
};

export default ConsultationSection;
