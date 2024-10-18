"use client ";

import { Fragment } from "react";
import Image from "next/image";
import NoData from "../images/searching-with-telescope-3025710-2526908.png";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import website from "../data/website.json";
import DeleteModal from "./DeleteModal";
import Button from "./Button";
export const revalidate = 10;
const Widgets = () => {
  const [selectedWidgetIndex, setSelectedWidgetIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [widgetForm, setWidgetForm] = useState([]);
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [widgetid, setwidgetid] = useState(43);

  const uniqueid = Math.ceil(Math.random() * 100);

  const validateURL = (url) => {
    const regEx =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    return regEx.test(url);
  };

  useEffect(() => {
    console.log("Submitted Form =", widgetForm);
  }, [widgetForm]);
  function handleSiteWidget(event) {
    event.preventDefault();
    const isValid = validateURL(siteUrl);
    setIsValid(isValid);
    setwidgetid(uniqueid);
    if (isValid) {
      const arrayId = widgetForm.length + 1;
      const newWidget = {
        id: arrayId,
        name: siteName,
        url: siteUrl,
        widgetID: widgetid,
      };
      setWidgetForm((form) => [...form, newWidget]);
      setMessage("Valid");
      setSiteName("");
      setSiteUrl("");
    } else {
      setMessage("Invalid URL.");
    }
  }
  function handleSiteName(event) {
    setSiteName(event.target.value);
  }
  function handleSiteUrl(event) {
    setSiteUrl(event.target.value);
  }
  const handleOpenModal = (widgetID) => {
    setSelectedWidgetIndex(widgetID);
    setShowModal(true);
  };
  const handleDeleteWidget = () => {
    const updatedWidgetList = widgetForm.filter(
      (widget) => widget.widgetID !== selectedWidgetIndex
    );
    setWidgetForm(updatedWidgetList);
    setShowModal(false);
    setSelectedWidgetIndex(null);
  };
  return (
    <>
      <Fragment>
        <div className="flex flex-col justify-end w-full max-w-[1124px] mx-auto gap-4 ">
         

          <div className="flex  items-center place-self-end justify-between border rounded-md p-4 border-[#E4E4E7] w-full max-w-[310px] h-12 bg-white ">
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
          <div className="flex justify-center gap-3">
            <div className="w-full max-w-[580px]  h-full min-h-[374px] rounded-xl border p-6 bg-white border[-#E4E4E7] ">
              <h1 className="font-bold text-xl text-[#18181B] pb-4">
                Add Widgets
              </h1>

              <div className="flex flex-col">
                <label
                  htmlFor="Name"
                  className="font-semibold text-sm text-[#18181B]"
                >
                  Name
                </label>
                <input
                  value={siteName}
                  onChange={handleSiteName}
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
                  value={siteUrl}
                  onChange={handleSiteUrl}
                  type="text"
                  required
                  name="url"
                  className="text-xs font-normal text-[#A1A1AA] w-full h-[42px] my-2 rounded-md border py-3 px-4 border-[#E4E4E7] bg-white"
                  placeholder="Enter URL of the website"
                />
              </div>
              {message && (
                <p
                  style={isValid ? { color: "#446A46" } : { color: "#990000" }}
                >
                  {message}
                </p>
              )}
              <Button
                onClickFunctionality={handleSiteWidget}
                text="Add Widget"
                disabled={`${
                  siteName.length === 0 || siteUrl.length === 0
                    ? "bg-[#18181B]/50 cursor-not-allowed"
                    : "bg-[#18181B]"
                }`}
              />
            </div>
            <div className="w-full max-w-[580px] h-full min-h-[358px] rounded-xl border p-6 bg-white border[-#E4E4E7]">
              <div className="flex justify-between">
                <h1 className="font-bold text-xl text-[#18181B]">
                  Added Widgets
                </h1>
                <Button
                  primary
                  text="Print"
                  onClickFunctionality={handleSiteWidget}
                />
              </div>
              <div>
                <table className="w-full h-full rounded-xl bg-white text-left border border-[#E4E4E8] mt-[16px] ">
                  <thead className="font-semibold text-base border-b border-[#E4E4E8]">
                    <tr>
                      <th className="px-[16px] py-[14px] w-[385px]">Website</th>
                      <th className="px-[16px]  w-[99px]">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="font-normal text-xs text-[#52525B] w-full">
                    {widgetForm.length === 0 ? (
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
                        {widgetForm.map((widget, index) => (
                          <tr className="w-full" key={index}>
                            <td className="px-[16px] w-full max-w-[224px] py-[21.5px]">
                              {widget.url}
                            </td>
                            <td>
                              <div className="flex text-[20px] ">
                                <button
                                  onClick={() => {
                                    navigator.clipboard.writeText(widget.url);
                                    alert("URL copied");
                                  }}
                                >
                                  {" "}
                                  <IoCopyOutline className="mx-3" />
                                </button>
                                <button
                                  onClick={() => {
                                    handleOpenModal(widget.widgetID);
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
