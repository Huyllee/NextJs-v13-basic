"use client"; //chuyen trang = next/navigation va dung bootstrap thi thuong dung cho client
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const Facebook = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  return (
    <div>
      Facebook
      <div>
        <Button variant="primary" onClick={() => handleBtn()}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default Facebook;
