"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import ButtonLink from "../components/ButtonLink";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/hr1qxsn08powk");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="p-6 w-full">
      <h1 className="text-center text-4xl font-bold mb-6 flex justify-center gap-3">
        Daftar Akun Github <FaGithub />
      </h1>
      <div className="flex flex-col items-center ">
        <table
          className="border-1 border-gray-500 border p-10 border-spacing-0"
          cellPadding="6"
        >
          <thead className="border border-1 border-gray-500">
            <tr>
              <th>NRP</th>
              <th>Nama</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border border-1 border-gray-500">
                <td className="border border-1 text-center border-gray-500">
                  {item["NRP"]}
                </td>
                <td className="border border-1 border-gray-500">
                  {item["Nama"]}
                </td>
                <td className="border border-1 border-gray-500 text-center">
                  {item["Github"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ButtonLink
          href="/"
          text="Back to Home"
          className="mt-6 px-24 max-md:px-6"
        />
      </div>
    </section>
  );
}
