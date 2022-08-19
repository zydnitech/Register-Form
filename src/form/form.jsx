import React, { useState } from "react";
import Logo from "../images/logo";
import { useForm } from "react-hook-form";
import "./form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setdata] = useState("");
  const onSubmit = (d) => {
    setdata(d);
    console.log(data);
  };
  return (
    <div>
      <div className="container outer-box mt-5">
        <div className="header">
          <Logo />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="">
                Full Name <span className="spantag">*</span>
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                {...register("firstname", {
                  required: " Enter your firstname",
                })}
                placeholder="First Name"
              ></input>
              {errors.firstname && (
                <p className="errormsg">{errors.firstname.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <br />
              <input
                type="text"
                {...register("lastname", { required: " Enter your lastname" })}
                placeholder="Last Name"
                className=" form-control lastname"
              />
              {errors.lastname && (
                <p className="errormsg">{errors.lastname.message}</p>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="">
                Email <span className="spantag">*</span>
              </label>
              <br />
              <input
                type="text"
                {...register("mail", { required: "Please enter your E-mail" })}
                className="form-control"
                placeholder="example@example.com"
              />
              {errors.mail && <p className="errormsg">{errors.mail.message}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="">
                Contact Number <span className="spantag">*</span>
              </label>
              <br />
              <input
                type="text"
                {...register("phone", {
                  required: "Please enter your phone number",
                })}
                className="form-control"
                placeholder="Please enter your valid phone number"
              />
              {errors.phone && (
                <p className="errormsg">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 ">
              <label htmlFor="">
                Qualification <span className="spantag">*</span>
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                {...register("qualification", {
                  required: "Please enter your qualification",
                })}
                placeholder="Enter your qualification"
              />
              {errors.qualification && (
                <p className="errormsg">{errors.qualification.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="">
                Skillset <span className="spantag">*</span>
              </label>
              <br />
              <input
                type="text"
                {...register("skill", { required: "Please enter your Skills" })}
                className="form-control"
                placeholder="Enter your skillset"
              />
              {errors.skill && (
                <p className="errormsg">{errors.skill.message}</p>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="col-md-12 mt-3">
                <label htmlFor="">Are you experienced</label>
                <br />
                <label htmlFor="yes" className="radiolabel">
                  Yes
                </label>
                <input type="radio" id="yes" {...register("experience")} />
                <label htmlFor="no" className="radiolabel">
                  No
                </label>
                <input type="radio" id="no" {...register("experience")} />
              </div>
              <div className="col-md-12 mt-3">
                <label htmlFor="found">
                  Where You found us <span className="spantag">*</span>
                </label>
                <br />
                <select
                  {...register("select", { required: "Select an option" })}
                  className="form-select"
                  id="found"
                >
                  {errors.select && (
                    <p className="errormsg">{errors.select.message}</p>
                  )}
                  <option>Choose any one</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Whatsapp</option>
                  <option>Linkedin</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="col-md-12 mt-3">
                <label>
                  Upload Your Resume <span className="spantag">*</span>
                </label>
                <br />
                <input
                  className="form-control file"
                  type="file"
                  {...register("resume", {
                    required: "Please upload your resume",
                  })}
                  id=""
                />
                {errors.resume && (
                  <p className="errormsg">{errors.resume.message}</p>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="">Comments</label>
              <br />
              <textarea
                {...register("comment")}
                id=""
                cols="35"
                rows="10"
                placeholder="Tell us something..."
              ></textarea>
            </div>
          </div>
          <hr />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
