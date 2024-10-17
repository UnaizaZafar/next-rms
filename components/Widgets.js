"use client ";

import { Fragment } from "react";
import Image from "next/image";
import NoData from "../images/searching-with-telescope-3025710-2526908.png";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import website from "../data/website.json";
import DeleteModal from "./DeleteModal";
import Button from "./Button";
export const revalidate = 10;
const Widgets = () => {
  const [formData, setForm] = useState({
    name: "",
    url: "",
  });

  const [widgetList, setWidgetList] = useState([]);
  const [selectedWidgetIndex, setSelectedWidgetIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const validateURL = (url) => {
    const regEx =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    return regEx.test(url);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked")
    const isValid = validateURL(formData.url);
    setIsValid(isValid);
    if (isValid) {
      setMessage("Valid");
      setWidgetList([
        ...widgetList,
        { ...formData, widgetId: Math.floor(Math.random() * 100) },
      ]); //formData duplicated in widgetList
      setForm({
        name: "",
        url: "",
      });
      console.log("form submitted");
     
      console.log({ formData, widgetId: Math.floor(Math.random() * 100) });
    } else {
      setMessage("Not Valid");
    }
   
  };
  const handleValues = (fieldName, newValue) => {
    setForm({
      ...formData,
      [fieldName]: newValue,
    });
  };

  const handleOpenModal = (widgetId) => {
    setSelectedWidgetIndex(widgetId);
    setShowModal(true);
  };
  const handleDeleteWidget = () => {
    const updatedWidgetList = widgetList.filter(
      (widget) => widget.widgetId !== selectedWidgetIndex
    );
    setWidgetList(updatedWidgetList);
    setShowModal(false);
    setSelectedWidgetIndex(null);
  };

  return (
    <>
      <Fragment>
        <div className="flex flex-col gap-4 justify-end ">
          <div className="flex items-center  place-self-end justify-between border rounded-md p-4 border-[#E4E4E7] w-full max-w-[310px] h-12 bg-white ">
            <div
              type="text"
              placeholder=""
              className="font-normal text-sm text-[#A1A1AA]"
            >
              Search Widgets
            </div>
            <div>
              <IoIosSearch className="text-base" />
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div className="w-full  h-full rounded-xl border p-6 bg-white border[-#E4E4E7] ">
              <h1 className="font-bold text-xl text-[#18181B] pb-4">
                Add Widgets
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label
                    htmlFor="Name"
                    className="font-semibold text-sm text-[#18181B]"
                  >
                    Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={(e) => handleValues("name", e.target.value)}
                    type="text"
                    name="name"
                    required
                    className="text-xs font-normal text-[#A1A1AA] w-full h-[42px] my-2 rounded-md border py-3 px-4 border-[#E4E4E7] bg-white"
                    placeholder="Enter name"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="URL"
                    className="font-semibold text-sm text-[#18181B] mt-4"
                  >
                    URL
                  </label>
                  <input
                    value={formData.url}
                    onChange={(e) => handleValues("url", e.target.value)}
                    type="text"
                    required
                    name="url"
                    className="text-xs font-normal text-[#A1A1AA] w-full h-[42px] my-2 rounded-md border py-3 px-4 border-[#E4E4E7] bg-white"
                    placeholder="Enter URL of the website"
                  />
                </div>
                {message && (
                  <p
                    style={
                      isValid ? { color: "#446A46" } : { color: "#990000" }
                    }
                  >
                    {message}
                  </p>
                )}
               <Button text="Add Widget"  state={`${formData.name.length === 0 || formData.url.length === 0
                      ? "bg-[#18181B]/50 cursor-not-allowed"
                      : "bg-[#18181B]"
                  }`} />
                {/* <button
                  type="submit"
                  className={` text-white flex justify-end my-6  rounded-md py-3 px-6 items-center   w-full max-w-[124px] h-[45px]  font-medium text-sm ${
                    formData.name.length === 0 || formData.url.length === 0
                      ? "bg-[#18181B]/50 cursor-not-allowed"
                      : "bg-[#18181B]"
                  }`}
                  disabled={
                    formData.name.length === 0 ||
                    formData.url.length === 0 ||
                    disable === true
                  }
                >
                  Add Widget
                </button> */}
              </form>
            </div>
            <div className="w-full  h-full min-h-[358px] rounded-xl border p-6 bg-white border[-#E4E4E7]">
              <h1 className="font-bold text-xl text-[#18181B]">
                Added Widgets
              </h1>
              <div>
                <table className="w-full h-full rounded-xl bg-white text-left border border-[#E4E4E8] mt-[16px] ">
                  <thead className="font-semibold text-base border-b border-[#E4E4E8]">
                    <tr>
                      <th className="px-[16px] py-[14px] w-[385px]">Website</th>
                      <th className="px-[16px]  w-[99px]">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="font-normal text-xs text-[#52525B] w-full">
                    {widgetList.length === 0 ? (
                      <tr className=" p-4 w-full">
                        <td colSpan={2}>
                          <div className="flex flex-col gap-3 items-center justify-center w-full">
                            <Image
                              alt=""
                              src={NoData}
                              width={210}
                              height="216px"
                            />
                            <p className="font-bold text-lg">No Data Found</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      <>
                        {widgetList.map((widget, index) => (
                          <tr className="w-full" key={index}>
                            <td className="px-[16px] w-full max-w-[224px] py-[21.5px]">
                              {widget.url}
                            </td>
                            <td>
                              <div className="flex text-[20px] ">
                                <button
                                  onClick={() => {
                                    navigator.clipboard.writeText(widget.url);
                                    alert("URl copied");
                                  }}
                                >
                                  {" "}
                                  <IoCopyOutline className="mx-3" />
                                </button>
                                <button
                                  onClick={() => {
                                    handleOpenModal(widget.widgetId);
                                  }}
                                >
                                  <RiDeleteBin6Line />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <DeleteModal
              isVisible={showModal}
              handleDelete={handleDeleteWidget}
              // DeleteIndex={selectedWidgetIndex}
              onClose={() => setShowModal(false)}
            />
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Widgets;
