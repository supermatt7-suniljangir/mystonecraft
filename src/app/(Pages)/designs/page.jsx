import { redirect } from "next/navigation";

const Designs = () => {
  // Redirect to the interior design page by default
  return redirect("/designs/interior-design");
};

export default Designs;
