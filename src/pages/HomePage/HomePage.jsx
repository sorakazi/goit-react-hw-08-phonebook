import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';
import { ContactPhone } from '@mui/icons-material';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phone Book</title>
      </Helmet>
      <div className={css.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          <div className={css.logo}>
            <ContactPhone style={{ fontSize: '150px' }} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 64 64"
              fill="none"
            >
              {/* Crescent Moon Shape */}
              <path
                d="M32 2C17.3 2 5 14.3 5 29c0 14.7 12.3 27 27 27 8.7 0 16.4-4.2 21-10.8C43.5 49.3 35 47 32 47c-12.7 0-23-10.3-23-23S19.3 2 32 2c3 0 5.5.5 8.3 1.5C36.6 2.8 34.3 2 32 2z"
                fill="#0033A0"
              />
              {/* Text with burning effect */}
              <text
                x="22"
                y="36"
                fontFamily="Arial, sans-serif"
                fontSize="22"
                fontWeight="bold"
                fontStyle="italic"
                fill="#0033A0"
                textAnchor="middle"
              >
                e
              </text>
              <text
                x="34"
                y="42"
                fontFamily="Arial, sans-serif"
                fontSize="28"
                fontWeight="bold"
                fontStyle="italic"
                fill="#0033A0"
                textAnchor="middle"
              >
                d
              </text>
            </svg>
          </div>

          <h1 className={css.title}>Hello and welcome to Your Phone Book!</h1>
          <h2>We're thrilled to have you here</h2>
        </motion.div>

        <footer>
          <h3>Elevate Your Contact Management Experience</h3>
          <p>
            Discover the ultimate solution for organizing and managing your
            contacts effortlessly.
          </p>
          <p>
            Our phone book app combines simplicity with advanced features to
            ensure your contact list is always up-to-date and easy to navigate.
          </p>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
