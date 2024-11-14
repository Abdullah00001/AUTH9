import { Helmet } from "react-helmet-async";
import VerifyUserAccount from "../../features/Authentication/Recover Account/components/VerifyUserAccount";

const VerifyCode = () => {
  return (
    <>
      <Helmet>
        <title>Postbook | Forgot Password</title>
      </Helmet>
      <section>
        <div className='flex h-[80vh] justify-center items-center'>
          <VerifyUserAccount/>
        </div>
      </section>
    </>
  );
};

export default VerifyCode;
