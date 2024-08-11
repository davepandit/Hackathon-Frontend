import React from "react";
import { Link } from "react-router-dom";

const Upload = () => {
  return (
    <>
      {/* this is where we should be making a form that can be used to upload images and videos */}
      <div className="font-bold mt-7 text-7xl text-center">
        Pixel Prodigies🚀
      </div>
      {/* here is the progress bar */}
      <div className="justify-center mt-7 flex gap-4">
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>&gt;&gt;</span>
        <Link to="/upload">
          <span>Upload</span>
        </Link>
      </div>
      <div className="flex gap-11 mt-11 justify-center items-center">
        {/* left part  */}
        <div class="flex items-center justify-center">
          <form class="bg-white p-6 rounded-lg shadow-md">
            <label
              for="file-upload"
              class="block text-lg font-medium text-gray-700"
            >
              Upload Image
            </label>
            <div class="mt-2">
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept="image/*"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
            <p class="mt-1 text-sm text-gray-500">PNG, JPG, GIF up to 10MB.</p>
          </form>
        </div>

        {/* right part  */}
        <div class="flex items-center justify-center">
          <form class="bg-white p-6 rounded-lg shadow-md">
            <label
              for="file-upload"
              class="block text-lg font-medium text-gray-700"
            >
              Upload Video
            </label>
            <div class="mt-2">
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept="image/*"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
            <p class="mt-1 text-sm text-gray-500">upto 100MB</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
