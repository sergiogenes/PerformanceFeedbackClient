import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const IsAdmin = ({ children }) => {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  setTimeout(() => {
    if (!user.isAdmin) return router.back();
  }, 5000);

  return user.isAdmin ? (
    <>{children}</>
  ) : (
    <h1>
      Lo sentimos, Ud. no tiene los previlegios para acceder a este contenido!
    </h1>
  );
};

export default IsAdmin;
