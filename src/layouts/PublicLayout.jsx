import { Outlet } from "react-router-dom";



const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

    </div>
  );
};

export default PublicLayout;
