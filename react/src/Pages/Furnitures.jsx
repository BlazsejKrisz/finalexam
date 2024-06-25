import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchInput from "../Components/SearchInput";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Loading from "../Components/Loading";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Furnitures() {
  const { id } = useParams();
  const [furnitures, setFurnitures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredFurnitures, setFilteredFurnitures] = useState(null);
  const [searchWeight, setSearchWeight] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`/api/rooms/${id}/furnitures`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setFurnitures(res.furnitures);
        setFilteredFurnitures(res.furnitures);
      });
  }, [id]);

  useEffect(() => {
    let filtered = furnitures;

    if (searchWeight !== "") {
      filtered = filtered.filter(
        (furniture) => furniture.weight === parseInt(searchWeight, 10)
      );
    }

    if (searchPrice !== "") {
      filtered = filtered.filter(
        (furniture) => furniture.price.toString() === searchPrice
      );
    }

    setFilteredFurnitures(filtered);
  }, [searchWeight, searchPrice, furnitures]);

  const handleWeightChange = (value) => {
    setSearchWeight(value);
  };

  const handlePriceChange = (value) => {
    setSearchPrice(value);
  };

  if (loading) {
    return (
      <main className="flex flex-col items-center mb-5">
        <div className="w-full grid gap-5 m-5">
          <Loading />
          <Loading />
          <Loading />
        </div>
      </main>
    );
  }

  return (
    <main className="w-3/4 mx-auto mt-5">
      <section className="m-3">
        <SearchInput
          id="weight"
          placeholder="Search by weight"
          onChange={handleWeightChange}
        />
        <SearchInput
          id="price"
          placeholder="Search by price"
          onChange={handlePriceChange}
        />

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Weight
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredFurnitures.map((furniture) => (
              <tr key={furniture.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {furniture.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {furniture.weight} kg
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {formatter.format(furniture.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Link className="m-3 block" to="/">
        <IoArrowBackCircleSharp size={32} />
      </Link>
    </main>
  );
}
