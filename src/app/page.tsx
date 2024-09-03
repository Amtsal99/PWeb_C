"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://sheetdb.io/api/v1/wwwvwphi441oo"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const result = await response.json();
          setData(result);
        } catch (error: any) {
          setError(error.message);
        }
      };
      fetchData();
    }
  }, [router]);

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
          className="border-1 border-gray-500 border"
          cellPadding="10"
          cellSpacing="0"
        >
          <thead className="border border-1 border-gray-500">
            <tr>
              <th>NRP</th>
              <th>Nama</th>
              <th>Poin Keaktifan</th>
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
                  {item["Pertemuan"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}