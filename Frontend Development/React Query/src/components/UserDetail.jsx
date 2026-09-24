import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserById, useUpdateUser } from "../hooks/useUsers";
import { BiLoaderAlt } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";

const UserDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { data, isPending, isError, error } = useUserById(id);

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BiLoaderAlt className="text-5xl animate-spin text-blue-600" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600 text-lg font-semibold">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition"
      >
        <IoArrowBack size={18} />
        Back
      </button>
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={data.image}
          alt={data.firstName}
          className="w-36 h-36 rounded-full border-4 border-blue-500"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {data.firstName} {data.lastName}
          </h1>

          <p className="text-gray-500">@{data.username}</p>

          <p className="mt-2">{data.email}</p>

          <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {data.role}
          </span>
        </div>
      </div>

      {/* Information */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {/* Personal */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Personal Information
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Age:</strong> {data.age}
            </p>

            <p>
              <strong>Gender:</strong> {data.gender}
            </p>

            <p>
              <strong>Phone:</strong> {data.phone}
            </p>

            <p>
              <strong>Blood Group:</strong> {data.bloodGroup}
            </p>

            <p>
              <strong>Height:</strong> {data.height} cm
            </p>

            <p>
              <strong>Weight:</strong> {data.weight} kg
            </p>

            <p>
              <strong>Eye Color:</strong> {data.eyeColor}
            </p>

            <p>
              <strong>Hair:</strong> {data.hair.color} ({data.hair.type})
            </p>

            <p>
              <strong>Birth Date:</strong> {data.birthDate}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Address
          </h2>

          <div className="space-y-3">
            <p>{data.address.address}</p>

            <p>
              {data.address.city}, {data.address.state}
            </p>

            <p>{data.address.country}</p>

            <p>{data.address.postalCode}</p>
          </div>
        </div>

        {/* Company */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Company
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Name:</strong> {data.company.name}
            </p>

            <p>
              <strong>Department:</strong> {data.company.department}
            </p>

            <p>
              <strong>Title:</strong> {data.company.title}
            </p>

            <p>
              <strong>University:</strong> {data.university}
            </p>
          </div>
        </div>

        {/* Bank */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Bank Information
          </h2>

          <div className="space-y-3">
            <p>
              <strong>Card Type:</strong> {data.bank.cardType}
            </p>

            <p>
              <strong>Card Number:</strong> {data.bank.cardNumber}
            </p>

            <p>
              <strong>Expiry:</strong> {data.bank.cardExpire}
            </p>

            <p>
              <strong>Currency:</strong> {data.bank.currency}
            </p>

            <p>
              <strong>IBAN:</strong> {data.bank.iban}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;