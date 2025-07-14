import "./user.css";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import Account from "../../components/Accounts/Account";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function User() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  const accountContent = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <>
      <Header />
      <main className="dark__bg">
        <Profile />

        {accountContent.map((content, i) => (
          <Account
            key={i}
            title={content.title}
            amount={content.amount}
            description={content.description}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default User;
