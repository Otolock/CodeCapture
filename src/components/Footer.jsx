import React from 'react';

const Footer = ({ version }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center border-t py-4 mt-8">
      <p className="text-sm text-gray-600">
        Version {version} &copy; {currentYear} Antonio Santos
      </p>
    </footer>
  );
};

export default Footer;
