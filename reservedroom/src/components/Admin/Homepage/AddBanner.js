import React, { useState } from "react";
import Axios from "axios";

export default function AddBanner() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const handleImage = (event) => {
    event.preventDefault();
    let files = event.target.files;

    let size = files[0].size;

    if (Math.round(size / 2048) > 2048) {
      alert("Image size should be less than 1MB");
    } else {
      var allowedExtension = /(\.jpg||\.jpeg||\.png||\.gif)$/i;

      if (allowedExtension.exec(files[0])) {
        let reader = new FileReader();

        reader.readAsDataURL(files[0]);

        reader.onloadend = (e) => {
          setImage(e.target.result);
        };
      } else {
        alert("Invalid File type");
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      Img: image,
      Name: name,
    };

    if (!image.length || !name.length) {
      alert("All fields are mandatory");
    } else {
      console.log(data);
      Axios.post("http://localhost:5000/CarouselImg/add", { data })
        .then((response) => {
          console.log(response.data);
          alert("banner image Added Successfully");
          setTimeout(() => {
            window.location = "/admin/dashboard";
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let previewImage = "";

  if (image) {
    previewImage = (
      <image
        src={image}
        alt="Image Preview"
        className="content border-2 border-black my-5 w-25 h-25"
      />
    );
  } else {
    previewImage = (
      <div className="content border-black border-2 my-5 md:my-5 lg:my-5 xl:my-5"></div>
    );
  }

  return (
    <div className="my-5 xl:flex xl:items-center xl:justify-between">
      <label className="font-bold text-1xl md:text-1xl lg:text-2xl xl:text-2xl">
        Add Banner-1
      </label>
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={(e) => handleImage(e)}
        className="p-3 rounded-md w-11/12 md:w-full lg:w-full xl:w-2/6 block"
      />
      <div className="my-5 xl:flex xl:items-center xl:justify-between">
        <label className="font-bold text-1xl md:text-2xl lg:text-2xl xl:text-2xl mx-3">
          add Banner Name
        </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="px-4 py-2 border-2 border-black rounded-md w-11/12 md:w-full lg:w-full  xl:w-2/6"
        />
      </div>
      <div className="">
        <button
          className=""
          style={{ backgroundColor: "#9E0F11", color: "white" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="h-auto w-auto">
        <h1 className="font-bold text-1xl md:text-1xl lg:text-2xl xl:text-2xl">
          Preview Image
        </h1>
        <div className="block">{previewImage}</div>
      </div>
    </div>
  );
}
