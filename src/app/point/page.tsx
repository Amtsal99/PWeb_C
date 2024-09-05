"use client";

import { useEffect, useState } from "react";
import ButtonLink from "../components/ButtonLink";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedValue, setSelectedValue] = useState<string>("Poin Keaktifan");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_POINTS as string
        );
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
    <section className="p-6">
      <h1 className="text-center text-4xl font-bold mb-6">
        Daftar Poin Keaktifan
      </h1>
      <div className="flex justify-center">
        <table
          className="border-1 border-gray-500 border p-10 border-spacing-0"
          cellPadding="6"
        >
          <thead className="border border-1 border-gray-500">
            <tr>
              <th>NRP</th>
              <th>Nama</th>
              <th>
                <select
                  name="Poin Keaktifan"
                  id="dropdown"
                  onChange={handleSelectChange}
                >
                  <option value="Poin Keaktifan">Sum</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="P3">P3</option>
                  <option value="P4">P4</option>
                  <option value="P5">P5</option>
                  <option value="P6">P6</option>
                  <option value="P7">P7</option>
                  <option value="P8">P8</option>
                  <option value="P9">P9</option>
                  <option value="P10">P10</option>
                  <option value="P11">P11</option>
                  <option value="P12">P12</option>
                  <option value="P13">P13</option>
                  <option value="P14">P14</option>
                  <option value="P15">P15</option>
                  <option value="P16">P16</option>
                </select>
              </th>
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
                  {item[selectedValue]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonLink href="/" text="Back to Home" className="mt-6" />
    </section>
  );
}
