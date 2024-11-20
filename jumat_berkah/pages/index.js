import { supabase } from "@/utils/supabaseClient";

export async function getServerSideProps() {
  // Ambil data dari tabel di Supabase
  const { data, error } = await supabase.from("Locations").select("*");

  if (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      data: data || [], // Kirim data sebagai props ke halaman
    },
  };
}

const Home = ({ data }) => {
  return (
    <div>
      <h1>Data dari Supabase</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
